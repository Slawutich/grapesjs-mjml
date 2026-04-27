import type { Editor } from 'grapesjs';
import { ComponentPluginOptions } from '.';
import { componentsToQuery, isComponentType } from './utils';
import { type as typeAccordion } from './Accordion';
import { type as typeAccordionTitle } from './AccordionTitle';
import { type as typeAccordionText } from './AccordionText';

export const type = 'mj-accordion-element';

export default (editor: Editor, { coreMjmlModel, coreMjmlView }: ComponentPluginOptions) => {
  editor.Components.addType(type, {
    isComponent: isComponentType(type),
    model: {
      ...coreMjmlModel,
      defaults: {
        draggable: componentsToQuery(typeAccordion),
        droppable: componentsToQuery([typeAccordionTitle, typeAccordionText]),
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
        return '';
      },
    },
  });
};