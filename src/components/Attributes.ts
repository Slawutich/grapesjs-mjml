// Specs: https://documentation.mjml.io/#mj-attributes
import type { Editor } from 'grapesjs';
import { ComponentPluginOptions } from '.';
import { isComponentType } from './utils';

export const type = 'mj-attributes';

export default (editor: Editor, { coreMjmlModel, coreMjmlView }: ComponentPluginOptions) => {
  editor.Components.addType(type, {
    isComponent: isComponentType(type),
    model: {
      ...coreMjmlModel,
      defaults: {
        draggable: false,
        droppable: true,
        copyable: false,
        removable: false,
        highlightable: false,
        stylable: false,
        'style-default': {
          display: 'none',
        },
      },
    },
    view: {
      ...coreMjmlView,
      tagName: 'div',
      attributes: {
        style: 'display:none',
      },
      async rerender() {
        this.render();
        return await this.__renderPromise;
      },
      getTemplateFromMjml() {
        return '';
      },
    },
  });
};