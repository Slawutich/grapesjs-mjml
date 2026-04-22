import type { Editor } from 'grapesjs';
import { ComponentPluginOptions } from '.';
import { componentsToQuery, isComponentType } from './utils';
import { type as typeCarousel } from './Carousel';

export const type = 'mj-carousel-image';

export default (editor: Editor, { coreMjmlModel, coreMjmlView }: ComponentPluginOptions) => {
  editor.Components.addType(type, {
    isComponent: isComponentType(type),
    model: {
      ...coreMjmlModel,
      defaults: {
        draggable: componentsToQuery(typeCarousel),
        highlightable: false,
        stylable: [
          'alt',
          'href',
          'rel',
          'target',
          'thumbnails-src',
        ],
        traits: ['src', 'href'],
        void: true,
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