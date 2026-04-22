import type { Editor } from 'grapesjs';
import { ComponentPluginOptions } from '.';
import { componentsToQuery, isComponentType } from './utils';
import { type as typeColumn } from './Column';
import { type as typeCarouselImage } from './CarouselImage';

export const type = 'mj-carousel';

export default (editor: Editor, { coreMjmlModel, coreMjmlView }: ComponentPluginOptions) => {
  editor.Components.addType(type, {
    isComponent: isComponentType(type),
    model: {
      ...coreMjmlModel,
      defaults: {
        name: 'Carousel',
        draggable: componentsToQuery(typeColumn),
        droppable: componentsToQuery(typeCarouselImage),
        stylable: [
          'align',
          'border-radius',
          'icon-width',
          'left-icon',
          'right-icon',
          'thumbnails',
          'tb-border',
          'tb-border-radius',
          'tb-hover-border-color',
          'tb-selected-border-color',
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
        return sandboxEl.querySelector('.mj-carousel')?.outerHTML || sandboxEl.querySelector('.mj-carousel-image')?.outerHTML || '';
      },

      renderChildren() {},

      init() {
        coreMjmlView.init.call(this);
        this.listenTo(this.model.get('components'), 'add remove update', this.render);
      },
    },
  });
};