import { expandShorthand } from '../../src/components/utils';

describe('expandShorthand', () => {
  describe('padding', () => {
    it('expands single value', () => {
      expect(expandShorthand({ padding: '10px' })).toEqual({
        'padding-top': '10px',
        'padding-right': '10px',
        'padding-bottom': '10px',
        'padding-left': '10px',
      });
    });

    it('expands two values (vertical horizontal)', () => {
      expect(expandShorthand({ padding: '10px 20px' })).toEqual({
        'padding-top': '10px',
        'padding-right': '20px',
        'padding-bottom': '10px',
        'padding-left': '20px',
      });
    });

    it('expands three values (top horizontal bottom)', () => {
      expect(expandShorthand({ padding: '10px 20px 30px' })).toEqual({
        'padding-top': '10px',
        'padding-right': '20px',
        'padding-bottom': '30px',
        'padding-left': '20px',
      });
    });

    it('expands four values', () => {
      expect(expandShorthand({ padding: '10px 20px 30px 40px' })).toEqual({
        'padding-top': '10px',
        'padding-right': '20px',
        'padding-bottom': '30px',
        'padding-left': '40px',
      });
    });
  });

  describe('margin', () => {
    it('expands single value', () => {
      expect(expandShorthand({ margin: '5px' })).toEqual({
        'margin-top': '5px',
        'margin-right': '5px',
        'margin-bottom': '5px',
        'margin-left': '5px',
      });
    });

    it('expands two values', () => {
      expect(expandShorthand({ margin: '0 auto' })).toEqual({
        'margin-top': '0',
        'margin-right': 'auto',
        'margin-bottom': '0',
        'margin-left': 'auto',
      });
    });
  });

  describe('border-radius', () => {
    it('expands single value', () => {
      expect(expandShorthand({ 'border-radius': '8px' })).toEqual({
        'border-top-left-radius': '8px',
        'border-top-right-radius': '8px',
        'border-bottom-right-radius': '8px',
        'border-bottom-left-radius': '8px',
      });
    });

    it('expands four values', () => {
      expect(expandShorthand({ 'border-radius': '1px 2px 3px 4px' })).toEqual({
        'border-top-left-radius': '1px',
        'border-top-right-radius': '2px',
        'border-bottom-right-radius': '3px',
        'border-bottom-left-radius': '4px',
      });
    });
  });

  describe('border', () => {
    it('expands border shorthand', () => {
      expect(expandShorthand({ border: '1px solid red' })).toEqual({
        'border-width': '1px',
        'border-style': 'solid',
        'border-color': 'red',
      });
    });

    it('expands border-top shorthand', () => {
      expect(expandShorthand({ 'border-top': '2px dashed #333' })).toEqual({
        'border-top-width': '2px',
        'border-top-style': 'dashed',
        'border-top-color': '#333',
      });
    });
  });

  describe('passthrough', () => {
    it('passes non-shorthand properties unchanged', () => {
      expect(expandShorthand({ color: 'red', 'font-size': '14px' })).toEqual({
        color: 'red',
        'font-size': '14px',
      });
    });
  });

  describe('priority merge (expand then spread)', () => {
    it('explicit shorthand padding overrides head longhand defaults', () => {
      // style-default has longhand paddings
      const styleDefault = expandShorthand({
        'padding-top': '20px',
        'padding-bottom': '20px',
        'padding-left': '0px',
        'padding-right': '0px',
        'text-align': 'center',
      });

      // mj-attributes adds shorthand padding: 0
      const headDefaults = expandShorthand({
        'font-family': 'Inter, Arial, sans-serif',
        'padding': '0',
      });

      // explicit attrs has shorthand padding
      const explicitAttrs = expandShorthand({
        'padding': '30px 24px 18px 24px',
        'background-color': '#ffffff',
      });

      const merged = { ...styleDefault, ...headDefaults, ...explicitAttrs };

      expect(merged).toEqual({
        'text-align': 'center',
        'font-family': 'Inter, Arial, sans-serif',
        'padding-top': '30px',
        'padding-right': '24px',
        'padding-bottom': '18px',
        'padding-left': '24px',
        'background-color': '#ffffff',
      });
    });

    it('explicit longhand overrides head shorthand', () => {
      const headDefaults = expandShorthand({ padding: '0' });
      const explicitAttrs = expandShorthand({ 'padding-top': '50px' });

      const merged = { ...headDefaults, ...explicitAttrs };

      // padding-top from explicit wins over the one expanded from head shorthand
      expect(merged['padding-top']).toBe('50px');
      // other sides remain from head
      expect(merged['padding-right']).toBe('0');
      expect(merged['padding-bottom']).toBe('0');
      expect(merged['padding-left']).toBe('0');
    });
  });
});
