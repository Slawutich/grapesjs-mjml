import type { Plugin } from 'grapesjs';
import loadBlocks from './blocks';
import loadCommands from './commands';
import loadComponents from './components';
import mjml2html from './components/parser';
import en from './locale/en';
import loadPanels from './panels';
import loadTraits from './traits';
import loadStyle from './style';
import { PluginOptions } from './types';
import { debounce, expandShorthand } from './components/utils';

/**
 * After all components are loaded, read mj-attributes from mj-head
 * and apply their values to body components. This is needed because
 * during component init(), the component tree is not yet fully assembled,
 * so mj-attributes cannot be read at that time.
 *
 * For components added later (D&D), init() handles it via getMjAttributeDefaults.
 */
const applyMjAttributes = (editor: Parameters<Plugin<PluginOptions>>[0]) => {
  const getMjAttributeDefaults = (editor as any).__getMjAttributeDefaults as
    ((type: string) => Record<string, string>) | undefined;
  if (!getMjAttributeDefaults) return;

  const wrapper = editor.Components.getWrapper();
  const mjml = wrapper?.components().find((c: any) => c.get('type') === 'mjml');
  if (!mjml) return;

  const body = mjml.components().find((c: any) => c.get('type') === 'mj-body');
  if (!body) return;

  const applyToComponent = (component: any) => {
    const tagName = component.get('tagName');
    const headDefaults = getMjAttributeDefaults(tagName);

    if (Object.keys(headDefaults).length > 0 && typeof component.getAttrToHTML === 'function') {
      const styleDefault = component.get('style-default') || {};
      const explicitAttrs = component.getAttrToHTML();

      // Expand shorthands (e.g. "padding" → "padding-top" etc.) in each
      // source before merging so that spread by priority works correctly:
      // explicit attrs > mj-attributes defaults > component style-default.

      //console.log('Applying MJML attributes to', tagName, { styleDefault, headDefaults, explicitAttrs });

      const newAttrs = {
        ...expandShorthand(styleDefault),
        ...expandShorthand(headDefaults),
        ...expandShorthand(explicitAttrs),
      };

      component.set('attributes', newAttrs);
    }

    component.components().forEach((c: any) => applyToComponent(c));
  };

  body.components().forEach((c: any) => applyToComponent(c));
};

export * from './types';

export type RequiredPluginOptions = Required<PluginOptions>;

const plugin: Plugin<PluginOptions> = (editor, opt = {}) => {
  const opts: RequiredPluginOptions = {
    blocks: [
      'mj-accordion',
      'mj-1-column',
      'mj-2-columns',
      'mj-3-columns',
      'mj-text',
      'mj-button',
      'mj-carousel',
      'mj-image',
      'mj-divider',
      'mj-social-group',
      'mj-social-element',
      'mj-spacer',
      'mj-navbar',
      'mj-navbar-link',
      'mj-hero',
      'mj-table',
      'mj-wrapper',
      'mj-raw',
    ],
    block: () => ({}),
    codeViewerTheme: 'hopscotch',
    customComponents: [],
    importPlaceholder: '',
    imagePlaceholderSrc: '',
    mjmlParser: mjml2html,
    overwriteExport: true,
    preMjml: '',
    postMjml: '',
    resetBlocks: true,
    resetStyleManager: true,
    resetDevices: true,
    hideSelector: true,
    useXmlParser: false,
    useCustomTheme: true,
    columnsPadding: '',
    i18n: {},
    fonts: {},
    // Export 'mjml', 'html' or both (leave empty) TODO
    // exportOnly: '',
    ...opt,
  };

  const config = editor.getConfig();

  // I need to prevent forced class creation as classes aren't working
  // at the moment
  // @ts-ignore
  config.forceClass = false;

  // Don't need to create css rules with media
  // @ts-ignore
  config.devicePreviewMode = true;

  // Doesn't work without inline styling
  // @ts-ignore
  config.avoidInlineStyle = false;

  // Hide default selector manager
  if (opts.hideSelector) {
    const smConfig = editor.SelectorManager.getConfig();
    // @ts-ignore
    smConfig.custom = true;
  }

  // Use XML Parser
  if (opts.useXmlParser) {
    editor.Parser.getConfig().optionsHtml!.htmlType = 'text/xml';
  }

  if (opts.useCustomTheme && typeof window !== 'undefined') {
    const primaryColor = '#2c2e35';
    const secondaryColor = '#888686';
    const quaternaryColor = '#f45e43';
    const prefix = 'gjs-';
    let cssString = '';

    [
      ['one', primaryColor],
      ['two', secondaryColor],
      ['four', quaternaryColor],
    ].forEach(([cnum, ccol]) => {
      cssString += `
        .${prefix}${cnum}-bg {
          background-color: ${ccol};
        }
        .${prefix}${cnum}-color {
          color: ${ccol};
        }
        .${prefix}${cnum}-color-h:hover {
          color: ${ccol};
        }
      `;
    });

    const style = document.createElement('style');
    style.innerText = cssString;
    document.head.appendChild(style);
  }

  // @ts-ignore Load i18n files
  editor.I18n.addMessages({
    en,
    ...opts.i18n,
  });

  [loadBlocks, loadComponents, loadCommands, loadPanels, loadTraits, loadStyle].forEach((module) => module(editor, opts));

  editor.on('load', () => {
    applyMjAttributes(editor);
  });

  // Automatically apply MJML head logic whenever the component tree is rebuilt
  // (e.g. external editor.setComponents() calls).
  const debouncedMjmlApply = debounce(() => {
    applyMjAttributes(editor);
  }, 0);

  editor.on('component:add', (component: any) => {
    if (component.get('type') === 'mj-body') {
      debouncedMjmlApply();
    }
  });
};

export default plugin;
