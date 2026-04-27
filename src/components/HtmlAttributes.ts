import type { Editor } from 'grapesjs';
import { ComponentPluginOptions } from '.';
import { componentsToQuery, isComponentType } from './utils';
import { type as typeHead } from './Head';
import { type as typeSelector } from './Selector';

export const type = 'mj-html-attributes';

export default (editor: Editor, { coreMjmlModel, coreMjmlView }: ComponentPluginOptions) => {
  editor.Components.addType(type, {
    isComponent: isComponentType(type),
    model: {
      ...coreMjmlModel,
      defaults: {
        draggable: componentsToQuery(typeHead),
        droppable: componentsToQuery(typeSelector),
        highlightable: false,
        stylable: false,
        traits: [],
      },
    },
    view: {
      ...coreMjmlView,
      tagName: 'div',
      attributes: {
        style: 'display:none',
      },
      getTemplateFromMjml() {
        return '';
      },
    },
  });
};