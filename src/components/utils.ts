import type { Editor } from 'grapesjs';
import { MJMLParsingOptions } from "mjml-core";
import { MjmlParser, MjmlParserOutput } from "./parser";

export const isComponentType = (type: string) => (el: Element) => (el.tagName || '').toLowerCase() === type;

export async function mjmlConvert (parser: MjmlParser, mjml: string, fonts: Record<string, string>, opts: Partial<MJMLParsingOptions> = {}): Promise<MjmlParserOutput> {
  const options: MJMLParsingOptions = {
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

export const componentsToQuery = (cmps: string | string[]): string => {
  const cmpsArr = Array.isArray(cmps) ? cmps : [cmps];
  return cmpsArr.map(cmp => `[data-gjs-type="${cmp}"]`).join(', ');
};

export const getName = (editor: Editor, name: string): string => {
  return editor.I18n.t(`grapesjs-mjml.components.names.${name}`);
};

export function debounce<T extends (...params: any) => any>(clb: T, wait: number) {
  let timeout: number;
  return function(this: any, ...args: IArguments[]) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      clearTimeout(timeout);
      clb.apply(this, args);
    }, wait);
  } as T;
}

/**
 * Expand CSS shorthand properties into their longhand equivalents.
 * Covers padding, margin, border-radius, border, and border-{side}.
 * Unknown properties pass through unchanged.
 */
export function expandShorthand(attrs: Record<string, string>): Record<string, string> {
  const result: Record<string, string> = {};

  for (const [key, value] of Object.entries(attrs)) {
    const expanded = expandProperty(key, value);
    if (expanded) {
      Object.assign(result, expanded);
    } else {
      result[key] = value;
    }
  }

  return result;
}

function splitValues(value: string): string[] {
  return value.trim().split(/\s+/);
}

function expand4Sides(
  prefix: string,
  value: string,
  sides: [string, string, string, string],
): Record<string, string> {
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

function expandProperty(prop: string, value: string): Record<string, string> | null {
  switch (prop) {
    case 'padding':
      return expand4Sides('padding', value, [
        'padding-top', 'padding-right', 'padding-bottom', 'padding-left',
      ]);
    case 'margin':
      return expand4Sides('margin', value, [
        'margin-top', 'margin-right', 'margin-bottom', 'margin-left',
      ]);
    case 'border-radius':
      return expand4Sides('border-radius', value, [
        'border-top-left-radius', 'border-top-right-radius',
        'border-bottom-right-radius', 'border-bottom-left-radius',
      ]);
    case 'border':
    case 'border-top':
    case 'border-right':
    case 'border-bottom':
    case 'border-left': {
      const parts = splitValues(value);
      const prefix = prop === 'border' ? 'border' : prop;
      const res: Record<string, string> = {};
      // CSS border shorthand: <width> <style> <color>
      if (parts[0]) res[`${prefix}-width`] = parts[0];
      if (parts[1]) res[`${prefix}-style`] = parts[1];
      if (parts[2]) res[`${prefix}-color`] = parts.slice(2).join(' ');
      return Object.keys(res).length ? res : null;
    }
    default:
      return null;
  }
};