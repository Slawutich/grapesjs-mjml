import type { Plugin } from 'grapesjs';
import loadBlocks from './blocks';
import loadCommands from './commands';
import loadComponents from './components';
import mjml2html from './components/parser';
import en from './locale/en';
import loadPanels from './panels';
import loadStyle from './style';
import { PluginOptions } from './types';

const headComponentTypes = new Set([
  'mj-attributes',
  'mj-breakpoint',
  'mj-font',
  'mj-html-attributes',
  'mj-preview',
  'mj-style',
  'mj-title',
]);

const normalizeMjmlHead = (editor: Parameters<Plugin<PluginOptions>>[0]) => {
  const wrapper = editor.Components.getWrapper();
  const mjml = wrapper?.components().find((component: any) => component.get('type') === 'mjml');

  if (!mjml) {
    return;
  }

  const components = mjml.components();
  const head = components.find((component: any) => component.get('type') === 'mj-head');
  const body = components.find((component: any) => component.get('type') === 'mj-body');

  if (!head || !body) {
    return;
  }

  const orphanHeadComponents = components.filter((component: any) => headComponentTypes.has(component.get('type')));

  if (!orphanHeadComponents.length) {
    return;
  }

  orphanHeadComponents.forEach((component: any) => {
    component.remove({ temporary: true });
    head.append(component, { at: head.components().length });
  });

  body.trigger('change:components');
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
    columnsPadding: '10px 0',
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

  [loadBlocks, loadComponents, loadCommands, loadPanels, loadStyle].forEach((module) => module(editor, opts));

  editor.on('load', () => {
    normalizeMjmlHead(editor);
  });
};

export default plugin;
