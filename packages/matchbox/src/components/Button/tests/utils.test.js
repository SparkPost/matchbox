import React from 'react';
import { buttonFrom, buttonsFrom, getLoaderColor } from '../utils';

describe('Button Utils', () => {
  describe('buttonFrom', () => {
    it('renders correctly', () => {
      expect(
        buttonFrom({ content: <span>button content</span>, disabled: false }),
      ).toMatchSnapshot();
    });

    it('passes any custom overrides', () => {
      expect(
        buttonFrom({ content: <span>button content</span> }, { foo: 'bar', type: 'submit' }),
      ).toMatchSnapshot();
    });
  });

  describe('buttonsFrom', () => {
    it('renders correctly', () => {
      const actions = [
        { content: <span>button 1 content</span>, action: { content: <span>foo</span> } },
        { content: <span>button 2 content</span>, action: {} },
      ];

      expect(buttonsFrom(actions)).toMatchSnapshot();
    });

    it('returns nothing without actions', () => {
      const actions = [];
      expect(buttonsFrom(actions)).toBe(undefined);
    });
  });

  describe('getLoaderColor', () => {
    it('returns gray for a default button', () => {
      expect(getLoaderColor()).toEqual('white');
    });

    it('returns white if variant is filled', () => {
      expect(getLoaderColor({ variant: 'filled' })).toEqual('white');
      expect(getLoaderColor({ variant: 'filled', color: 'blue' })).toEqual('white');
      expect(getLoaderColor({ variant: 'filled', color: 'gray' })).toEqual('white');
      expect(getLoaderColor({ variant: 'filled', color: 'red' })).toEqual('white');
    });

    it('returns white if variant is not filled and color is white', () => {
      expect(getLoaderColor({ variant: 'outline', color: 'white' })).toEqual('white');
      expect(getLoaderColor({ variant: 'mutedOutline', color: 'white' })).toEqual('white');
      expect(getLoaderColor({ variant: 'text', color: 'white' })).toEqual('white');
    });

    it('returns gray if variant is filled but color is white', () => {
      expect(getLoaderColor({ variant: 'filled', color: 'white' })).toEqual('gray');
    });

    it('returns blue if variant is outline, mutedOutline, or text for a blue button', () => {
      expect(getLoaderColor({ variant: 'outline', color: 'blue' })).toEqual('blue');
      expect(getLoaderColor({ variant: 'mutedOutline', color: 'blue' })).toEqual('blue');
      expect(getLoaderColor({ variant: 'text', color: 'blue' })).toEqual('blue');
    });

    it('returns gray if variant is outline, mutedOutline, or text for a red and gray buttons', () => {
      expect(getLoaderColor({ variant: 'outline', color: 'red' })).toEqual('gray');
      expect(getLoaderColor({ variant: 'mutedOutline', color: 'red' })).toEqual('gray');
      expect(getLoaderColor({ variant: 'text', color: 'red' })).toEqual('gray');
      expect(getLoaderColor({ variant: 'outline', color: 'gray' })).toEqual('gray');
      expect(getLoaderColor({ variant: 'mutedOutline', color: 'gray' })).toEqual('gray');
      expect(getLoaderColor({ variant: 'text', color: 'gray' })).toEqual('gray');
      expect(getLoaderColor({ variant: 'outline' })).toEqual('gray');
      expect(getLoaderColor({ variant: 'mutedOutline' })).toEqual('gray');
      expect(getLoaderColor({ variant: 'text' })).toEqual('gray');
    });
  });
});
