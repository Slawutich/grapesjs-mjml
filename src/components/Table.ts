import type { Editor } from 'grapesjs';
import { ComponentPluginOptions } from '.';
import { componentsToQuery, isComponentType } from './utils';
import { type as typeColumn } from './Column';

export const type = 'mj-table';
const typeRow = 'tr';
const typeCell = 'td';
const typeHeaderCell = 'th';

export default (editor: Editor, { coreMjmlModel, coreMjmlView }: ComponentPluginOptions) => {
  editor.Components.addType(typeRow, {
    isComponent: isComponentType(typeRow),
    model: {
      defaults: {
        tagName: typeRow,
        name: 'Table row',
        draggable: () => componentsToQuery(type),
        droppable: () => componentsToQuery([typeCell, typeHeaderCell]),
        highlightable: false,
      },
    },
    view: {
      tagName() {
        return typeRow;
      },
    },
  });

  editor.Components.addType(typeCell, {
    extend: 'text',
    isComponent: isComponentType(typeCell),
    model: {
      defaults: {
        tagName: typeCell,
        name: 'Table cell',
        draggable: () => componentsToQuery(typeRow),
        highlightable: false,
      },
    },
    view: {
      tagName() {
        return typeCell;
      },
    },
  });

  editor.Components.addType(typeHeaderCell, {
    extend: 'text',
    isComponent: isComponentType(typeHeaderCell),
    model: {
      defaults: {
        tagName: typeHeaderCell,
        name: 'Table header',
        draggable: () => componentsToQuery(typeRow),
        highlightable: false,
      },
    },
    view: {
      tagName() {
        return typeHeaderCell;
      },
    },
  });

  editor.Components.addType(type, {
    isComponent: isComponentType(type),
    model: {
      ...coreMjmlModel,
      init() {
        coreMjmlModel.init.call(this);
        const content = this.get('content');

        if (content && !this.components().length) {
          this.components(content);
          this.set('content', '');
        }
      },
      defaults: {
        name: 'Table',
        draggable: componentsToQuery(typeColumn),
        droppable: componentsToQuery(typeRow),
        highlightable: false,
        stylable: [
          'align',
          'color',
          'font-family',
          'font-size',
          'line-height',
          'padding',
          'padding-top',
          'padding-left',
          'padding-right',
          'padding-bottom',
          'table-layout',
          'width',
        ],
      },
    },
    view: {
      ...coreMjmlView,
      tagName: 'tr',
      attributes: {
        style: 'pointer-events: all; display: table; width: 100%;',
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
        return sandboxEl.querySelector('tr')?.innerHTML || '';
      },

      getChildrenSelector() {
        return 'td > table > tbody';
      },

      init() {
        coreMjmlView.init.call(this);
        this.listenTo(this.model.get('components'), 'add remove update', this.render);
      },
    },
  });
};