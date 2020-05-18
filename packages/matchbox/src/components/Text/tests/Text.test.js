import React from 'react';
import Text from '../Text';
import { tokens } from '@sparkpost/design-tokens';
import 'jest-styled-components';

describe('Text', () => {
  it('it should render correctly', () => {
    const wrapper = global.renderStyled(<Text id="text-id">Text</Text>);
    expect(wrapper).toMatchSnapshot();
  });

  it('it should truncate', () => {
    const wrapper = global.renderStyled(<Text truncate>Text</Text>);
    expect(wrapper).toMatchSnapshot();
  });

  describe('looksLike renders correctly', () => {
    it('it should render visually as the looksLike prop while html should match the as prop ', () => {
      const wrapper = global.mountStyled(
        <Text as="h3" looksLike="h1">
          Text
        </Text>,
      );
      expect(wrapper).toHaveStyleRule('font-size', tokens.fontSize_700);
    });
  });
});
