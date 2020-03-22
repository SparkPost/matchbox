import React from 'react';
import 'jest-styled-components';
import { mount } from 'enzyme';
import ScreenReaderOnly from '../ScreenReaderOnly';

describe('ScreenReaderOnly', () => {
  it('renders with passed in children', () => {
    const wrapper = mount(<ScreenReaderOnly>Children!</ScreenReaderOnly>);

    expect(wrapper).toHaveText('Children!');
  });

  it('renders with necessary style rules', () => {
    const wrapper = global.mountStyled(<ScreenReaderOnly>Children!</ScreenReaderOnly>);

    expect(wrapper).toHaveStyleRule('border', '0 !important');
    expect(wrapper).toHaveStyleRule('clip', 'rect(1px,1px,1px,1px) !important');
    expect(wrapper).toHaveStyleRule('clip-path', 'inset(50%) !important');
    expect(wrapper).toHaveStyleRule('height', '1px !important');
    expect(wrapper).toHaveStyleRule('margin', '-1px !important');
    expect(wrapper).toHaveStyleRule('overflow', 'hidden !important');
    expect(wrapper).toHaveStyleRule('padding', '0 !important');
    expect(wrapper).toHaveStyleRule('position', 'absolute !important');
    expect(wrapper).toHaveStyleRule('width', '1px !important');
    expect(wrapper).toHaveStyleRule('word-wrap', 'normal !important');
  });
});
