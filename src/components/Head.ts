// Specs: https://documentation.mjml.io/#mj-head
import type { Editor } from 'grapesjs';
import { isComponentType, componentsToQuery, getName } from './utils';
import { ComponentPluginOptions } from '.';

export const type = 'mj-head';

export default (editor: Editor, _options: ComponentPluginOptions) => {
  editor.Components.addType(type, {
    isComponent: isComponentType(type),
    model: {
      defaults: {
        name: 'Head',
        draggable: false,
        droppable: componentsToQuery([
          'mj-preview',
          'mj-attributes',
          'mj-breakpoint',
          'mj-style',
          'mj-font',
          'mj-html-attributes',
          'mj-title',
          'mj-raw'
        ]),
        stylable: false,
        copyable: false,
        removable: false,
        highlightable: false,
        layerable: false,
        traits: [],
      },
    },
  });
};
