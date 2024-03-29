import React from 'react';
import Text from '../Text';
import { tokens } from '@sparkpost/design-tokens';

describe('Text', () => {
  it('it should render correctly', () => {
    const wrapper = global.renderStyled(<Text id="text-id">Text</Text>);
    expect(wrapper).toMatchSnapshot();
  });

  it('it should truncate', () => {
    const wrapper = global.renderStyled(<Text truncate>Text</Text>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render data-id', () => {
    const wrapper = global.mountStyled(<Text data-id="test-id">Text</Text>);
    expect(wrapper.find('[data-id="test-id"]')).toExist();
  });

  describe('lookslike renders correctly', () => {
    it('it should render visually as the lookslike prop while html should match the as prop ', () => {
      const wrapper = global.mountStyled(
        <div>
          <Text as="h1" looksLike="h2">
            Text
          </Text>
          <Text as="h2" looksLike="h5">
            Text
          </Text>
          <Text as="h3" looksLike="h1">
            Text
          </Text>
          <Text as="h4" looksLike="h6">
            Text
          </Text>
          <Text as="h5" looksLike="h3">
            Text
          </Text>
          <Text as="h6" looksLike="h4">
            Text
          </Text>
          <Text as="p" looksLike="h1">
            Text
          </Text>
        </div>,
      );
      expect(wrapper.find('h1')).toHaveStyleRule('font-size', tokens.fontSize_600);
      expect(wrapper.find('h2')).toHaveStyleRule('font-size', tokens.fontSize_300);
      expect(wrapper.find('h3')).toHaveStyleRule('font-size', tokens.fontSize_700);
      expect(wrapper.find('h4')).toHaveStyleRule('font-size', tokens.fontSize_200);
      expect(wrapper.find('h5')).toHaveStyleRule('font-size', tokens.fontSize_500);
      expect(wrapper.find('h6')).toHaveStyleRule('font-size', tokens.fontSize_400);
      expect(wrapper.find('p')).toHaveStyleRule('font-size', tokens.fontSize_700);
    });
  });
});
