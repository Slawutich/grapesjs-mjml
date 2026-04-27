import type { Editor } from 'grapesjs';
import { ComponentPluginOptions } from '.';
import { componentsToQuery, isComponentType } from './utils';
import { type as typeAccordionElement } from './AccordionElement';

export const type = 'mj-accordion-title';

export default (editor: Editor, { coreMjmlModel, coreMjmlView }: ComponentPluginOptions) => {
  editor.Components.addType(type, {
    isComponent: isComponentType(type),
    model: {
      ...coreMjmlModel,
      defaults: {
        draggable: componentsToQuery(typeAccordionElement),
        highlightable: false,
        stylable: [
          'font-family',
          'font-size',
          'font-weight',
          'color',
          'background-color',
          'padding',
          'padding-top',
          'padding-left',
          'padding-right',
          'padding-bottom',
        ],
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