import type { Editor } from 'grapesjs';
import { ComponentPluginOptions } from '.';
import { componentsToQuery, isComponentType } from './utils';
import { type as typeHead } from './Head';

export const type = 'mj-title';

export default (editor: Editor, { coreMjmlModel, coreMjmlView }: ComponentPluginOptions) => {
  editor.Components.addType(type, {
    isComponent: isComponentType(type),
    model: {
      ...coreMjmlModel,
      defaults: {
        draggable: componentsToQuery(typeHead),
        highlightable: false,
        stylable: false,
      },
    },
    view: {
      ...coreMjmlView,
      tagName: 'div',
      attributes: {
        style: 'display:none',
      },
      getTemplateFromMjml() {
        return this.model.get('content') || '';
      },
    },
  });
};