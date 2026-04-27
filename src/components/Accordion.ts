import type { Editor } from 'grapesjs';
import { ComponentPluginOptions } from '.';
import { componentsToQuery, isComponentType } from './utils';
import { type as typeColumn } from './Column';
import { type as typeAccordionElement } from './AccordionElement';

export const type = 'mj-accordion';

export default (editor: Editor, { coreMjmlModel, coreMjmlView }: ComponentPluginOptions) => {
  editor.Components.addType(type, {
    isComponent: isComponentType(type),
    model: {
      ...coreMjmlModel,
      defaults: {
        name: 'Accordion',
        draggable: componentsToQuery(typeColumn),
        droppable: componentsToQuery(typeAccordionElement),
        stylable: [
          'font-family',
          'icon-align',
          'icon-width',
          'icon-height',
          'icon-position',
          'padding',
          'padding-top',
          'padding-left',
          'padding-right',
          'padding-bottom',
          'border',
          'border-width',
          'border-style',
          'border-color',
        ],
      },
    },
    view: {
      ...coreMjmlView,
      tagName: 'div',
      attributes: {
        style: 'pointer-events: all; width: 100%;',
      },

      getMjmlTemplate() {
        return {
          start: `<mjml><mj-body><mj-column>`,
          end: `</mj-column></mj-body></mjml>`,
        };
      },

      getInnerMjmlTemplate() {
        const orig = coreMjmlView.getInnerMjmlTemplate.call(this);
        const children = this.model.components().models.map((component: any) => component.toHTML()).join('');
        return {
          start: `${orig.start}${children}`,
          end: orig.end,
        };
      },

      getTemplateFromEl(sandboxEl: any) {
        return sandboxEl.querySelector('table.mj-accordion')?.outerHTML || '';
      },

      renderChildren() {},

      init() {
        coreMjmlView.init.call(this);
        this.listenTo(this.model.get('components'), 'add remove update', this.render);
      },
    },
  });
};