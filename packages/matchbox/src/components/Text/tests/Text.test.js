import React from 'react';
import Text from '../Text';
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

  describe('cropping', () => {
    it('it should crop when provided a size and line height', () => {
      const wrapper = global.renderStyled(<Text crop fontSize="400" lineHeight="400">Text</Text>);
      expect(wrapper).toMatchSnapshot();
    });

    it('it should not crop with an unsupported size token', () => {
      const wrapper = global.renderStyled(<Text crop fontSize="10px" lineHeight="400">Text</Text>);
      expect(wrapper).toMatchSnapshot();
    });

    it('it should not crop with an unsupported line height token', () => {
      const wrapper = global.renderStyled(<Text crop fontSize="400" lineHeight="10px">Text</Text>);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
