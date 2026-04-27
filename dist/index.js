(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("mjml-browser"));
	else if(typeof define === 'function' && define.amd)
		define(["mjml-browser"], factory);
	else if(typeof exports === 'object')
		exports["grapesjs-mjml"] = factory(require("mjml-browser"));
	else
		root["grapesjs-mjml"] = factory(root["mjml-browser"]);
})(self, (__WEBPACK_EXTERNAL_MODULE__415__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 415
(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__415__;

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  applyMjAttributes: () => (/* binding */ applyMjAttributes),
  "default": () => (/* binding */ src),
  normalizeMjmlHead: () => (/* binding */ normalizeMjmlHead)
});

;// ./src/blocks.ts
/* harmony default export */ const blocks = ((editor, opts) => {
    const { Blocks } = editor;
    const imagePlaceholderSrc = opts.imagePlaceholderSrc || 'https://picsum.photos/350/250';
    const socialIcon = `<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z" />
  </svg>`;
    opts.resetBlocks && Blocks.getAll().reset();
    const addBlock = (id, def) => {
        opts.blocks.indexOf(id) >= 0 && Blocks.add(id, {
            select: true,
            category: editor.I18n.t('grapesjs-mjml.category'),
            ...def,
            ...opts.block(id),
        });
    };
    const getI18nLabel = (label) => editor.I18n.t(`grapesjs-mjml.components.names.${label}`);
    addBlock('mj-1-column', {
        label: getI18nLabel('oneColumn'),
        media: `<svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"/>
    </svg>`,
        content: `<mj-section>
        <mj-column><mj-text>Content 1</mj-text></mj-column>
      </mj-section>`,
    });
    // addBlock('mj-accordion', {
    //   label: 'Accordion',
    //   media: `<svg viewBox="0 0 24 24">
    //     <path fill="currentColor" d="M4 5H20V7H4V5M4 11H20V13H4V11M4 17H20V19H4V17M17.59 8.59L19 10L15 14L11 10L12.41 8.59L15 11.17L17.59 8.59Z" />
    //   </svg>`,
    //   content: `<mj-accordion>
    //     <mj-accordion-element>
    //       <mj-accordion-title>What is included?</mj-accordion-title>
    //       <mj-accordion-text>Insurance, doorstep delivery, and a 7-day return window.</mj-accordion-text>
    //     </mj-accordion-element>
    //     <mj-accordion-element>
    //       <mj-accordion-title>How fast can I test drive?</mj-accordion-title>
    //       <mj-accordion-text>Most metro areas have same-week availability.</mj-accordion-text>
    //     </mj-accordion-element>
    //   </mj-accordion>`,
    // });
    addBlock('mj-2-columns', {
        label: getI18nLabel('twoColumn'),
        media: `<svg viewBox="0 0 23 24">
      <path fill="currentColor" d="M2 20h8V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM13 20h8V4h-8v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1Z"/>
    </svg>`,
        content: `<mj-section>
      <mj-column><mj-text>Content 1</mj-text></mj-column>
      <mj-column><mj-text>Content 2</mj-text></mj-column>
    </mj-section>`,
    });
    addBlock('mj-3-columns', {
        label: getI18nLabel('threeColumn'),
        media: `<svg viewBox="0 0 23 24">
      <path fill="currentColor" d="M2 20h4V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM17 20h4V4h-4v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1ZM9.5 20h4V4h-4v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z"/>
    </svg>`,
        content: `<mj-section>
        <mj-column><mj-text>Content 1</mj-text></mj-column>
        <mj-column><mj-text>Content 2</mj-text></mj-column>
        <mj-column><mj-text>Content 3</mj-text></mj-column>
      </mj-section>`,
    });
    addBlock('mj-text', {
        label: getI18nLabel('text'),
        media: `<svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M18.5,4L19.66,8.35L18.7,8.61C18.25,7.74 17.79,6.87 17.26,6.43C16.73,6 16.11,6 15.5,6H13V16.5C13,17 13,17.5 13.33,17.75C13.67,18 14.33,18 15,18V19H9V18C9.67,18 10.33,18 10.67,17.75C11,17.5 11,17 11,16.5V6H8.5C7.89,6 7.27,6 6.74,6.43C6.21,6.87 5.75,7.74 5.3,8.61L4.34,8.35L5.5,4H18.5Z" />
    </svg>`,
        content: '<mj-text>Insert text here</mj-text>',
        activate: true,
    });
    addBlock('mj-button', {
        label: getI18nLabel('button'),
        media: `<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M20 20.5C20 21.3 19.3 22 18.5 22H13C12.6 22 12.3 21.9 12 21.6L8 17.4L8.7 16.6C8.9 16.4 9.2 16.3 9.5 16.3H9.7L12 18V9C12 8.4 12.4 8 13 8S14 8.4 14 9V13.5L15.2 13.6L19.1 15.8C19.6 16 20 16.6 20 17.1V20.5M20 2H4C2.9 2 2 2.9 2 4V12C2 13.1 2.9 14 4 14H8V12H4V4H20V12H18V14H20C21.1 14 22 13.1 22 12V4C22 2.9 21.1 2 20 2Z" />
    </svg>`,
        content: '<mj-button>Button</mj-button>',
    });
    // addBlock('mj-carousel', {
    //   label: 'Carousel',
    //   media: `<svg viewBox="0 0 24 24">
    //     <path fill="currentColor" d="M2 6A2 2 0 0 1 4 4H20A2 2 0 0 1 22 6V18A2 2 0 0 1 20 20H4A2 2 0 0 1 2 18V6M4 6V18H20V6H4M9 8L15 12L9 16V8Z" />
    //   </svg>`,
    //   content: `<mj-carousel>
    //     <mj-carousel-image src="${imagePlaceholderSrc}" />
    //     <mj-carousel-image src="https://via.placeholder.com/350x250/f4a261/ffffff" />
    //     <mj-carousel-image src="https://via.placeholder.com/350x250/2a9d8f/ffffff" />
    //   </mj-carousel>`,
    // });
    addBlock('mj-image', {
        label: getI18nLabel('image'),
        media: `<svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M21,3H3C2,3 1,4 1,5V19A2,2 0 0,0 3,21H21C22,21 23,20 23,19V5C23,4 22,3 21,3M5,17L8.5,12.5L11,15.5L14.5,11L19,17H5Z" />
    </svg>`,
        content: `<mj-image src="${imagePlaceholderSrc}"/>`,
        activate: true,
    });
    addBlock('mj-divider', {
        label: getI18nLabel('divider'),
        media: `<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M21 18H2V20H21V18M19 10V14H4V10H19M20 8H3C2.45 8 2 8.45 2 9V15C2 15.55 2.45 16 3 16H20C20.55 16 21 15.55 21 15V9C21 8.45 20.55 8 20 8M21 4H2V6H21V4Z" />
    </svg>`,
        content: '<mj-divider/>',
    });
    addBlock('mj-social-group', {
        label: getI18nLabel('socialGroup'),
        media: socialIcon,
        content: `<mj-social font-size="12px" icon-size="24px" border-radius="12px" mode="horizontal">
        <mj-social-element name="facebook"></mj-social-element>
        <mj-social-element name="google"></mj-social-element>
        <mj-social-element name="twitter"></mj-social-element>
      </mj-social>`,
    });
    addBlock('mj-social-element', {
        label: getI18nLabel('socialElement'),
        media: socialIcon,
        content: '<mj-social-element name="facebook" />',
    });
    addBlock('mj-spacer', {
        label: getI18nLabel('spacer'),
        media: `<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M8,18H11V15H2V13H22V15H13V18H16L12,22L8,18M12,2L8,6H11V9H2V11H22V9H13V6H16L12,2Z" />
    </svg>`,
        content: '<mj-spacer/>',
    });
    addBlock('mj-navbar', {
        label: getI18nLabel('navBar'),
        media: `<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
    </svg>`,
        content: `<mj-navbar>
      <mj-navbar-link>Getting started</mj-navbar-link>
      <mj-navbar-link>Try it live</mj-navbar-link>
      <mj-navbar-link>Templates</mj-navbar-link>
      <mj-navbar-link>Components</mj-navbar-link>
    </mj-navbar>`,
    });
    addBlock('mj-navbar-link', {
        label: getI18nLabel('navLink'),
        media: `<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M21,15.61L19.59,17L14.58,12L19.59,7L21,8.39L17.44,12L21,15.61M3,6H16V8H3V6M3,13V11H13V13H3M3,18V16H16V18H3Z" />
    </svg>`,
        content: `<mj-navbar-link>Link</mj-navbar-link>`,
    });
    addBlock('mj-hero', {
        label: getI18nLabel('hero'),
        media: `<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20M4,6V18H20V6H4M6,9H18V11H6V9M6,13H16V15H6V13Z" />
    </svg>`,
        content: `<mj-hero mode="fixed-height" height="469px" background-width="600px" background-height="469px" background-url="https://cloud.githubusercontent.com/assets/1830348/15354890/1442159a-1cf0-11e6-92b1-b861dadf1750.jpg" background-color="#2a3448" padding="100px 0px">
      <mj-text padding="20px" color="#ffffff" font-family="Helvetica" align="center" font-size="45px" line-height="45px" font-weight="900">
        GO TO SPACE
      </mj-text>
      <mj-button align="center">
        ORDER YOUR TICKET NOW
      </mj-button>
    </mj-hero>`,
    });
    // addBlock('mj-table', {
    //   label: 'Table',
    //   media: `<svg viewBox="0 0 24 24">
    //     <path fill="currentColor" d="M3 3H21A1 1 0 0 1 22 4V20A1 1 0 0 1 21 21H3A1 1 0 0 1 2 20V4A1 1 0 0 1 3 3M4 5V9H10V5H4M12 5V9H20V5H12M4 11V19H10V11H4M12 11V19H20V11H12Z" />
    //   </svg>`,
    //   content: `<mj-table>
    //     <tr style="border-bottom:1px solid #e2e8f0;text-align:left;">
    //       <th style="padding:8px;">Model</th>
    //       <th style="padding:8px;">Powertrain</th>
    //       <th style="padding:8px;">Price</th>
    //     </tr>
    //     <tr>
    //       <td style="padding:8px;">Tesla Model 3</td>
    //       <td style="padding:8px;">Electric</td>
    //       <td style="padding:8px;">$38,900</td>
    //     </tr>
    //   </mj-table>`,
    // });
    addBlock('mj-wrapper', {
        label: getI18nLabel('wrapper'),
        media: `<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M18 2H6C4.89 2 4 2.9 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V4C20 2.9 19.11 2 18 2M18 20H6V16H18V20M18 8H6V4H18V8Z" />
    </svg>`,
        content: `<mj-wrapper>
      <mj-section padding="20px">
        <mj-column>
          <mj-image padding="0" src="${imagePlaceholderSrc}" />
        </mj-column>
      </mj-section>
      <mj-section padding="20px">
        <mj-column border="1px solid #dddddd">
          <mj-text padding="20px"> First line of text </mj-text>
          <mj-divider border-width="1px" border-style="dashed" border-color="lightgrey" padding="0 20px"></mj-divider>
          <mj-text padding="20px"> Second line of text </mj-text>
        </mj-column>
      </mj-section>
    </mj-wrapper>`,
    });
    addBlock('mj-raw', {
        label: getI18nLabel('raw'),
        media: `<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M12,17.56L16.07,16.43L16.62,10.33H9.38L9.2,8.3H16.8L17,6.31H7L7.56,12.32H14.45L14.22,14.9L12,15.5L9.78,14.9L9.64,13.24H7.64L7.93,16.43L12,17.56M4.07,3H19.93L18.5,19.2L12,21L5.5,19.2L4.07,3Z" />
    </svg>`,
        content: `<mj-raw>
      <div style="display: flex;justify-content: center;">
        <img class="item" src="https://picsum.photos/200/141" alt="Example image">
        <img class="item" src="https://picsum.photos/200/142" alt="Example image">
      </div>
    </mj-raw>`,
    });
});
(Object.getOwnPropertyDescriptor(blocks, "name") || {}).writable || Object.defineProperty(blocks, "name", { value: "default", configurable: true });

;// ./src/components/utils.ts
const isComponentType = (type) => (el) => (el.tagName || '').toLowerCase() === type;
async function mjmlConvert(parser, mjml, fonts, opts = {}) {
    const options = {
        useMjmlConfigOptions: false,
        mjmlConfigPath: undefined,
        filePath: undefined,
        ...opts,
    };
    // Check that fonts parameter is not empty for add to options
    if (fonts && (Object.keys(fonts).length > 0 && fonts.constructor === Object)) {
        // @ts-ignore
        options.fonts = fonts;
    }
    return await Promise.resolve(parser(mjml, options));
}
const componentsToQuery = (cmps) => {
    const cmpsArr = Array.isArray(cmps) ? cmps : [cmps];
    return cmpsArr.map(cmp => `[data-gjs-type="${cmp}"]`).join(', ');
};
const getName = (editor, name) => {
    return editor.I18n.t(`grapesjs-mjml.components.names.${name}`);
};
function debounce(clb, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            clearTimeout(timeout);
            clb.apply(this, args);
        }, wait);
    };
}
/**
 * Expand CSS shorthand properties into their longhand equivalents.
 * Covers padding, margin, border-radius, border, and border-{side}.
 * Unknown properties pass through unchanged.
 */
function expandShorthand(attrs) {
    const result = {};
    for (const [key, value] of Object.entries(attrs)) {
        const expanded = expandProperty(key, value);
        if (expanded) {
            Object.assign(result, expanded);
        }
        else {
            result[key] = value;
        }
    }
    return result;
}
function splitValues(value) {
    return value.trim().split(/\s+/);
}
function expand4Sides(value, sides) {
    const parts = splitValues(value);
    const [top, right, bottom, left] = sides;
    switch (parts.length) {
        case 1:
            return { [top]: parts[0], [right]: parts[0], [bottom]: parts[0], [left]: parts[0] };
        case 2:
            return { [top]: parts[0], [right]: parts[1], [bottom]: parts[0], [left]: parts[1] };
        case 3:
            return { [top]: parts[0], [right]: parts[1], [bottom]: parts[2], [left]: parts[1] };
        case 4:
        default:
            return { [top]: parts[0], [right]: parts[1], [bottom]: parts[2], [left]: parts[3] };
    }
}
function expandProperty(prop, value) {
    switch (prop) {
        case 'padding':
            return expand4Sides(value, [
                'padding-top', 'padding-right', 'padding-bottom', 'padding-left',
            ]);
        case 'margin':
            return expand4Sides(value, [
                'margin-top', 'margin-right', 'margin-bottom', 'margin-left',
            ]);
        case 'border':
        case 'border-top':
        case 'border-right':
        case 'border-bottom':
        case 'border-left': {
            const parts = splitValues(value);
            const prefix = prop === 'border' ? 'border' : prop;
            const res = {};
            // CSS border shorthand: <width> <style> <color>
            if (parts[0])
                res[`${prefix}-width`] = parts[0];
            if (parts[1])
                res[`${prefix}-style`] = parts[1];
            if (parts[2])
                res[`${prefix}-color`] = parts.slice(2).join(' ');
            return Object.keys(res).length ? res : null;
        }
        default:
            return null;
    }
}
;

;// ./src/commands/openExportMjml.ts

/* harmony default export */ const openExportMjml = ((editor, opts, cmdId) => {
    const { Commands } = editor;
    Commands.add(cmdId, {
        containerEl: null,
        codeEditorMjml: null,
        codeEditorHtml: null,
        createCodeEditor(label) {
            const el = document.createElement('div');
            const elLabel = document.createElement('div');
            const codeEditor = this.createCodeViewer();
            elLabel.innerHTML = label;
            el.style.flex = '1 0 auto';
            el.style.padding = '5px';
            el.style.maxWidth = '50%';
            el.style.boxSizing = 'border-box';
            el.appendChild(elLabel);
            el.appendChild(codeEditor.getElement());
            return { codeEditor, el };
        },
        createCodeViewer() {
            return editor.CodeManager.createViewer({
                codeName: 'htmlmixed',
                theme: opts.codeViewerTheme,
            });
        },
        getCodeContainer() {
            let containerEl = this.containerEl;
            if (!containerEl) {
                containerEl = document.createElement('div');
                containerEl.style.display = 'flex';
                containerEl.style.justifyContent = 'space-between';
                this.containerEl = containerEl;
            }
            return containerEl;
        },
        async run(editor, sender) {
            const container = this.getCodeContainer();
            let codeEditorMjml = this.codeEditorMjml;
            let codeEditorHtml = this.codeEditorHtml;
            if (!codeEditorMjml) {
                const codeViewer = this.createCodeEditor('MJML');
                codeEditorMjml = codeViewer.codeEditor;
                this.codeEditorMjml = codeEditorMjml;
                container.appendChild(codeViewer.el);
            }
            if (!codeEditorHtml) {
                const codeViewer = this.createCodeEditor('HTML');
                codeEditorHtml = codeViewer.codeEditor;
                this.codeEditorHtml = codeEditorHtml;
                container.appendChild(codeViewer.el);
            }
            editor.Modal
                .open({
                title: editor.I18n.t('grapesjs-mjml.panels.export.title'),
                content: container
            })
                .onceClose(() => {
                sender.set && sender.set('active', false);
                editor.stopCommand(cmdId);
            });
            if (codeEditorMjml) {
                codeEditorMjml.setContent(Commands.run(cmdGetMjml));
                codeEditorMjml.editor.refresh();
            }
            if (codeEditorHtml) {
                const mjmlResult = await Commands.run(cmdGetMjmlToHtml);
                mjmlResult.errors?.forEach((error) => {
                    editor.log(error.formattedMessage, {
                        ns: cmdGetMjmlToHtml,
                        level: 'warning',
                        // @ts-ignore
                        error,
                    });
                });
                codeEditorHtml.setContent(mjmlResult.html);
                codeEditorHtml.editor.refresh();
            }
        },
        stop(editor) {
            editor.Modal.close();
        },
    });
});
(Object.getOwnPropertyDescriptor(openExportMjml, "name") || {}).writable || Object.defineProperty(openExportMjml, "name", { value: "default", configurable: true });

;// ./src/commands/openImportMjml.ts
/* harmony default export */ const openImportMjml = ((editor, opts, cmdId) => {
    const config = editor.getConfig();
    const pfx = config.stylePrefix || '';
    const getI18nLabel = (label) => editor.I18n.t(`grapesjs-mjml.panels.import.${label}`);
    editor.Commands.add(cmdId, {
        containerEl: null,
        codeEditorMjml: null,
        onImport(code) {
            editor.Components.getWrapper()?.set('content', '');
            editor.setComponents(code.trim());
            editor.Modal.close();
        },
        createCodeEditor() {
            const el = document.createElement('div');
            const codeEditor = this.createCodeViewer();
            const codeEl = codeEditor.getElement();
            const labelImport = getI18nLabel('label');
            const btnEl = document.createElement('button');
            btnEl.type = 'button';
            btnEl.innerHTML = getI18nLabel('button');
            btnEl.className = `${pfx}btn-prim ${pfx}btn-import`;
            btnEl.onclick = () => this.onImport(codeEditor.editor.getValue());
            if (labelImport) {
                const labelEl = document.createElement('div');
                labelEl.className = `${pfx}import-label`;
                labelEl.innerHTML = labelImport;
                el.appendChild(labelEl);
            }
            codeEl.className = `${pfx}code-viewer`;
            codeEl.style.margin = '10px 0';
            el.appendChild(codeEl);
            el.appendChild(btnEl);
            return { codeEditor, el };
        },
        createCodeViewer() {
            return editor.CodeManager.createViewer({
                codeName: 'htmlmixed',
                theme: opts.codeViewerTheme,
                readOnly: false,
            });
        },
        getCodeContainer() {
            let { containerEl } = this;
            if (!containerEl) {
                containerEl = document.createElement('div');
                this.containerEl = containerEl;
            }
            return containerEl;
        },
        run(editor, sender = {}) {
            const container = this.getCodeContainer();
            let { codeEditorMjml } = this;
            if (!codeEditorMjml) {
                const result = this.createCodeEditor();
                codeEditorMjml = result.codeEditor;
                this.codeEditorMjml = codeEditorMjml;
                container.appendChild(result.el);
            }
            if (codeEditorMjml) {
                codeEditorMjml.setContent(opts.importPlaceholder);
                codeEditorMjml.editor.refresh();
            }
            editor.Modal.open({
                title: getI18nLabel('title'),
                content: container
            }).onceClose(() => {
                sender.set && sender.set('active', false);
                editor.stopCommand(cmdId);
            });
        },
        stop(editor) {
            editor.Modal.close();
        },
    });
});
(Object.getOwnPropertyDescriptor(openImportMjml, "name") || {}).writable || Object.defineProperty(openImportMjml, "name", { value: "default", configurable: true });

;// ./src/commands/index.ts



const cmdDeviceDesktop = 'set-device-desktop';
const cmdDeviceTablet = 'set-device-tablet';
const cmdDeviceMobile = 'set-device-mobile';
const cmdImportMjml = 'mjml-import';
const cmdExportMjml = 'mjml-export';
const cmdGetMjml = 'mjml-code';
const cmdGetMjmlToHtml = 'mjml-code-to-html';
/* harmony default export */ const commands = ((editor, opts) => {
    const { Commands } = editor;
    const cmdOpenExport = opts.overwriteExport ? 'export-template' : cmdExportMjml;
    Commands.add(cmdGetMjml, () => {
        return `${opts.preMjml}${editor.getHtml().trim()}${opts.postMjml}`;
    });
    Commands.add(cmdGetMjmlToHtml, async (ed, _, opt) => {
        const { mjml, ...rest } = (opt || {});
        const mjmlToParse = mjml || Commands.run(cmdGetMjml);
        return await mjmlConvert(opts.mjmlParser, mjmlToParse, opts.fonts, rest);
    });
    openExportMjml(editor, opts, cmdOpenExport);
    openImportMjml(editor, opts, cmdImportMjml);
    // Device commands
    Commands.add(cmdDeviceDesktop, {
        run: (ed) => ed.setDevice('Desktop'),
        stop: () => { },
    });
    Commands.add(cmdDeviceTablet, {
        run: (ed) => ed.setDevice('Tablet'),
        stop: () => { },
    });
    Commands.add(cmdDeviceMobile, {
        run: (ed) => ed.setDevice('Mobile portrait'),
        stop: () => { },
    });
});
(Object.getOwnPropertyDescriptor(commands, "name") || {}).writable || Object.defineProperty(commands, "name", { value: "default", configurable: true });

;// ./src/components/Head.ts

const type = 'mj-head';
/* harmony default export */ const Head = ((editor, _options) => {
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
});
(Object.getOwnPropertyDescriptor(Head, "name") || {}).writable || Object.defineProperty(Head, "name", { value: "default", configurable: true });

;// ./src/components/Wrapper.ts



const Wrapper_type = 'mj-wrapper';
/* harmony default export */ const Wrapper = ((editor, { coreMjmlModel, coreMjmlView }) => {
    editor.Components.addType(Wrapper_type, {
        isComponent: isComponentType(Wrapper_type),
        model: {
            ...coreMjmlModel,
            defaults: {
                name: getName(editor, 'wrapper'),
                draggable: componentsToQuery(Body_type),
                droppable: componentsToQuery(Section_type),
                stylable: [
                    'background-color', 'background-position', 'background-repeat', 'background-url', 'background-size',
                    'padding', 'padding-top', 'padding-left', 'padding-right', 'padding-bottom', 'text-align',
                    'border-radius',
                    'border-top-left-radius',
                    'border-top-right-radius',
                    'border-bottom-left-radius',
                    'border-bottom-right-radius',
                    'border',
                    'border-width',
                    'border-style',
                    'border-color',
                ],
                traits: [
                    {
                        type: 'checkbox',
                        label: 'Full width',
                        name: 'full-width',
                        valueTrue: 'full-width',
                        valueFalse: '',
                    }
                ],
            },
        },
        view: {
            ...coreMjmlView,
            tagName: 'div',
            attributes: {
                style: 'pointer-events: all; display: table; width: 100%',
            },
            getMjmlTemplate() {
                return {
                    start: `<mjml><mj-body>`,
                    end: `</mj-body></mjml>`,
                };
            },
            getChildrenSelector() {
                if (this.model.getAttributes()['full-width']) {
                    return 'table > tbody > tr > td > div table > tbody > tr > td';
                }
                else
                    return 'table > tbody > tr > td';
            },
            init() {
                coreMjmlView.init.call(this);
                this.listenTo(this.model.get('components'), 'add remove', () => {
                    this.getChildrenContainer().innerHTML = this.model.get('content');
                    this.renderChildren();
                });
            },
        }
    });
});
(Object.getOwnPropertyDescriptor(Wrapper, "name") || {}).writable || Object.defineProperty(Wrapper, "name", { value: "default", configurable: true });

;// ./src/components/Group.ts



const Group_type = 'mj-group';
/* harmony default export */ const Group = ((editor, { coreMjmlModel, coreMjmlView }) => {
    editor.Components.addType(Group_type, {
        isComponent: isComponentType(Group_type),
        model: {
            ...coreMjmlModel,
            defaults: {
                name: getName(editor, 'group'),
                draggable: componentsToQuery(Section_type),
                droppable: componentsToQuery(Column_type),
                stylable: [
                    'width', 'vertical-align', 'background-color', 'direction',
                ],
                'style-default': {
                    'vertical-align': 'top'
                },
                traits: [],
            },
        },
        view: {
            ...coreMjmlView,
            tagName: 'div',
            attributes: {
                style: 'display: table; width: 100%',
            },
            getMjmlTemplate() {
                return {
                    start: `<mjml><mj-body>`,
                    end: `</mj-body></mjml>`,
                };
            },
            getChildrenSelector() {
                return 'div';
            },
        }
    });
});
(Object.getOwnPropertyDescriptor(Group, "name") || {}).writable || Object.defineProperty(Group, "name", { value: "default", configurable: true });

;// ./src/components/Section.ts





const Section_type = 'mj-section';
/* harmony default export */ const Section = ((editor, { coreMjmlModel, coreMjmlView }) => {
    editor.Components.addType(Section_type, {
        isComponent: isComponentType(Section_type),
        model: {
            ...coreMjmlModel,
            defaults: {
                name: getName(editor, 'section'),
                draggable: componentsToQuery([Body_type, Wrapper_type]),
                droppable: componentsToQuery([Column_type, Group_type]),
                'style-default': {
                    'padding-left': '0px',
                    'padding-right': '0px',
                    'padding-top': '20px',
                    'padding-bottom': '20px',
                    'text-align': 'center',
                },
                stylable: [
                    'text-align',
                    'padding', 'padding-top', 'padding-left', 'padding-right', 'padding-bottom',
                    'background-color', 'background-url', 'background-repeat', 'background-size',
                    'border-radius', 'border-top-left-radius', 'border-top-right-radius', 'border-bottom-left-radius', 'border-bottom-right-radius',
                    'border', 'border-width', 'border-style', 'border-color'
                ],
                traits: [
                    {
                        type: 'checkbox',
                        label: 'Full width',
                        name: 'full-width',
                        valueTrue: 'full-width',
                        valueFalse: '',
                    }
                ],
            },
        },
        view: {
            ...coreMjmlView,
            tagName: 'div',
            attributes: {
                style: 'pointer-events: all;',
            },
            getMjmlTemplate() {
                const parent = this.model.parent();
                const parentView = parent?.view;
                const parentTag = parent?.attributes.tagName;
                // @ts-ignore
                const getInnerMjmlTemplate = parentView?.getInnerMjmlTemplate;
                if (getInnerMjmlTemplate && parentTag === Body_type) {
                    let mjmlBody = coreMjmlView.getInnerMjmlTemplate.call(parentView);
                    return {
                        start: `<mjml><mj-body>${mjmlBody.start}`,
                        end: `${mjmlBody.end}</mj-body></mjml>`,
                    };
                }
                else {
                    return {
                        start: `<mjml><mj-body>`,
                        end: `</mj-body></mjml>`,
                    };
                }
            },
            getChildrenSelector() {
                if (this.model.getAttributes()['full-width']) {
                    return 'table > tbody > tr > td > div table > tbody > tr > td';
                }
                else
                    return 'table > tbody > tr > td';
            },
            init() {
                coreMjmlView.init.call(this);
                this.listenTo(this.model.get('components'), 'add remove', this.render);
            },
        },
    });
});
(Object.getOwnPropertyDescriptor(Section, "name") || {}).writable || Object.defineProperty(Section, "name", { value: "default", configurable: true });

;// ./src/components/Column.ts


const Column_type = 'mj-column';
/* harmony default export */ const Column = ((editor, { opt, coreMjmlModel, coreMjmlView, sandboxEl }) => {
    const clmPadd = opt.columnsPadding;
    editor.Components.addType(Column_type, {
        isComponent: isComponentType(Column_type),
        model: {
            ...coreMjmlModel,
            defaults: {
                name: getName(editor, 'column'),
                draggable: componentsToQuery(Section_type),
                stylable: [
                    'background-color',
                    'vertical-align',
                    'width',
                    'border-radius',
                    'border-top-left-radius',
                    'border-top-right-radius',
                    'border-bottom-left-radius',
                    'border-bottom-right-radius',
                    'border',
                    'border-width',
                    'border-style',
                    'border-color',
                    'padding',
                    'padding-top',
                    'padding-left',
                    'padding-right',
                    'padding-bottom',
                ],
                'style-default': {
                    'vertical-align': 'top',
                },
                traits: []
            },
        },
        view: {
            ...coreMjmlView,
            tagName: 'div',
            attributes: {
                style: clmPadd ? `padding: ${clmPadd};` : '',
            },
            async getTemplateFromMjml() {
                const mjmlTmpl = this.getMjmlTemplate();
                const innerMjml = this.getInnerMjmlTemplate();
                const mjmlStart = this.injectDocumentHead(mjmlTmpl.start);
                const htmlOutput = await mjmlConvert(opt.mjmlParser, `${mjmlStart}
          ${innerMjml.start}${innerMjml.end}${mjmlTmpl.end}`, opt.fonts);
                const html = htmlOutput.html;
                // I need styles for responsive columns
                const styles = [];
                sandboxEl.innerHTML = html;
                const styleArr = Array.from(sandboxEl.querySelectorAll('style'));
                styleArr.forEach((item) => {
                    styles.push(item.innerHTML);
                });
                const content = html.replace(/<body(.*)>/, '<body>');
                const start = content.indexOf('<body>') + 6;
                const end = content.indexOf('</body>');
                sandboxEl.innerHTML = content.substring(start, end).trim();
                const componentEl = this.getTemplateFromEl(sandboxEl);
                // Copy all rendered attributes (TODO need for all)
                const attributes = {};
                const elAttrs = componentEl.attributes;
                for (let elAttr, i = 0, len = elAttrs.length; i < len; i++) {
                    elAttr = elAttrs[i];
                    attributes[elAttr.name] = elAttr.value;
                }
                return {
                    attributes,
                    content: componentEl.innerHTML,
                    style: styles.join(' '),
                };
            },
            render() {
                const renderId = (this.__renderId || 0) + 1;
                this.__renderId = renderId;
                this.renderAttributes();
                this.__renderPromise = Promise.resolve(this.getTemplateFromMjml())
                    .then((mjmlResult) => {
                    if (this.__renderId !== renderId) {
                        return this;
                    }
                    this.el.innerHTML = mjmlResult.content;
                    this.$el.attr(mjmlResult.attributes);
                    editor.addComponents(`<style>${mjmlResult.style}</style>`);
                    this.getChildrenContainer().innerHTML = this.model.get('content');
                    this.renderChildren();
                    this.renderStyle();
                    // In case mjmlResult.attributes removes necessary stuff
                    this.updateStatus();
                    this.postRender();
                    return this;
                })
                    .catch((error) => {
                    editor.log(error.message, { level: 'error' });
                    return this;
                });
                return this;
            },
            renderStyle() {
                const { model, attributes, el } = this;
                const modelStyle = model.get('style') || {};
                const stylable = model.get('stylable');
                const styles = Object.keys(modelStyle)
                    .filter((prop) => stylable.indexOf(prop) > -1)
                    //@ts-ignore
                    .map((prop) => `${prop}:${modelStyle[prop]};`);
                const styleResult = `${attributes.style} ${styles.join(' ')} ${el.getAttribute('style')}`;
                el.setAttribute('style', styleResult);
                // #290 Fix double borders
                el.firstElementChild?.setAttribute('style', '');
                this.checkVisibility();
            },
            getMjmlTemplate() {
                // Need it for responsive columns
                let cols = this.model.collection.length - 1;
                cols = cols ? cols : 0;
                let addColmn = Array(cols).fill('<mj-column></mj-column>').join('');
                return {
                    start: `<mjml><mj-body><mj-section>`,
                    end: `${addColmn}</mj-section></mj-body></mjml>`,
                };
            },
            getTemplateFromEl(sandboxEl) {
                return sandboxEl.firstChild.querySelector('div > table > tbody > tr > td > div');
            },
            getChildrenSelector() {
                return 'table';
            },
        },
    });
});
(Object.getOwnPropertyDescriptor(Column, "name") || {}).writable || Object.defineProperty(Column, "name", { value: "default", configurable: true });

;// ./src/components/Text.ts



const Text_type = 'mj-text';
/* harmony default export */ const Text = ((editor, { coreMjmlModel, coreMjmlView }) => {
    editor.Components.addType(Text_type, {
        extend: 'text',
        extendFnView: ['onActive'],
        isComponent: isComponentType(Text_type),
        model: {
            ...coreMjmlModel,
            defaults: {
                name: getName(editor, 'text'),
                draggable: componentsToQuery([Column_type, Hero_type]),
                highlightable: false,
                stylable: [
                    'height',
                    'font-style',
                    'font-size',
                    'font-weight',
                    'font-family',
                    'color',
                    'line-height',
                    'letter-spacing',
                    'text-decoration',
                    'align',
                    'text-transform',
                    'padding',
                    'padding-top',
                    'padding-left',
                    'padding-right',
                    'padding-bottom',
                    'container-background-color',
                ],
                'style-default': {
                    'padding-top': '10px',
                    'padding-bottom': '10px',
                    'padding-right': '25px',
                    'padding-left': '25px',
                    'font-size': '13px',
                    align: 'left',
                },
                traits: []
            },
        },
        view: {
            ...coreMjmlView,
            tagName: 'tr',
            attributes: {
                style: 'pointer-events: all; display: table; width: 100%',
            },
            getMjmlTemplate() {
                return {
                    start: `<mjml><mj-body><mj-column>`,
                    end: `</mj-column></mj-body></mjml>`,
                };
            },
            getTemplateFromEl(sandboxEl) {
                return sandboxEl.querySelector('tr').innerHTML;
            },
            getChildrenSelector() {
                return 'td > div';
            },
            /**
             * Prevent content repeating
             */
            async rerender() {
                this.render();
                return await this.__renderPromise;
            },
            /**
             * Need to make text selectable.
             */
            onActive() {
                this.getChildrenContainer().style.pointerEvents = 'all';
            },
        },
    });
});
(Object.getOwnPropertyDescriptor(Text, "name") || {}).writable || Object.defineProperty(Text, "name", { value: "default", configurable: true });

;// ./src/components/Button.ts



const Button_type = 'mj-button';
/* harmony default export */ const Button = ((editor, { coreMjmlModel, coreMjmlView }) => {
    editor.Components.addType(Button_type, {
        isComponent: isComponentType(Button_type),
        extend: 'link',
        model: {
            ...coreMjmlModel,
            defaults: {
                name: getName(editor, 'button'),
                draggable: componentsToQuery([Column_type, Hero_type]),
                highlightable: false,
                stylable: ['width', 'height',
                    'background-color', 'container-background-color',
                    'font-style', 'font-size', 'font-weight', 'font-family', 'color',
                    'text-decoration', 'align',
                    'vertical-align', 'text-transform',
                    'padding', 'padding-top', 'padding-left', 'padding-right', 'padding-bottom',
                    'border-radius', 'border-top-left-radius', 'border-top-right-radius', 'border-bottom-left-radius', 'border-bottom-right-radius',
                    'border', 'border-width', 'border-style', 'border-color',],
                'style-default': {
                    'background-color': '#414141',
                    'border-radius': '3px',
                    'font-size': '13px',
                    'font-weight': '400',
                    'color': '#ffffff',
                    'vertical-align': 'middle',
                    'padding-top': '10px',
                    'padding-bottom': '10px',
                    'padding-right': '25px',
                    'padding-left': '25px',
                    'align': 'center',
                },
                traits: ['href', 'title', 'rel'],
                // 'container-background-color', 'inner-padding'
            },
        },
        view: {
            ...coreMjmlView,
            tagName: 'tr',
            attributes: {
                style: 'display: table; width: 100%',
            },
            getMjmlTemplate() {
                return {
                    start: `<mjml><mj-body><mj-column>`,
                    end: `</mj-column></mj-body></mjml>`,
                };
            },
            getTemplateFromEl(sandboxEl) {
                return sandboxEl.querySelector('tr').innerHTML;
            },
            getChildrenSelector() {
                return 'a,p';
            },
            /**
             * Prevent content repeating
             */
            async rerender() {
                this.render();
                return await this.__renderPromise;
            },
        },
    });
});
(Object.getOwnPropertyDescriptor(Button, "name") || {}).writable || Object.defineProperty(Button, "name", { value: "default", configurable: true });

;// ./src/components/Image.ts




const Image_type = 'mj-image';
/* harmony default export */ const Image = ((editor, { coreMjmlModel, coreMjmlView }) => {
    editor.Components.addType(Image_type, {
        isComponent: isComponentType(Image_type),
        extend: 'image',
        model: {
            ...coreMjmlModel,
            defaults: {
                resizable: false,
                highlightable: false,
                name: getName(editor, 'image'),
                draggable: componentsToQuery([Section_type, Column_type, Hero_type]),
                stylable: [
                    'width',
                    'height',
                    'padding',
                    'padding-top',
                    'padding-left',
                    'padding-right',
                    'padding-bottom',
                    'border-radius',
                    'border-top-left-radius',
                    'border-top-right-radius',
                    'border-bottom-left-radius',
                    'border-bottom-right-radius',
                    'border',
                    'border-width',
                    'border-style',
                    'border-color',
                    'container-background-color',
                    'align',
                ],
                'style-default': {
                    'padding-top': '10px',
                    'padding-bottom': '10px',
                    'padding-right': '25px',
                    'padding-left': '25px',
                    align: 'center',
                },
                traits: [
                    'src', 'alt', 'title', // image
                    'href', 'rel', // link
                    // @TODO doesn't work
                    {
                        type: 'checkbox',
                        label: 'Fluid on mobile',
                        name: 'fluid-on-mobile',
                        valueTrue: 'true',
                        valueFalse: '',
                    }
                ],
                void: false,
            },
            getStylesToAttributes() {
                const style = coreMjmlModel.getStylesToAttributes.call(this);
                // Fix #339
                if (style.width === 'auto') {
                    delete style.width;
                }
                return style;
            },
        },
        view: {
            ...coreMjmlView,
            tagName: 'tr',
            attributes: {
                style: 'pointer-events: all; display: table; width: 100%; user-select: none;',
            },
            getMjmlTemplate() {
                return {
                    start: `<mjml><mj-body width="auto"><mj-column>`,
                    end: `</mj-column></mj-body></mjml>`,
                };
            },
            getTemplateFromEl(sandboxEl) {
                return sandboxEl.querySelector('tr').innerHTML;
            },
            getChildrenSelector() {
                return 'img';
            },
        },
    });
});
(Object.getOwnPropertyDescriptor(Image, "name") || {}).writable || Object.defineProperty(Image, "name", { value: "default", configurable: true });

;// ./src/components/Divider.ts



const Divider_type = 'mj-divider';
/* harmony default export */ const Divider = ((editor, { coreMjmlModel, coreMjmlView }) => {
    editor.Components.addType(Divider_type, {
        isComponent: isComponentType(Divider_type),
        model: {
            ...coreMjmlModel,
            defaults: {
                name: getName(editor, 'divider'),
                draggable: componentsToQuery([Column_type, Hero_type]),
                droppable: false,
                'style-default': {
                    'width': '100%',
                    'border-width': '4px',
                    'border-style': 'solid',
                    'border-color': '#000000',
                    'padding-top': '10px',
                    'padding-bottom': '10px',
                    'padding-right': '25px',
                    'padding-left': '25px',
                },
                stylable: [
                    'padding', 'padding-top', 'padding-left', 'padding-right', 'padding-bottom',
                    'width', 'container-background-color',
                    'border-detached', 'border-width', 'border-style', 'border-color'
                ],
                traits: [],
                void: false,
            },
        },
        view: {
            ...coreMjmlView,
            tagName: 'tr',
            attributes: {
                style: 'display: table; width: 100%; user-select: none;',
            },
            getMjmlTemplate() {
                return {
                    start: `<mjml><mj-body><mj-column>`,
                    end: `</mj-column></mj-body></mjml>`,
                };
            },
            getTemplateFromEl(sandboxEl) {
                return sandboxEl.querySelector('tr').innerHTML;
            },
            getChildrenSelector() {
                return 'p';
            },
        },
    });
});
(Object.getOwnPropertyDescriptor(Divider, "name") || {}).writable || Object.defineProperty(Divider, "name", { value: "default", configurable: true });

;// ./src/components/NavBarLink.ts


const NavBarLink_type = 'mj-navbar-link';
/* harmony default export */ const NavBarLink = ((editor, { coreMjmlModel, coreMjmlView }) => {
    editor.Components.addType(NavBarLink_type, {
        isComponent: isComponentType(NavBarLink_type),
        extend: 'link',
        model: {
            ...coreMjmlModel,
            defaults: {
                name: getName(editor, 'navLink'),
                draggable: componentsToQuery(NavBar_type),
                highlightable: false,
                stylable: [
                    'font-style', 'font-size', 'font-weight', 'font-family', 'color',
                    'line-height', 'letter-spacing', 'text-decoration', 'text-transform',
                    'padding', 'padding-top', 'padding-left', 'padding-right', 'padding-bottom',
                ],
                'style-default': {
                    'font-size': '13px',
                    'padding-top': '25px',
                    'padding-bottom': '25px',
                    'padding-left': '10px',
                    'padding-right': '10px',
                    'text-transform': 'uppercase',
                },
                traits: ['href', 'rel'],
            },
        },
        view: {
            ...coreMjmlView,
            tagName: 'a',
            attributes: {
                style: 'float: none; display: inline-table;',
            },
            getMjmlTemplate() {
                let parentView = this.model.parent()?.view;
                // @ts-ignore
                if (parentView?.getInnerMjmlTemplate) {
                    let mjmlNavBar = coreMjmlView.getInnerMjmlTemplate.call(parentView);
                    return {
                        start: `<mjml><mj-body><mj-column>${mjmlNavBar.start}`,
                        end: `${mjmlNavBar.end}</mj-column></mj-body></mjml>`,
                    };
                }
                else {
                    return {
                        start: `<mjml><mj-body><mj-column><mj-navbar>`,
                        end: `</mj-navbar></mj-column></mj-body></mjml>`,
                    };
                }
            },
            /**
             * #305 prevent content repeating
             */
            async rerender() {
                this.render();
                return await this.__renderPromise;
            },
            getTemplateFromEl(sandboxEl) {
                return sandboxEl.querySelector('div').innerHTML;
            },
            getChildrenSelector() {
                return 'a,p';
            },
        },
    });
});
(Object.getOwnPropertyDescriptor(NavBarLink, "name") || {}).writable || Object.defineProperty(NavBarLink, "name", { value: "default", configurable: true });

;// ./src/components/NavBar.ts




const NavBar_type = 'mj-navbar';
/* harmony default export */ const NavBar = ((editor, { opt, coreMjmlModel, coreMjmlView, sandboxEl }) => {
    editor.Components.addType(NavBar_type, {
        isComponent: isComponentType(NavBar_type),
        model: {
            ...coreMjmlModel,
            defaults: {
                name: getName(editor, 'navBar'),
                draggable: componentsToQuery([Column_type, Hero_type]),
                droppable: componentsToQuery(NavBarLink_type),
                'style-default': {
                    align: 'center',
                },
                stylable: [
                    'align',
                    'padding', 'padding-top', 'padding-left', 'padding-right', 'padding-bottom',
                    //@TODO ico-*
                ],
                traits: [
                    'base-url',
                    {
                        type: 'select',
                        label: 'Hamburger',
                        name: 'hamburger',
                        options: [
                            { value: 'hamburger', name: 'ON' },
                            { value: '', name: 'OFF' },
                        ],
                    },
                ],
            },
        },
        view: {
            ...coreMjmlView,
            tagName: 'tr',
            attributes: {
                style: 'pointer-events: all; display: table; width: 100%',
            },
            init() {
                coreMjmlView.init.call(this);
                this.listenTo(this.model.get('components'), 'add remove update', this.render);
            },
            async getTemplateFromMjml() {
                const mjmlTmpl = this.getMjmlTemplate();
                const innerMjml = this.getInnerMjmlTemplate();
                const mjmlStart = this.injectDocumentHead(mjmlTmpl.start);
                const htmlOutput = await mjmlConvert(opt.mjmlParser, `${mjmlStart}
          ${innerMjml.start}${innerMjml.end}${mjmlTmpl.end}`, opt.fonts);
                const html = htmlOutput.html;
                // I need styles for hamburger
                const styles = [];
                sandboxEl.innerHTML = html;
                const styleArr = Array.from(sandboxEl.querySelectorAll('style'));
                styleArr.forEach((item) => {
                    styles.push(item.innerHTML);
                });
                const content = html.replace(/<body(.*)>/, '<body>');
                const start = content.indexOf('<body>') + 6;
                const end = content.indexOf('</body>');
                sandboxEl.innerHTML = content.substring(start, end).trim();
                const componentEl = this.getTemplateFromEl(sandboxEl);
                // Copy all rendered attributes (TODO need for all)
                const attributes = {};
                const elAttrs = componentEl.attributes;
                for (let elAttr, i = 0, len = elAttrs.length; i < len; i++) {
                    elAttr = elAttrs[i];
                    attributes[elAttr.name] = elAttr.value;
                }
                return {
                    attributes,
                    content: componentEl.innerHTML,
                    style: styles.join(' '),
                };
            },
            render() {
                const renderId = (this.__renderId || 0) + 1;
                this.__renderId = renderId;
                this.renderAttributes();
                this.__renderPromise = Promise.resolve(this.getTemplateFromMjml())
                    .then((mjmlResult) => {
                    if (this.__renderId !== renderId) {
                        return this;
                    }
                    this.el.innerHTML = mjmlResult.content;
                    this.$el.attr(mjmlResult.attributes);
                    editor.addComponents(`<style>${mjmlResult.style}</style>`);
                    this.getChildrenContainer().innerHTML = this.model.get('content');
                    this.renderChildren();
                    this.renderStyle();
                    this.postRender();
                    return this;
                })
                    .catch((error) => {
                    editor.log(error.message, { level: 'error' });
                    return this;
                });
                return this;
            },
            getMjmlTemplate() {
                return {
                    start: `<mjml><mj-body><mj-column>`,
                    end: `</mj-column></mj-body></mjml>`,
                };
            },
            getTemplateFromEl(sandboxEl) {
                return sandboxEl.firstChild.querySelector('tr');
            },
            getChildrenSelector() {
                return 'div.mj-inline-links';
            },
            async rerender() {
                await coreMjmlView.rerender.call(this);
                await Promise.all(this.model.components().models.map(async (item) => {
                    if (item.attributes.type != NavBarLink_type) {
                        return;
                    }
                    await item.view.rerender();
                }));
            },
        },
    });
});
(Object.getOwnPropertyDescriptor(NavBar, "name") || {}).writable || Object.defineProperty(NavBar, "name", { value: "default", configurable: true });

;// ./src/components/SocialElement.ts


const SocialElement_type = 'mj-social-element';
/* harmony default export */ const SocialElement = ((editor, { coreMjmlModel, coreMjmlView }) => {
    editor.Components.addType(SocialElement_type, {
        isComponent: isComponentType(SocialElement_type),
        model: {
            ...coreMjmlModel,
            defaults: {
                name: getName(editor, 'socialElement'),
                draggable: componentsToQuery(Social_type),
                stylable: [
                    'icon-size', 'text-decoration', 'align', 'font-family', 'font-size', 'line-height',
                    'padding', 'padding-top', 'padding-left', 'padding-right', 'padding-bottom',
                    'border-radius', 'border-top-left-radius', 'border-top-right-radius', 'border-bottom-left-radius', 'border-bottom-right-radius',
                    'background-color',
                    'color',
                    'vertical-align',
                ],
                'style-default': {
                    'align': 'center',
                    'font-size': '13px',
                    'line-height': '22px',
                    'vertical-align': 'middle',
                },
                traits: [
                    {
                        type: 'select',
                        label: 'Icon',
                        name: 'name',
                        options: [
                            { value: 'custom', name: 'Custom' },
                            { value: 'facebook', name: 'Facebook' },
                            { value: 'twitter', name: 'Twitter' },
                            { value: 'google', name: 'Google' },
                            { value: 'instagram', name: 'Instagram' },
                            { value: 'web', name: 'Web' },
                            { value: 'youtube', name: 'Youtube' },
                            { value: 'pinterest', name: 'Pinterest' },
                            { value: 'linkedin', name: 'Linkedin' },
                            { value: 'snapchat', name: 'Snapchat' },
                            { value: 'vimeo', name: 'Vimeo' },
                            { value: 'tumblr', name: 'Tumblr' },
                            { value: 'github', name: 'Github' },
                            { value: 'soundcloud', name: 'SoundCloud' },
                            { value: 'medium', name: 'Medium' },
                            { value: 'dribbble', name: 'Dribbble' },
                            { value: 'xing', name: 'Xing' },
                        ]
                    },
                    'src', 'alt', 'title', // image
                    'href', 'rel' // link
                ],
            },
        },
        view: {
            ...coreMjmlView,
            tagName: 'table',
            attributes: {
                style: 'float: none; display: inline-table;',
            },
            getMjmlTemplate() {
                let parentView = this.model.parent()?.view;
                // @ts-ignore
                if (parentView.getInnerMjmlTemplate) {
                    let mjmlSocial = coreMjmlView.getInnerMjmlTemplate.call(parentView);
                    return {
                        start: `<mjml><mj-body><mj-column>${mjmlSocial.start}`,
                        end: `${mjmlSocial.end}</mj-column></mj-body></mjml>`,
                    };
                }
                else {
                    return {
                        start: `<mjml><mj-body><mj-column><mj-social>`,
                        end: `</mj-social></mj-column></mj-body></mjml>`,
                    };
                }
            },
            getTemplateFromEl(sandboxEl) {
                return sandboxEl.querySelector('tr > td > table').innerHTML;
            },
            getChildrenSelector() {
                return 'img';
            }
        },
    });
});
(Object.getOwnPropertyDescriptor(SocialElement, "name") || {}).writable || Object.defineProperty(SocialElement, "name", { value: "default", configurable: true });

;// ./src/components/Social.ts




const Social_type = 'mj-social';
/* harmony default export */ const Social = ((editor, { coreMjmlModel, coreMjmlView }) => {
    editor.Components.addType(Social_type, {
        isComponent: isComponentType(Social_type),
        model: {
            ...coreMjmlModel,
            defaults: {
                name: getName(editor, 'socialGroup'),
                draggable: componentsToQuery([Column_type, Hero_type]),
                droppable: componentsToQuery(SocialElement_type),
                stylable: [
                    'icon-size', 'text-decoration', 'align', 'font-family', 'font-size', 'line-height',
                    'padding', 'padding-top', 'padding-left', 'padding-right', 'padding-bottom',
                    'border-radius', 'border-top-left-radius', 'border-top-right-radius', 'border-bottom-left-radius', 'border-bottom-right-radius',
                    'container-background-color',
                    'color',
                ],
                'style-default': {
                    'align': 'center',
                    'icon-size': '20px',
                    'font-size': '13px',
                    'line-height': '22px',
                },
                traits: [
                    // @TODO doesn't work
                    {
                        type: 'select',
                        label: 'Mode',
                        name: 'mode',
                        options: [
                            { value: 'horizontal', name: 'Horizontal' },
                            { value: 'vertical', name: 'Vertical' },
                        ]
                    }
                ],
            },
        },
        view: {
            ...coreMjmlView,
            tagName: 'tr',
            attributes: {
                style: 'display: table; width: 100%',
            },
            getMjmlTemplate() {
                return {
                    start: `<mjml><mj-body><mj-column>`,
                    end: `</mj-column></mj-body></mjml>`,
                };
            },
            getTemplateFromEl(sandboxEl) {
                return sandboxEl.querySelector('tr').innerHTML;
            },
            getChildrenSelector() {
                return 'td';
            },
            async rerender() {
                await coreMjmlView.rerender.call(this);
                await Promise.all(this.model.components().models.map(async (item) => {
                    if (item.attributes.type !== SocialElement_type) {
                        return;
                    }
                    await item.view.rerender();
                }));
            },
            init() {
                coreMjmlView.init.call(this);
                this.listenTo(this.model.get('components'), 'add remove update', this.render);
            },
        }
    });
});
(Object.getOwnPropertyDescriptor(Social, "name") || {}).writable || Object.defineProperty(Social, "name", { value: "default", configurable: true });

;// ./src/components/Spacer.ts



const Spacer_type = 'mj-spacer';
/* harmony default export */ const Spacer = ((editor, { coreMjmlModel, coreMjmlView }) => {
    editor.Components.addType(Spacer_type, {
        isComponent: isComponentType(Spacer_type),
        model: {
            ...coreMjmlModel,
            defaults: {
                name: getName(editor, 'spacer'),
                draggable: componentsToQuery([Column_type, Hero_type]),
                droppable: false,
                'style-default': { height: '20px' },
                stylable: ['height', 'container-background-color'],
                traits: [],
                void: false,
            },
        },
        view: {
            ...coreMjmlView,
            tagName: 'tr',
            attributes: {
                style: 'display: table; width: 100%; user-select: none;',
            },
            getMjmlTemplate() {
                return {
                    start: `<mjml><mj-body><mj-column>`,
                    end: `</mj-column></mj-body></mjml>`,
                };
            },
            getTemplateFromEl(sandboxEl) {
                return sandboxEl.querySelector('tr').innerHTML;
            },
            getChildrenSelector() {
                return 'td';
            },
        },
    });
});
(Object.getOwnPropertyDescriptor(Spacer, "name") || {}).writable || Object.defineProperty(Spacer, "name", { value: "default", configurable: true });

;// ./src/components/Hero.ts









const Hero_type = 'mj-hero';
/* harmony default export */ const Hero = ((editor, { coreMjmlModel, coreMjmlView }) => {
    editor.Components.addType(Hero_type, {
        isComponent: isComponentType(Hero_type),
        model: {
            ...coreMjmlModel,
            defaults: {
                name: getName(editor, 'hero'),
                draggable: componentsToQuery(Body_type),
                droppable: componentsToQuery([Text_type, Button_type, Image_type, Divider_type, NavBar_type, Social_type, Spacer_type]),
                stylable: [
                    'background-color', 'background-height', 'background-position', 'background-url',
                    'background-width', 'height', 'padding', 'padding-top',
                    'padding-left', 'padding-right', 'padding-bottom', 'vertical-align', 'width'
                ],
                'style-default': {
                    'vertical-align': 'top'
                },
                traits: [
                    //@TODO doesn't work
                    {
                        type: 'select',
                        label: 'Mode',
                        name: 'mode',
                        options: [
                            { value: 'fixed-height', name: 'Fixed height' },
                            { value: 'fluid-height', name: 'Fluid height' },
                        ]
                    }
                ],
            },
        },
        view: {
            ...coreMjmlView,
            tagName: 'div',
            attributes: {
                style: 'display: table; width: 100%',
            },
            getMjmlTemplate() {
                return {
                    start: `<mjml><mj-body>`,
                    end: `</mj-body></mjml>`,
                };
            },
            getChildrenSelector() {
                return 'table tr td';
            },
        }
    });
});
(Object.getOwnPropertyDescriptor(Hero, "name") || {}).writable || Object.defineProperty(Hero, "name", { value: "default", configurable: true });

;// ./src/components/Raw.ts



const Raw_type = 'mj-raw';
/* harmony default export */ const Raw = ((editor, { coreMjmlModel, coreMjmlView }) => {
    editor.Components.addType(Raw_type, {
        isComponent: isComponentType(Raw_type),
        model: {
            ...coreMjmlModel,
            defaults: {
                name: getName(editor, 'raw'),
                draggable: componentsToQuery([Body_type, type]),
                stylable: false,
                'style-default': {},
                'style': {},
                'attributes': {},
                traits: [],
            },
        },
        view: {
            ...coreMjmlView,
            tagName: 'section',
            attributes: {
                style: 'pointer-events: all;',
            },
            getMjmlTemplate() {
                const parent = this.model.parent();
                const parentView = parent?.view;
                const parentTag = parent?.attributes.tagName;
                // @ts-ignore
                const getInnerMjmlTemplate = parentView?.getInnerMjmlTemplate;
                if (getInnerMjmlTemplate && parentTag === 'mj-body') {
                    let mjmlBody = coreMjmlView.getInnerMjmlTemplate.call(parentView);
                    return {
                        start: `<mjml>${mjmlBody.start}`,
                        end: `${mjmlBody.end}</mjml>`,
                    };
                }
                else if (getInnerMjmlTemplate && parentTag === 'mj-head') {
                    let mjmlHead = coreMjmlView.getInnerMjmlTemplate.call(parentView);
                    return {
                        start: `<mjml>${mjmlHead.start}`,
                        end: `${mjmlHead.end}</mjml>`,
                    };
                }
                else {
                    return {
                        start: `<mjml><mj-body>`,
                        end: `</mj-body></mjml>`,
                    };
                }
            },
            getTemplateFromEl(sandboxEl) {
                return sandboxEl.innerHTML;
            },
            getChildrenSelector() {
                return '*';
            },
            init() {
                coreMjmlView.init.call(this);
                this.listenTo(this.model.get('components'), 'add remove', this.render);
            },
        },
    });
});
(Object.getOwnPropertyDescriptor(Raw, "name") || {}).writable || Object.defineProperty(Raw, "name", { value: "default", configurable: true });

;// ./src/components/Body.ts





const Body_type = 'mj-body';
/* harmony default export */ const Body = ((editor, { coreMjmlModel, coreMjmlView }) => {
    editor.Components.addType(Body_type, {
        isComponent: isComponentType(Body_type),
        model: {
            ...coreMjmlModel,
            defaults: {
                name: getName(editor, 'body'),
                droppable: componentsToQuery([Section_type, Wrapper_type, Hero_type, Raw_type]),
                draggable: false,
                copyable: false,
                removable: false,
                highlightable: false,
                'style-default': { 'width': '600px' },
                stylable: ['width', 'background-color'],
                traits: [],
            },
        },
        view: {
            ...coreMjmlView,
            tagName: 'div',
            attributes: {
                style: 'width: 100%; min-height: 100vh',
            },
            getChildrenSelector() {
                return 'div';
            },
            getInnerMjmlTemplate() {
                const orig = coreMjmlView.getInnerMjmlTemplate.call(this);
                return {
                    start: `${orig.start}<mj-section></mj-section>`,
                    end: orig.end,
                };
            },
            renderStyle() {
                this.getChildrenContainer().style.maxWidth = 'none';
                this.getChildrenContainer().style.width = '100%';
                this.el.setAttribute('style', `${this.el.getAttribute('style') + this.attributes.style}`);
            },
            async rerender() {
                await coreMjmlView.rerender.call(this);
                await Promise.all(this.model.components().models.map(async (item) => {
                    if ([Section_type, Raw_type].indexOf(item.attributes.type) < 0) {
                        return;
                    }
                    await item.view.rerender();
                }));
            },
        },
    });
});
(Object.getOwnPropertyDescriptor(Body, "name") || {}).writable || Object.defineProperty(Body, "name", { value: "default", configurable: true });

;// ./src/components/mjml.ts



const mjml_type = 'mjml';
/* harmony default export */ const mjml = ((editor, { coreMjmlModel, coreMjmlView }) => {
    editor.Components.addType(mjml_type, {
        isComponent: isComponentType(mjml_type),
        model: {
            ...coreMjmlModel,
            defaults: {
                droppable: componentsToQuery([type, Body_type]),
                draggable: false,
                stylable: false,
                copyable: false,
                removable: false,
                highlightable: false,
                traits: [
                    {
                        name: 'owa',
                        placeholder: 'eg. desktop',
                    },
                    {
                        name: 'lang',
                        placeholder: 'eg. en',
                    },
                    {
                        name: 'dir',
                        placeholder: 'eg. rtl',
                    },
                ],
            },
        },
        view: {
            ...coreMjmlView,
            tagName: 'div',
            attributes: { style: 'min-height: 100vh' },
            async rerender() {
                this.render();
                return await this.__renderPromise;
            },
            getTemplateFromMjml() {
                return '';
            }
        },
    });
});
(Object.getOwnPropertyDescriptor(mjml, "name") || {}).writable || Object.defineProperty(mjml, "name", { value: "default", configurable: true });

;// ./src/components/Attributes.ts

const Attributes_type = 'mj-attributes';
/* harmony default export */ const Attributes = ((editor, { coreMjmlModel, coreMjmlView }) => {
    editor.Components.addType(Attributes_type, {
        isComponent: isComponentType(Attributes_type),
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
                traits: [],
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
});
(Object.getOwnPropertyDescriptor(Attributes, "name") || {}).writable || Object.defineProperty(Attributes, "name", { value: "default", configurable: true });

;// ./src/components/Breakpoint.ts


const Breakpoint_type = 'mj-breakpoint';
/* harmony default export */ const Breakpoint = ((editor, { coreMjmlModel, coreMjmlView }) => {
    editor.Components.addType(Breakpoint_type, {
        isComponent: isComponentType(Breakpoint_type),
        model: {
            ...coreMjmlModel,
            defaults: {
                draggable: componentsToQuery(type),
                highlightable: false,
                stylable: false,
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
});
(Object.getOwnPropertyDescriptor(Breakpoint, "name") || {}).writable || Object.defineProperty(Breakpoint, "name", { value: "default", configurable: true });

;// ./src/components/Style.ts


const Style_type = 'mj-style';
/* harmony default export */ const Style = ((editor, { opt, coreMjmlModel, coreMjmlView, sandboxEl }) => {
    editor.Components.addType(Style_type, {
        isComponent: isComponentType(Style_type),
        model: {
            ...coreMjmlModel,
            defaults: {
                draggable: componentsToQuery(type),
            },
        },
        view: {
            ...coreMjmlView,
            tagName: 'style',
            getMjmlTemplate() {
                return {
                    start: `<mjml><mj-head>`,
                    end: `</mj-head><mj-body></mj-body></mjml>`,
                };
            },
            getTemplateFromEl(sandboxEl) {
                return sandboxEl.querySelector('style').innerHTML;
            },
            renderStyle() { },
            async getTemplateFromMjml() {
                let mjmlTmpl = this.getMjmlTemplate();
                let innerMjml = this.getInnerMjmlTemplate();
                const htmlOutput = await mjmlConvert(opt.mjmlParser, `${mjmlTmpl.start}
          ${innerMjml.start}${innerMjml.end}${mjmlTmpl.end}`, opt.fonts);
                let html = htmlOutput.html;
                let start = html.indexOf('<head>') + 6;
                let end = html.indexOf('</head>');
                html = html.substring(start, end).trim();
                sandboxEl.innerHTML = html;
                return this.getTemplateFromEl(sandboxEl);
            },
        }
    });
});
(Object.getOwnPropertyDescriptor(Style, "name") || {}).writable || Object.defineProperty(Style, "name", { value: "default", configurable: true });

;// ./src/components/Font.ts


const Font_type = 'mj-font';
/* harmony default export */ const Font = ((editor, { opt, coreMjmlModel, coreMjmlView, sandboxEl }) => {
    editor.Components.addType(Font_type, {
        isComponent: isComponentType(Font_type),
        model: {
            ...coreMjmlModel,
            defaults: {
                draggable: componentsToQuery(type),
                void: false,
            },
        },
        view: {
            ...coreMjmlView,
            tagName: 'style',
            getMjmlTemplate() {
                const name = this.model.get('attributes')?.name;
                /*
                 * mjml will omit `<mj-font> definitions which are not actually used.
                 * Therefore we need to have an mj-text that uses our font
                 */
                return {
                    start: `<mjml><mj-head>`,
                    end: `</mj-head><mj-body><mj-text font-family="${name}"></mj-text></mj-body></mjml>`,
                };
            },
            getTemplateFromEl(sandboxEl) {
                return sandboxEl.querySelectorAll('style')[1].innerHTML;
            },
            renderStyle() { },
            renderChildren() { },
            async getTemplateFromMjml() {
                const mjmlTmpl = this.getMjmlTemplate();
                const innerMjml = this.getInnerMjmlTemplate();
                const htmlOutput = await mjmlConvert(opt.mjmlParser, `${mjmlTmpl.start}
          ${innerMjml.start}${innerMjml.end}${mjmlTmpl.end}`, opt.fonts);
                let html = htmlOutput.html;
                const start = html.indexOf('<head>') + 6;
                const end = html.indexOf('</head>');
                html = html.substring(start, end).trim();
                sandboxEl.innerHTML = html;
                return this.getTemplateFromEl(sandboxEl);
            },
        },
    });
});
(Object.getOwnPropertyDescriptor(Font, "name") || {}).writable || Object.defineProperty(Font, "name", { value: "default", configurable: true });

;// ./src/components/HtmlAttribute.ts


const HtmlAttribute_type = 'mj-html-attribute';
/* harmony default export */ const HtmlAttribute = ((editor, { coreMjmlModel, coreMjmlView }) => {
    editor.Components.addType(HtmlAttribute_type, {
        isComponent: isComponentType(HtmlAttribute_type),
        model: {
            ...coreMjmlModel,
            defaults: {
                draggable: componentsToQuery(Selector_type),
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
});
(Object.getOwnPropertyDescriptor(HtmlAttribute, "name") || {}).writable || Object.defineProperty(HtmlAttribute, "name", { value: "default", configurable: true });

;// ./src/components/Selector.ts



const Selector_type = 'mj-selector';
/* harmony default export */ const Selector = ((editor, { coreMjmlModel, coreMjmlView }) => {
    editor.Components.addType(Selector_type, {
        isComponent: isComponentType(Selector_type),
        model: {
            ...coreMjmlModel,
            defaults: {
                draggable: componentsToQuery(HtmlAttributes_type),
                droppable: componentsToQuery(HtmlAttribute_type),
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
});
(Object.getOwnPropertyDescriptor(Selector, "name") || {}).writable || Object.defineProperty(Selector, "name", { value: "default", configurable: true });

;// ./src/components/HtmlAttributes.ts



const HtmlAttributes_type = 'mj-html-attributes';
/* harmony default export */ const HtmlAttributes = ((editor, { coreMjmlModel, coreMjmlView }) => {
    editor.Components.addType(HtmlAttributes_type, {
        isComponent: isComponentType(HtmlAttributes_type),
        model: {
            ...coreMjmlModel,
            defaults: {
                draggable: componentsToQuery(type),
                droppable: componentsToQuery(Selector_type),
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
});
(Object.getOwnPropertyDescriptor(HtmlAttributes, "name") || {}).writable || Object.defineProperty(HtmlAttributes, "name", { value: "default", configurable: true });

;// ./src/components/Preview.ts


const Preview_type = 'mj-preview';
/* harmony default export */ const Preview = ((editor, { coreMjmlModel, coreMjmlView }) => {
    editor.Components.addType(Preview_type, {
        isComponent: isComponentType(Preview_type),
        model: {
            ...coreMjmlModel,
            defaults: {
                draggable: componentsToQuery(type),
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
});
(Object.getOwnPropertyDescriptor(Preview, "name") || {}).writable || Object.defineProperty(Preview, "name", { value: "default", configurable: true });

;// ./src/components/Title.ts


const Title_type = 'mj-title';
/* harmony default export */ const Title = ((editor, { coreMjmlModel, coreMjmlView }) => {
    editor.Components.addType(Title_type, {
        isComponent: isComponentType(Title_type),
        model: {
            ...coreMjmlModel,
            defaults: {
                draggable: componentsToQuery(type),
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
});
(Object.getOwnPropertyDescriptor(Title, "name") || {}).writable || Object.defineProperty(Title, "name", { value: "default", configurable: true });

;// ./src/components/AccordionTitle.ts


const AccordionTitle_type = 'mj-accordion-title';
/* harmony default export */ const AccordionTitle = ((editor, { coreMjmlModel, coreMjmlView }) => {
    editor.Components.addType(AccordionTitle_type, {
        isComponent: isComponentType(AccordionTitle_type),
        model: {
            ...coreMjmlModel,
            defaults: {
                draggable: componentsToQuery(AccordionElement_type),
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
});
(Object.getOwnPropertyDescriptor(AccordionTitle, "name") || {}).writable || Object.defineProperty(AccordionTitle, "name", { value: "default", configurable: true });

;// ./src/components/AccordionText.ts


const AccordionText_type = 'mj-accordion-text';
/* harmony default export */ const AccordionText = ((editor, { coreMjmlModel, coreMjmlView }) => {
    editor.Components.addType(AccordionText_type, {
        isComponent: isComponentType(AccordionText_type),
        model: {
            ...coreMjmlModel,
            defaults: {
                draggable: componentsToQuery(AccordionElement_type),
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
});
(Object.getOwnPropertyDescriptor(AccordionText, "name") || {}).writable || Object.defineProperty(AccordionText, "name", { value: "default", configurable: true });

;// ./src/components/AccordionElement.ts




const AccordionElement_type = 'mj-accordion-element';
/* harmony default export */ const AccordionElement = ((editor, { coreMjmlModel, coreMjmlView }) => {
    editor.Components.addType(AccordionElement_type, {
        isComponent: isComponentType(AccordionElement_type),
        model: {
            ...coreMjmlModel,
            defaults: {
                draggable: componentsToQuery(Accordion_type),
                droppable: componentsToQuery([AccordionTitle_type, AccordionText_type]),
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
});
(Object.getOwnPropertyDescriptor(AccordionElement, "name") || {}).writable || Object.defineProperty(AccordionElement, "name", { value: "default", configurable: true });

;// ./src/components/Accordion.ts



const Accordion_type = 'mj-accordion';
/* harmony default export */ const Accordion = ((editor, { coreMjmlModel, coreMjmlView }) => {
    editor.Components.addType(Accordion_type, {
        isComponent: isComponentType(Accordion_type),
        model: {
            ...coreMjmlModel,
            defaults: {
                name: 'Accordion',
                draggable: componentsToQuery(Column_type),
                droppable: componentsToQuery(AccordionElement_type),
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
                const children = this.model.components().models.map((component) => component.toHTML()).join('');
                return {
                    start: `${orig.start}${children}`,
                    end: orig.end,
                };
            },
            getTemplateFromEl(sandboxEl) {
                return sandboxEl.querySelector('table.mj-accordion')?.outerHTML || '';
            },
            renderChildren() { },
            init() {
                coreMjmlView.init.call(this);
                this.listenTo(this.model.get('components'), 'add remove update', this.render);
            },
        },
    });
});
(Object.getOwnPropertyDescriptor(Accordion, "name") || {}).writable || Object.defineProperty(Accordion, "name", { value: "default", configurable: true });

;// ./src/components/CarouselImage.ts


const CarouselImage_type = 'mj-carousel-image';
/* harmony default export */ const CarouselImage = ((editor, { coreMjmlModel, coreMjmlView }) => {
    editor.Components.addType(CarouselImage_type, {
        isComponent: isComponentType(CarouselImage_type),
        model: {
            ...coreMjmlModel,
            defaults: {
                draggable: componentsToQuery(Carousel_type),
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
});
(Object.getOwnPropertyDescriptor(CarouselImage, "name") || {}).writable || Object.defineProperty(CarouselImage, "name", { value: "default", configurable: true });

;// ./src/components/Carousel.ts



const Carousel_type = 'mj-carousel';
/* harmony default export */ const Carousel = ((editor, { coreMjmlModel, coreMjmlView }) => {
    editor.Components.addType(Carousel_type, {
        isComponent: isComponentType(Carousel_type),
        model: {
            ...coreMjmlModel,
            defaults: {
                name: 'Carousel',
                draggable: componentsToQuery(Column_type),
                droppable: componentsToQuery(CarouselImage_type),
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
                const children = this.model.components().models.map((component) => component.toHTML()).join('');
                return {
                    start: `${orig.start}${children}`,
                    end: orig.end,
                };
            },
            getTemplateFromEl(sandboxEl) {
                return sandboxEl.querySelector('.mj-carousel')?.outerHTML || sandboxEl.querySelector('.mj-carousel-image')?.outerHTML || '';
            },
            renderChildren() { },
            init() {
                coreMjmlView.init.call(this);
                this.listenTo(this.model.get('components'), 'add remove update', this.render);
            },
        },
    });
});
(Object.getOwnPropertyDescriptor(Carousel, "name") || {}).writable || Object.defineProperty(Carousel, "name", { value: "default", configurable: true });

;// ./src/components/Table.ts


const Table_type = 'mj-table';
const typeRow = 'tr';
const typeCell = 'td';
const typeHeaderCell = 'th';
/* harmony default export */ const Table = ((editor, { coreMjmlModel, coreMjmlView }) => {
    editor.Components.addType(typeRow, {
        isComponent: isComponentType(typeRow),
        model: {
            defaults: {
                tagName: typeRow,
                name: 'Table row',
                draggable: () => componentsToQuery(Table_type),
                droppable: () => componentsToQuery([typeCell, typeHeaderCell]),
                highlightable: false,
                traits: [],
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
                traits: [],
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
                traits: [],
            },
        },
        view: {
            tagName() {
                return typeHeaderCell;
            },
        },
    });
    editor.Components.addType(Table_type, {
        isComponent: isComponentType(Table_type),
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
                draggable: componentsToQuery(Column_type),
                droppable: componentsToQuery(typeRow),
                highlightable: false,
                traits: [],
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
                const children = this.model.components().models.map((component) => component.toHTML()).join('');
                return {
                    start: `${orig.start}${children}`,
                    end: orig.end,
                };
            },
            getTemplateFromEl(sandboxEl) {
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
});
(Object.getOwnPropertyDescriptor(Table, "name") || {}).writable || Object.defineProperty(Table, "name", { value: "default", configurable: true });

;// ./src/components/index.ts



































/* harmony default export */ const components = ((editor, opt) => {
    const { Components } = editor;
    // @ts-ignore
    const ComponentsView = Components.ComponentsView;
    const sandboxEl = document.createElement('div');
    /**
     * Read mj-attributes from mj-head and return merged defaults
     * for the given component type. Returns {} if the tree is not ready.
     */
    function getMjAttributeDefaults(componentType) {
        const wrapper = editor.Components.getWrapper();
        const mjml = wrapper?.components().find((c) => c.get('type') === 'mjml');
        if (!mjml)
            return {};
        const head = mjml.components().find((c) => c.get('type') === 'mj-head');
        if (!head)
            return {};
        const attrsComp = head.components().find((c) => c.get('type') === 'mj-attributes');
        if (!attrsComp)
            return {};
        const result = {};
        attrsComp.components().forEach((child) => {
            const childTag = child.get('tagName');
            if (childTag !== 'mj-all' && childTag !== componentType)
                return;
            // Read raw attributes directly to avoid recursion with getAttrToHTML()
            const attrs = { ...child.get('attributes') };
            delete attrs.style;
            delete attrs.id;
            // mj-all comes first, type-specific overrides it
            Object.assign(result, attrs);
        });
        return result;
    }
    // Expose for use in applyMjAttributes (src/index.ts)
    editor.__getMjAttributeDefaults = getMjAttributeDefaults;
    // MJML Core model
    let coreMjmlModel = {
        init() {
            const attrs = { ...this.get('attributes') };
            const tagName = this.get('tagName');
            const headDefaults = getMjAttributeDefaults(tagName);
            const style = { ...this.get('style-default'), ...headDefaults, ...this.get('style') };
            for (let prop in style) {
                if (!(prop in attrs)) {
                    attrs[prop] = style[prop];
                }
            }
            this.set('attributes', attrs);
            this.set('style', attrs);
            this.listenTo(this, 'change:style', this.handleStyleChange);
            this.listenTo(this, 'change:attributes', this.handleAttributeChange);
        },
        handleAttributeChange(m, v, opts) {
            this.setStyle(this.get('attributes'), opts);
        },
        getStylesToAttributes() {
            const style = this.getStyle() || {};
            delete style.__p;
            return style;
        },
        handleStyleChange(m, v, opts) {
            this.set('attributes', this.getStylesToAttributes(), opts);
        },
        getMjmlAttributes() {
            const attr = this.get('attributes') || {};
            delete attr.style;
            const src = this.get('src');
            if (src)
                attr.src = src;
            return attr;
        },
        /**
         * This will avoid rendering default attributes and
         * attributes already defined in mj-attributes (mj-head)
         * @return {Object}
         */
        getAttrToHTML() {
            const attr = { ...this.get('attributes') };
            const style = { ...this.get('style-default') };
            delete attr.style;
            delete attr.id;
            // Only strip head defaults for body components, not for
            // components inside mj-attributes (which define the defaults themselves)
            let isInsideHead = false;
            let parent = this.parent?.();
            while (parent) {
                if (parent.get?.('type') === 'mj-head') {
                    isInsideHead = true;
                    break;
                }
                parent = parent.parent?.();
            }
            const headDefaults = isInsideHead ? {} : getMjAttributeDefaults(this.get('tagName'));
            for (let prop in attr) {
                const value = attr[prop];
                if (value && (value === style[prop] || value === headDefaults[prop])) {
                    delete attr[prop];
                }
            }
            return attr;
        },
        /**
         * Have to change a few things for the MJML's xml (no id, style, class)
         */
        toHTML(opts) {
            const model = this;
            const tag = model.get('tagName');
            const voidTag = model.get('void');
            const attr = this.getAttrToHTML();
            let code = '';
            let strAttr = '';
            for (let prop in attr) {
                const val = attr[prop];
                const hasValue = typeof val !== 'undefined' && val !== '';
                strAttr += hasValue ? ` ${prop}="${val}"` : '';
            }
            code += `<${tag}${strAttr}${voidTag ? '/' : ''}>` + model.get('content');
            model.components().forEach((model) => {
                code += model.toHTML(opts);
            });
            if (!voidTag) {
                code += `</${tag}>`;
            }
            return code;
        },
        isHidden() {
            return this.getStyle().display === 'none';
        },
    };
    /**
     * MJML Core View.
     * MJML is designed to compile from a valid MJML document therefore any time we update some component
     * we have to recompile its MJML to HTML.
     *
     * To get the proper HTML of our updated component we have to build a new MJML document and here we can
     * find different helpers to accomplish that (eg. `getMjmlTemplate`, `getInnerMjmlTemplate`).
     *
     * Once the MJML is compiled (in `getTemplateFromMjml`) we have to extract its HTML from the
     * element (`getTemplateFromEl`).
     *
     * We should also instruct the editor to understand where new inner components are placed in our compiled
     * HTML once they are dropped inside, for that case you can rely on `getChildrenSelector` in your
     * component definition.
     *
     * Each MJML element differs in its output HTML structure and might also change based on inner components
     * (you might need to change `getMjmlTemplate` based on current inner Components).
     *
     * One easy way to test the HTML output is to use MJML live editor (https://mjml.io/try-it-live) with the
     * "View HTML" enabled and check there how it changes in order to override properly provided helpers.
     *
     */
    let coreMjmlView = {
        init() {
            this.stopListening(this.model, 'change:style');
            this.listenTo(this.model, 'change:attributes change:src', this.rerender);
            this.debouncedRender = debounce(this.render.bind(this), 0);
            this.__renderId = 0;
        },
        async rerender() {
            this.render(null, null, {}, 1);
            return await this.__renderPromise;
        },
        /**
         * Get the base MJML template wrapper tags
         */
        getMjmlTemplate() {
            return {
                start: `<mjml>`,
                end: `</mjml>`,
            };
        },
        isInsideHead() {
            let component = this.model;
            while (component) {
                if (component.get?.('type') === 'mj-head') {
                    return true;
                }
                component = component.parent?.();
            }
            return false;
        },
        getDocumentMjmlHead() {
            if (this.isInsideHead()) {
                return '';
            }
            const wrapper = editor.Components.getWrapper();
            const mjml = wrapper?.components().find((component) => component.get('type') === 'mjml');
            const head = mjml?.components().find((component) => component.get('type') === 'mj-head');
            return head ? head.toHTML() : '';
        },
        injectDocumentHead(start) {
            const head = this.getDocumentMjmlHead();
            if (!head || /<mj-head[\s>]/.test(start)) {
                return start;
            }
            const mjmlOpen = start.match(/^<mjml[^>]*>/);
            if (!mjmlOpen) {
                return start;
            }
            return `${mjmlOpen[0]}${head}${start.slice(mjmlOpen[0].length)}`;
        },
        /**
         * Build the MJML of the current component
         */
        getInnerMjmlTemplate() {
            const { model } = this;
            const tagName = model.get('tagName');
            const attr = model.getMjmlAttributes();
            let strAttr = '';
            for (let prop in attr) {
                const val = attr[prop];
                strAttr += typeof val !== 'undefined' && val !== '' ? ' ' + prop + '="' + val + '"' : '';
            }
            return {
                start: `<${tagName}${strAttr}>`,
                end: `</${tagName}>`,
            };
        },
        /**
         * Get the proper HTML string from the element containing compiled MJML template.
         */
        getTemplateFromEl(sandboxEl) {
            return sandboxEl.firstChild.innerHTML;
        },
        /**
         * Get HTML from MJML template.
         */
        async getTemplateFromMjml() {
            const mjmlTmpl = this.getMjmlTemplate();
            const innerMjml = this.getInnerMjmlTemplate();
            const mjmlStart = this.injectDocumentHead(mjmlTmpl.start);
            const mjml = `${mjmlStart}${innerMjml.start}${innerMjml.end}${mjmlTmpl.end}`;
            const htmlOutput = await mjmlConvert(opt.mjmlParser, mjml, opt.fonts);
            let html = htmlOutput.html;
            html = html.replace(/<body(.*)>/, '<body>');
            let start = html.indexOf('<body>') + 6;
            let end = html.indexOf('</body>');
            html = html.substring(start, end).trim();
            sandboxEl.innerHTML = html;
            return this.getTemplateFromEl(sandboxEl);
        },
        /**
         * Render children components
         * @private
         */
        renderChildren(appendChildren) {
            this.updateContent();
            const container = this.getChildrenContainer();
            // This trick will help perfs by caching children
            if (!appendChildren) {
                this.childrenView =
                    this.childrenView ||
                        // @ts-ignore
                        new ComponentsView({
                            collection: this.model.get('components'),
                            // @ts-ignore
                            config: this.config,
                            componentTypes: this.opts.componentTypes,
                        });
                this.childNodes = this.childrenView.render(container).el.childNodes;
            }
            else {
                this.childrenView.parentEl = container;
            }
            const childNodes = Array.prototype.slice.call(this.childNodes);
            for (let i = 0, len = childNodes.length; i < len; i++) {
                container.appendChild(childNodes.shift());
            }
        },
        checkVisibility() {
            if (this.model.isHidden?.()) {
                this.el.style.display = 'none';
            }
        },
        renderStyle() {
            this.el.style.cssText = this.attributes.style;
            this.checkVisibility();
        },
        render(p, c, opts, appendChildren) {
            const renderId = (this.__renderId || 0) + 1;
            this.__renderId = renderId;
            this.renderAttributes();
            this.__renderPromise = Promise.resolve(this.getTemplateFromMjml())
                .then((template) => {
                if (this.__renderId !== renderId) {
                    return this;
                }
                this.el.innerHTML = template;
                this.renderChildren(appendChildren);
                this.childNodes = this.getChildrenContainer().childNodes;
                this.renderStyle();
                this.postRender();
                return this;
            })
                .catch((error) => {
                editor.log(error.message, { level: 'error' });
                return this;
            });
            return this;
        },
    };
    // MJML Internal view (for elements inside mj-columns)
    const compOpts = { coreMjmlModel, coreMjmlView, opt, sandboxEl, componentsToQuery: componentsToQuery };
    // Avoid the <body> tag from the default wrapper
    editor.Components.addType('wrapper', {
        model: {
            defaults: {
                highlightable: false,
            },
            toHTML(opts) {
                return this.getInnerHTML(opts);
            },
        },
    });
    [
        mjml,
        Head,
        Attributes,
        Breakpoint,
        Style,
        Font,
        HtmlAttributes,
        HtmlAttribute,
        Preview,
        Selector,
        Title,
        Body,
        Wrapper,
        Section,
        Group,
        Column,
        Accordion,
        AccordionElement,
        AccordionTitle,
        AccordionText,
        Button,
        Text,
        Carousel,
        CarouselImage,
        Image,
        Social,
        SocialElement,
        Divider,
        Spacer,
        NavBar,
        NavBarLink,
        Hero,
        Raw,
        Table,
        ...opt.customComponents,
    ].forEach((module) => module(editor, compOpts));
});
(Object.getOwnPropertyDescriptor(components, "name") || {}).writable || Object.defineProperty(components, "name", { value: "default", configurable: true });

// EXTERNAL MODULE: external "mjml-browser"
var external_mjml_browser_ = __webpack_require__(415);
var external_mjml_browser_default = /*#__PURE__*/__webpack_require__.n(external_mjml_browser_);
;// ./src/components/parser.ts

/**
 * MJML Parser instance.
 */
/* harmony default export */ const parser = ((external_mjml_browser_default()));

;// ./src/locale/en.js
/* harmony default export */ const en = ({
  'grapesjs-mjml': {
    category: '',
    panels: {
      buttons: {
        undo: 'Undo',
        redo: 'Redo',
        desktop: 'Desktop',
        tablet: 'Tablet',
        mobile: 'Mobile',
        import: 'Import MJML'
      },
      import: {
        title: 'Import MJML',
        button: 'Import',
        label: ''
      },
      export: {
        title: 'Export MJML'
      }
    },
    components: {
      names: {
        body: 'Body',
        button: 'Button',
        column: 'Column',
        oneColumn: '1 Column',
        twoColumn: '2 Columns',
        threeColumn: '3 Columns',
        divider: 'Divider',
        group: 'Group',
        hero: 'Hero',
        image: 'Image',
        navBar: 'Navbar',
        navLink: 'Navbar Link',
        section: 'Section',
        socialGroup: 'Group Social',
        socialElement: 'Social Element',
        spacer: 'Spacer',
        text: 'Text',
        wrapper: 'Wrapper',
        raw: 'Raw'
      }
    }
  }
});
;// ./src/panels.ts

/* harmony default export */ const panels = ((editor, opts) => {
    const { Panels } = editor;
    const iconStyle = 'style="display: block; max-width:22px"';
    const getI18nLabel = (label) => editor.I18n.t(`grapesjs-mjml.panels.buttons.${label}`);
    // Add Import button
    Panels.addButton('options', {
        id: cmdImportMjml,
        command: cmdImportMjml,
        attributes: { title: getI18nLabel('import') },
        label: `<svg ${iconStyle} viewBox="0 0 24 24">
        <path fill="currentColor" d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
    </svg>`,
    });
    // Add Undo/Redo buttons
    Panels.addButton('options', {
        id: 'undo',
        command: 'core:undo',
        attributes: { title: getI18nLabel('undo') },
        label: `<svg ${iconStyle} viewBox="0 0 24 24">
        <path fill="currentColor" d="M20 13.5C20 17.09 17.09 20 13.5 20H6V18H13.5C16 18 18 16 18 13.5S16 9 13.5 9H7.83L10.91 12.09L9.5 13.5L4 8L9.5 2.5L10.92 3.91L7.83 7H13.5C17.09 7 20 9.91 20 13.5Z" />
    </svg>`
    });
    Panels.addButton('options', {
        id: 'redo',
        command: 'core:redo',
        attributes: { title: getI18nLabel('redo') },
        label: `<svg ${iconStyle} viewBox="0 0 24 24">
        <path fill="currentColor" d="M10.5 18H18V20H10.5C6.91 20 4 17.09 4 13.5S6.91 7 10.5 7H16.17L13.08 3.91L14.5 2.5L20 8L14.5 13.5L13.09 12.09L16.17 9H10.5C8 9 6 11 6 13.5S8 18 10.5 18Z" />
    </svg>`,
    });
    // Update devices
    if (opts.resetDevices) {
        // Turn off default devices select and create new one
        editor.getConfig().showDevices = false;
        const devicePanel = Panels.addPanel({ id: 'devices-c' });
        const deviceBtns = devicePanel.get('buttons');
        deviceBtns?.add([
            {
                id: cmdDeviceDesktop,
                command: cmdDeviceDesktop,
                active: true,
                attributes: { title: getI18nLabel('desktop') },
                label: `<svg ${iconStyle} viewBox="0 0 24 24">
            <path fill="currentColor" d="M21,16H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10V20H8V22H16V20H14V18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2Z" />
        </svg>`,
            }, {
                id: cmdDeviceTablet,
                command: cmdDeviceTablet,
                attributes: { title: getI18nLabel('tablet') },
                label: `<svg ${iconStyle} viewBox="0 0 24 24">
            <path fill="currentColor" d="M19,18H5V6H19M21,4H3C1.89,4 1,4.89 1,6V18A2,2 0 0,0 3,20H21A2,2 0 0,0 23,18V6C23,4.89 22.1,4 21,4Z" />
        </svg>`,
            }, {
                id: cmdDeviceMobile,
                command: cmdDeviceMobile,
                attributes: { title: getI18nLabel('mobile') },
                label: `<svg ${iconStyle} viewBox="0 0 24 24">
            <path fill="currentColor" d="M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3C19,1.89 18.1,1 17,1Z" />
        </svg>`,
            }
        ]);
    }
});
(Object.getOwnPropertyDescriptor(panels, "name") || {}).writable || Object.defineProperty(panels, "name", { value: "default", configurable: true });

;// ./src/style.ts
/* harmony default export */ const style = ((editor, opt) => {
    if (opt.resetStyleManager) {
        editor.onReady(() => {
            const sectors = editor.StyleManager.getSectors();
            sectors.reset();
            sectors.add([{
                    name: 'Dimension',
                    open: false,
                    buildProps: ['width', 'height', 'max-width', 'min-height', 'margin', 'padding', 'vertical-align'],
                    properties: [{
                            property: 'margin',
                            properties: [
                                { name: 'Top', property: 'margin-top' },
                                { name: 'Right', property: 'margin-right' },
                                { name: 'Bottom', property: 'margin-bottom' },
                                { name: 'Left', property: 'margin-left' }
                            ],
                        }, {
                            property: 'padding',
                            detached: true,
                            properties: [
                                { name: 'Top', property: 'padding-top', units: ['px', '%'] },
                                { name: 'Right', property: 'padding-right', units: ['px', '%'] },
                                { name: 'Bottom', property: 'padding-bottom', units: ['px', '%'] },
                                { name: 'Left', property: 'padding-left', units: ['px', '%'] }
                            ],
                        }, {
                            property: 'icon-size',
                            type: 'integer',
                            defaults: '20px',
                            units: ['px', '%']
                        }, {
                            property: 'vertical-align',
                            type: 'select',
                            list: [
                                { value: 'top' },
                                { value: 'middle' },
                                { value: 'bottom' },
                            ]
                        }],
                }, {
                    name: 'Typography',
                    open: false,
                    buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-align', 'align', 'text-decoration', 'font-style'],
                    properties: [
                        { name: 'Font', property: 'font-family' },
                        { name: 'Font size', property: 'font-size', units: ['px'] },
                        { name: 'Weight', property: 'font-weight' },
                        { name: 'Letter spacing', property: 'letter-spacing', units: ['px', 'em'] },
                        { name: 'Font color', property: 'color' },
                        { name: 'Line height', property: 'line-height', units: ['px', '%'] },
                        {
                            property: 'text-align',
                            type: 'radio',
                            defaults: 'left',
                            list: [
                                { value: 'left', name: 'Left', className: 'fa fa-align-left' },
                                { value: 'center', name: 'Center', className: 'fa fa-align-center' },
                                { value: 'right', name: 'Right', className: 'fa fa-align-right' },
                                { value: 'justify', name: 'Justify', className: 'fa fa-align-justify' }
                            ],
                        }, {
                            property: 'align',
                            type: 'radio',
                            defaults: 'left',
                            list: [
                                { value: 'left', name: 'Left', className: 'fa fa-align-left' },
                                { value: 'center', name: 'Center', className: 'fa fa-align-center' },
                                { value: 'right', name: 'Right', className: 'fa fa-align-right' },
                                { value: 'justify', name: 'Justify', className: 'fa fa-align-justify' }
                            ],
                        }, {
                            property: 'text-decoration',
                            type: 'radio',
                            defaults: 'none',
                            list: [
                                { value: 'none', name: 'None', className: 'fa fa-times' },
                                { value: 'underline', name: 'underline', className: 'fa fa-underline' },
                                { value: 'line-through', name: 'Line-through', className: 'fa fa-strikethrough' }
                            ],
                        }, {
                            property: 'font-style',
                            type: 'radio',
                            defaults: 'normal',
                            list: [
                                { value: 'normal', name: 'Normal', className: 'fa fa-font' },
                                { value: 'italic', name: 'Italic', className: 'fa fa-italic' }
                            ],
                        }
                    ],
                }, {
                    name: 'Decorations',
                    open: false,
                    buildProps: ['background-color', 'container-background-color', 'background-url', 'background-repeat',
                        'background-size', 'border-radius', 'border'],
                    properties: [{
                            name: 'Background color',
                            property: 'container-background-color',
                            type: 'color',
                            full: true
                        }, {
                            property: 'background-url',
                            type: 'file',
                            full: true
                        }, {
                            property: 'border-radius',
                            properties: [
                                { name: 'Top', property: 'border-top-left-radius' },
                                { name: 'Right', property: 'border-top-right-radius' },
                                { name: 'Bottom', property: 'border-bottom-left-radius' },
                                { name: 'Left', property: 'border-bottom-right-radius' }
                            ],
                        }, {
                            property: 'border-detached',
                            name: 'Border detached',
                            type: 'composite',
                            detached: true,
                            properties: [
                                { name: 'Width', property: 'border-width', type: 'integer', units: ['px', '%'] },
                                {
                                    name: 'Style', property: 'border-style', type: 'select',
                                    list: [
                                        { value: 'none' },
                                        { value: 'solid' },
                                        { value: 'dotted' },
                                        { value: 'dashed' },
                                        { value: 'double' },
                                        { value: 'groove' },
                                        { value: 'ridge' },
                                        { value: 'inset' },
                                        { value: 'outset' }
                                    ]
                                },
                                { name: 'Color', property: 'border-color', type: 'color' },
                            ],
                        }],
                },
            ]);
        });
    }
});
(Object.getOwnPropertyDescriptor(style, "name") || {}).writable || Object.defineProperty(style, "name", { value: "default", configurable: true });

;// ./src/index.ts








const headComponentTypes = new Set([
    'mj-attributes',
    'mj-breakpoint',
    'mj-font',
    'mj-html-attributes',
    'mj-preview',
    'mj-style',
    'mj-title',
]);
const normalizeMjmlHead = (editor) => {
    const wrapper = editor.Components.getWrapper();
    const mjml = wrapper?.components().find((component) => component.get('type') === 'mjml');
    if (!mjml) {
        return;
    }
    const components = mjml.components();
    const head = components.find((component) => component.get('type') === 'mj-head');
    const body = components.find((component) => component.get('type') === 'mj-body');
    if (!head || !body) {
        return;
    }
    const orphanHeadComponents = components.filter((component) => headComponentTypes.has(component.get('type')));
    if (!orphanHeadComponents.length) {
        return;
    }
    orphanHeadComponents.forEach((component) => {
        component.remove({ temporary: true });
        head.append(component, { at: head.components().length });
    });
    body.trigger('change:components');
};
/**
 * After all components are loaded, read mj-attributes from mj-head
 * and apply their values to body components. This is needed because
 * during component init(), the component tree is not yet fully assembled,
 * so mj-attributes cannot be read at that time.
 *
 * For components added later (D&D), init() handles it via getMjAttributeDefaults.
 */
const applyMjAttributes = (editor) => {
    const getMjAttributeDefaults = editor.__getMjAttributeDefaults;
    if (!getMjAttributeDefaults)
        return;
    const wrapper = editor.Components.getWrapper();
    const mjml = wrapper?.components().find((c) => c.get('type') === 'mjml');
    if (!mjml)
        return;
    const body = mjml.components().find((c) => c.get('type') === 'mj-body');
    if (!body)
        return;
    const applyToComponent = (component) => {
        const tagName = component.get('tagName');
        const headDefaults = getMjAttributeDefaults(tagName);
        if (Object.keys(headDefaults).length > 0 && typeof component.getAttrToHTML === 'function') {
            const styleDefault = component.get('style-default') || {};
            const explicitAttrs = component.getAttrToHTML();
            // Expand shorthands (e.g. "padding" → "padding-top" etc.) in each
            // source before merging so that spread by priority works correctly:
            // explicit attrs > mj-attributes defaults > component style-default.
            //console.log('Applying MJML attributes to', tagName, { styleDefault, headDefaults, explicitAttrs });
            const newAttrs = {
                ...expandShorthand(styleDefault),
                ...expandShorthand(headDefaults),
                ...expandShorthand(explicitAttrs),
            };
            component.set('attributes', newAttrs);
        }
        component.components().forEach((c) => applyToComponent(c));
    };
    body.components().forEach((c) => applyToComponent(c));
};

const src_plugin = (editor, opt = {}) => {
    const opts = {
        blocks: [
            'mj-accordion',
            'mj-1-column',
            'mj-2-columns',
            'mj-3-columns',
            'mj-text',
            'mj-button',
            'mj-carousel',
            'mj-image',
            'mj-divider',
            'mj-social-group',
            'mj-social-element',
            'mj-spacer',
            'mj-navbar',
            'mj-navbar-link',
            'mj-hero',
            'mj-table',
            'mj-wrapper',
            'mj-raw',
        ],
        block: () => ({}),
        codeViewerTheme: 'hopscotch',
        customComponents: [],
        importPlaceholder: '',
        imagePlaceholderSrc: '',
        mjmlParser: parser,
        overwriteExport: true,
        preMjml: '',
        postMjml: '',
        resetBlocks: true,
        resetStyleManager: true,
        resetDevices: true,
        hideSelector: true,
        useXmlParser: false,
        useCustomTheme: true,
        columnsPadding: '',
        i18n: {},
        fonts: {},
        // Export 'mjml', 'html' or both (leave empty) TODO
        // exportOnly: '',
        ...opt,
    };
    const config = editor.getConfig();
    // I need to prevent forced class creation as classes aren't working
    // at the moment
    // @ts-ignore
    config.forceClass = false;
    // Don't need to create css rules with media
    // @ts-ignore
    config.devicePreviewMode = true;
    // Doesn't work without inline styling
    // @ts-ignore
    config.avoidInlineStyle = false;
    // Hide default selector manager
    if (opts.hideSelector) {
        const smConfig = editor.SelectorManager.getConfig();
        // @ts-ignore
        smConfig.custom = true;
    }
    // Use XML Parser
    if (opts.useXmlParser) {
        editor.Parser.getConfig().optionsHtml.htmlType = 'text/xml';
    }
    if (opts.useCustomTheme && typeof window !== 'undefined') {
        const primaryColor = '#2c2e35';
        const secondaryColor = '#888686';
        const quaternaryColor = '#f45e43';
        const prefix = 'gjs-';
        let cssString = '';
        [
            ['one', primaryColor],
            ['two', secondaryColor],
            ['four', quaternaryColor],
        ].forEach(([cnum, ccol]) => {
            cssString += `
        .${prefix}${cnum}-bg {
          background-color: ${ccol};
        }
        .${prefix}${cnum}-color {
          color: ${ccol};
        }
        .${prefix}${cnum}-color-h:hover {
          color: ${ccol};
        }
      `;
        });
        const style = document.createElement('style');
        style.innerText = cssString;
        document.head.appendChild(style);
    }
    // @ts-ignore Load i18n files
    editor.I18n.addMessages({
        en: en,
        ...opts.i18n,
    });
    [blocks, components, commands, panels, style].forEach((module) => module(editor, opts));
    editor.on('load', () => {
        normalizeMjmlHead(editor);
        applyMjAttributes(editor);
    });
    // Automatically apply MJML head logic whenever the component tree is rebuilt
    // (e.g. external editor.setComponents() calls).
    const debouncedMjmlApply = debounce(() => {
        normalizeMjmlHead(editor);
        applyMjAttributes(editor);
    }, 0);
    editor.on('component:add', (component) => {
        if (component.get('type') === 'mj-body') {
            debouncedMjmlApply();
        }
    });
};
/* harmony default export */ const src = (src_plugin);

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.js.map