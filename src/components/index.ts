import type { Editor, ToHTMLOptions } from 'grapesjs';
import { mjmlConvert, debounce, componentsToQuery } from './utils';
import loadMjml from './mjml';
import loadHead from './Head';
import loadAttributes from './Attributes';
import loadBreakpoint from './Breakpoint';
import loadStyle from './Style';
import loadFont from './Font';
import loadHtmlAttributes from './HtmlAttributes';
import loadHtmlAttribute from './HtmlAttribute';
import loadPreview from './Preview';
import loadSelector from './Selector';
import loadTitle from './Title';
import loadBody from './Body';
import loadWrapper from './Wrapper';
import loadSection from './Section';
import loadGroup from './Group';
import loadColumn from './Column';
import loadAccordion from './Accordion';
import loadAccordionElement from './AccordionElement';
import loadAccordionTitle from './AccordionTitle';
import loadAccordionText from './AccordionText';
import loadText from './Text';
import loadButton from './Button';
import loadCarousel from './Carousel';
import loadCarouselImage from './CarouselImage';
import loadImage from './Image';
import loadSocial from './Social';
import loadSocialElement from './SocialElement';
import loadDivider from './Divider';
import loadSpacer from './Spacer';
import loadNavBar from './NavBar';
import loadNavBarLink from './NavBarLink';
import loadHero from './Hero';
import loadRaw from './Raw';
import loadTable from './Table';
import { RequiredPluginOptions, PluginOptions } from '..';

export type ComponentPluginOptions = {
  /**
   * Core model, which can be extended
   */
  coreMjmlModel: any;
  /**
   * Core view, which can be extended
   */
  coreMjmlView: any;
  opt: Required<PluginOptions>;
  sandboxEl: HTMLDivElement;
  componentsToQuery: typeof componentsToQuery;
};

export default (editor: Editor, opt: RequiredPluginOptions) => {
  const { Components } = editor;
  // @ts-ignore
  const ComponentsView = Components.ComponentsView;
  const sandboxEl = document.createElement('div');

  /**
   * Read mj-attributes from mj-head and return merged defaults
   * for the given component type. Returns {} if the tree is not ready.
   */
  function getMjAttributeDefaults(componentType: string): Record<string, string> {
    const wrapper = editor.Components.getWrapper();
    const mjml = wrapper?.components().find((c: any) => c.get('type') === 'mjml');
    if (!mjml) return {};

    const head = mjml.components().find((c: any) => c.get('type') === 'mj-head');
    if (!head) return {};

    const attrsComp = head.components().find((c: any) => c.get('type') === 'mj-attributes');
    if (!attrsComp) return {};

    const result: Record<string, string> = {};

    attrsComp.components().forEach((child: any) => {
      const childTag = child.get('tagName');
      if (childTag !== 'mj-all' && childTag !== componentType) return;

      // Read raw attributes directly to avoid recursion with getAttrToHTML()
      const attrs: Record<string, string> = { ...child.get('attributes') };
      delete attrs.style;
      delete attrs.id;

      // mj-all comes first, type-specific overrides it
      Object.assign(result, attrs);
    });

    return result;
  }

  // Expose for use in applyMjAttributes (src/index.ts)
  (editor as any).__getMjAttributeDefaults = getMjAttributeDefaults;

  // MJML Core model
  let coreMjmlModel = {
    init() {
      const attrs = { ...this.get('attributes') };
      const tagName = this.get('tagName');
      const headDefaults = getMjAttributeDefaults(tagName);
      const style = { ...this.get('style-default'), ...headDefaults, ...this.get('style') };

      for (let prop in style) {
        if (!(prop in attrs)) {
          attrs[prop] = style[prop];
        }
      }

      this.set('attributes', attrs);
      this.set('style', attrs);
      this.listenTo(this, 'change:style', this.handleStyleChange);
      this.listenTo(this, 'change:attributes', this.handleAttributeChange);
    },

    handleAttributeChange(m: any, v: any, opts: any) {
      this.setStyle(this.get('attributes'), opts);
    },

    getStylesToAttributes() {
      const style = this.getStyle() || {};
      delete style.__p;
      return style;
    },

    handleStyleChange(m: any, v: any, opts: any) {
      this.set('attributes', this.getStylesToAttributes(), opts);
    },

    getMjmlAttributes() {
      const attr = this.get('attributes') || {};
      delete attr.style;
      const src = this.get('src');
      if (src) attr.src = src;
      return attr;
    },

    /**
     * This will avoid rendering default attributes and
     * attributes already defined in mj-attributes (mj-head)
     * @return {Object}
     */
    getAttrToHTML() {
      const attr = { ...this.get('attributes') };
      const style = { ...this.get('style-default') };
      delete attr.style;
      delete attr.id;

      // Only strip head defaults for body components, not for
      // components inside mj-attributes (which define the defaults themselves)
      let isInsideHead = false;
      let parent = this.parent?.();
      while (parent) {
        if (parent.get?.('type') === 'mj-head') {
          isInsideHead = true;
          break;
        }
        parent = parent.parent?.();
      }
      const headDefaults = isInsideHead ? {} : getMjAttributeDefaults(this.get('tagName'));

      for (let prop in attr) {
        const value = attr[prop];

        if (value && (value === style[prop] || value === headDefaults[prop])) {
          delete attr[prop];
        }
      }

      return attr;
    },

    /**
     * Have to change a few things for the MJML's xml (no id, style, class)
     */
    toHTML(opts: ToHTMLOptions) {
      const model = this;
      const tag = model.get('tagName');
      const voidTag = model.get('void');
      const attr = this.getAttrToHTML();
      let code = '';
      let strAttr = '';

      for (let prop in attr) {
        const val = attr[prop];
        const hasValue = typeof val !== 'undefined' && val !== '';
        strAttr += hasValue ? ` ${prop}="${val}"` : '';
      }

      code += `<${tag}${strAttr}${voidTag ? '/' : ''}>` + model.get('content');

      model.components().forEach((model: any) => {
        code += model.toHTML(opts);
      });

      if (!voidTag) {
        code += `</${tag}>`;
      }

      return code;
    },

    isHidden() {
      return this.getStyle().display === 'none';
    },
  } as any;

  /**
   * MJML Core View.
   * MJML is designed to compile from a valid MJML document therefore any time we update some component
   * we have to recompile its MJML to HTML.
   *
   * To get the proper HTML of our updated component we have to build a new MJML document and here we can
   * find different helpers to accomplish that (eg. `getMjmlTemplate`, `getInnerMjmlTemplate`).
   *
   * Once the MJML is compiled (in `getTemplateFromMjml`) we have to extract its HTML from the
   * element (`getTemplateFromEl`).
   *
   * We should also instruct the editor to understand where new inner components are placed in our compiled
   * HTML once they are dropped inside, for that case you can rely on `getChildrenSelector` in your
   * component definition.
   *
   * Each MJML element differs in its output HTML structure and might also change based on inner components
   * (you might need to change `getMjmlTemplate` based on current inner Components).
   *
   * One easy way to test the HTML output is to use MJML live editor (https://mjml.io/try-it-live) with the
   * "View HTML" enabled and check there how it changes in order to override properly provided helpers.
   *
   */
  let coreMjmlView = {
    init() {
      this.stopListening(this.model, 'change:style');
      this.listenTo(this.model, 'change:attributes change:src', this.rerender);
      this.debouncedRender = debounce(this.render.bind(this), 0);
      this.__renderId = 0;
    },

    async rerender() {
      this.render(null, null, {}, 1);
      return await this.__renderPromise;
    },

    /**
     * Get the base MJML template wrapper tags
     */
    getMjmlTemplate() {
      return {
        start: `<mjml>`,
        end: `</mjml>`,
      };
    },

    isInsideHead() {
      let component = this.model;

      while (component) {
        if (component.get?.('type') === 'mj-head') {
          return true;
        }

        component = component.parent?.();
      }

      return false;
    },

    getDocumentMjmlHead() {
      if (this.isInsideHead()) {
        return '';
      }

      const wrapper = editor.Components.getWrapper();
      const mjml = wrapper?.components().find((component: any) => component.get('type') === 'mjml');
      const head = mjml?.components().find((component: any) => component.get('type') === 'mj-head');

      return head ? head.toHTML() : '';
    },

    injectDocumentHead(start: string) {
      const head = this.getDocumentMjmlHead();

      if (!head || /<mj-head[\s>]/.test(start)) {
        return start;
      }

      const mjmlOpen = start.match(/^<mjml[^>]*>/);

      if (!mjmlOpen) {
        return start;
      }

      return `${mjmlOpen[0]}${head}${start.slice(mjmlOpen[0].length)}`;
    },

    /**
     * Build the MJML of the current component
     */
    getInnerMjmlTemplate() {
      const { model } = this;
      const tagName = model.get('tagName');
      const attr = model.getMjmlAttributes();
      let strAttr = '';

      for (let prop in attr) {
        const val = attr[prop];
        strAttr += typeof val !== 'undefined' && val !== '' ? ' ' + prop + '="' + val + '"' : '';
      }

      return {
        start: `<${tagName}${strAttr}>`,
        end: `</${tagName}>`,
      };
    },

    /**
     * Get the proper HTML string from the element containing compiled MJML template.
     */
    getTemplateFromEl(sandboxEl: any) {
      return sandboxEl.firstChild.innerHTML;
    },

    /**
     * Get HTML from MJML template.
     */
    async getTemplateFromMjml() {
      const mjmlTmpl = this.getMjmlTemplate();
      const innerMjml = this.getInnerMjmlTemplate();
      const mjmlStart = this.injectDocumentHead(mjmlTmpl.start);
      const mjml = `${mjmlStart}${innerMjml.start}${innerMjml.end}${mjmlTmpl.end}`;
      const htmlOutput = await mjmlConvert(opt.mjmlParser, mjml, opt.fonts);
      let html = htmlOutput.html;
      html = html.replace(/<body(.*)>/, '<body>');
      let start = html.indexOf('<body>') + 6;
      let end = html.indexOf('</body>');
      html = html.substring(start, end).trim();
      sandboxEl.innerHTML = html;
      return this.getTemplateFromEl(sandboxEl);
    },

    /**
     * Render children components
     * @private
     */
    renderChildren(appendChildren: boolean) {
      this.updateContent();
      const container = this.getChildrenContainer();

      // This trick will help perfs by caching children
      if (!appendChildren) {
        this.childrenView =
          this.childrenView ||
          // @ts-ignore
          new ComponentsView({
            collection: this.model.get('components'),
            // @ts-ignore
            config: this.config,
            componentTypes: this.opts.componentTypes,
          });
        this.childNodes = this.childrenView.render(container).el.childNodes;
      } else {
        this.childrenView.parentEl = container;
      }

      const childNodes = Array.prototype.slice.call(this.childNodes);

      for (let i = 0, len = childNodes.length; i < len; i++) {
        container.appendChild(childNodes.shift());
      }
    },

    checkVisibility() {
      if (this.model.isHidden?.()) {
        this.el.style.display = 'none';
      }
    },

    renderStyle() {
      this.el.style.cssText = this.attributes.style;
      this.checkVisibility();
    },

    render(p: any, c: any, opts: any, appendChildren: boolean) {
      const renderId = (this.__renderId || 0) + 1;
      this.__renderId = renderId;
      this.renderAttributes();
      this.__renderPromise = Promise.resolve(this.getTemplateFromMjml())
        .then((template: string) => {
          if (this.__renderId !== renderId) {
            return this;
          }

          this.el.innerHTML = template;
          this.renderChildren(appendChildren);
          this.childNodes = this.getChildrenContainer().childNodes;
          this.renderStyle();
          this.postRender();

          return this;
        })
        .catch((error: Error) => {
          editor.log(error.message, { level: 'error' });
          return this;
        });

      return this;
    },
  } as any;

  // MJML Internal view (for elements inside mj-columns)
  const compOpts = { coreMjmlModel, coreMjmlView, opt, sandboxEl, componentsToQuery };

  // Avoid the <body> tag from the default wrapper
  editor.Components.addType('wrapper', {
    model: {
      defaults: {
        highlightable: false,
      },
      toHTML(opts: any) {
        return this.getInnerHTML(opts)!;
      },
    },
  });

  [
    loadMjml,
    loadHead,
    loadAttributes,
    loadBreakpoint,
    loadStyle,
    loadFont,
    loadHtmlAttributes,
    loadHtmlAttribute,
    loadPreview,
    loadSelector,
    loadTitle,
    loadBody,
    loadWrapper,
    loadSection,
    loadGroup,
    loadColumn,
    loadAccordion,
    loadAccordionElement,
    loadAccordionTitle,
    loadAccordionText,
    loadButton,
    loadText,
    loadCarousel,
    loadCarouselImage,
    loadImage,
    loadSocial,
    loadSocialElement,
    loadDivider,
    loadSpacer,
    loadNavBar,
    loadNavBarLink,
    loadHero,
    loadRaw,
    loadTable,
    ...opt.customComponents,
  ].forEach((module) => module(editor, compOpts));
};
