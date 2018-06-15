import React from 'react';
import { buttonFrom, buttonsFrom } from '../utils';

describe('Button Utils', () => {

  describe('buttonFrom', () => {
    it('renders correctly', () => {
      expect(buttonFrom({ content: <span>button content</span>, disabled: false })).toMatchSnapshot();
    });

    it('passes any custom overrides', () => {
      expect(buttonFrom({ content: <span>button content</span> }, { foo: 'bar', type: 'submit' })).toMatchSnapshot();
    });
  });

  describe('buttonsFrom', () => {
    it('renders correctly', () => {
      const actions = [
        { content: <span>button 1 content</span>, action: { content: <span>foo</span> }},
        { content: <span>button 2 content</span>, action: {}}
      ];

      expect(buttonsFrom(actions)).toMatchSnapshot();
    });

    it('returns nothing without actions', () => {
      const actions = [];
      expect(buttonsFrom(actions)).toBe(undefined);
    });
  });
});
