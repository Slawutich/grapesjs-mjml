// Specs https://documentation.mjml.io/#mj-navbar
import type { Editor } from 'grapesjs';
import { ComponentPluginOptions } from '.';
import { componentsToQuery, getName, isComponentType, mjmlConvert } from './utils';
import { type as typeColumn } from './Column';
import { type as typeHero } from './Hero';
import { type as typeNavBarLink } from './NavBarLink';

export const type = 'mj-navbar';

export default (editor: Editor, { opt, coreMjmlModel, coreMjmlView, sandboxEl }: ComponentPluginOptions) => {
  editor.Components.addType(type, {
    isComponent: isComponentType(type),
    model: {
      ...coreMjmlModel,
      defaults: {
        name: getName(editor, 'navBar'),
        draggable: componentsToQuery([typeColumn, typeHero]),
        droppable: componentsToQuery(typeNavBarLink),
        'style-default': {
          // TODO
        },
        stylable: [
          // TODO
        ],
        traits: [
          {
            type: 'select',
            label: 'Hamburger',
            name: 'hamburger',
            options: [
              { value: 'hamburger', name: 'ON' },
              { value: '', name: 'OFF' },
            ],
          },
        ],
      },
    },

    view: {
      ...coreMjmlView,
      tagName: 'tr',
      attributes: {
        style: 'pointer-events: all; display: table; width: 100%',
      },

      init() {
        coreMjmlView.init.call(this);
        this.listenTo(this.model.get('components'), 'add remove update', this.render);
      },

      async getTemplateFromMjml() {
        const mjmlTmpl = this.getMjmlTemplate();
        const innerMjml = this.getInnerMjmlTemplate();
        const mjmlStart = this.injectDocumentHead(mjmlTmpl.start);
        const htmlOutput = await mjmlConvert(
          opt.mjmlParser,
          `${mjmlStart}
          ${innerMjml.start}${innerMjml.end}${mjmlTmpl.end}`,
          opt.fonts,
        );
        const html = htmlOutput.html;

        // I need styles for hamburger
        const styles: string[] = [];
        sandboxEl.innerHTML = html;
        const styleArr: HTMLStyleElement[] = Array.from(sandboxEl.querySelectorAll('style'));
        styleArr.forEach((item) => {
          styles.push(item.innerHTML);
        });

        const content = html.replace(/<body(.*)>/, '<body>');
        const start = content.indexOf('<body>') + 6;
        const end = content.indexOf('</body>');
        sandboxEl.innerHTML = content.substring(start, end).trim();
        const componentEl = this.getTemplateFromEl(sandboxEl);

        // Copy all rendered attributes (TODO need for all)
        const attributes: Record<string, any> = {};
        const elAttrs = componentEl.attributes;

        for (let elAttr, i = 0, len = elAttrs.length; i < len; i++) {
          elAttr = elAttrs[i];
          attributes[elAttr.name] = elAttr.value;
        }

        return {
          attributes,
          content: componentEl.innerHTML,
          style: styles.join(' '),
        };
      },

      render() {
        const renderId = (this.__renderId || 0) + 1;
        this.__renderId = renderId;
        this.renderAttributes();
        this.__renderPromise = Promise.resolve(this.getTemplateFromMjml())
          .then((mjmlResult: any) => {
            if (this.__renderId !== renderId) {
              return this;
            }

            this.el.innerHTML = mjmlResult.content;
            this.$el.attr(mjmlResult.attributes);
            editor.addComponents(`<style>${mjmlResult.style}</style>`);
            this.getChildrenContainer().innerHTML = this.model.get('content')!;
            this.renderChildren();
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

      getMjmlTemplate() {
        return {
          start: `<mjml><mj-body><mj-column>`,
          end: `</mj-column></mj-body></mjml>`,
        };
      },

      getTemplateFromEl(sandboxEl: any) {
        return sandboxEl.firstChild.querySelector('tr');
      },

      getChildrenSelector() {
        return 'div.mj-inline-links';
      },

      async rerender() {
        await coreMjmlView.rerender.call(this);
        await Promise.all(this.model.components().models.map(async (item: any) => {
          if (item.attributes.type != typeNavBarLink) {
            return;
          }
          await item.view.rerender();
        }));
      },
    },
  });
};
