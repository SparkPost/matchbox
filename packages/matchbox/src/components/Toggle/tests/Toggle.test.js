import React from 'react';
import Toggle from '../Toggle';
import { tokens } from '@sparkpost/design-tokens';
import 'jest-styled-components';

describe('Toggle', () => {
  let wrapper;

  let subject = props => global.mountStyled(<Toggle data-id="toggle-input" id="id" {...props} />);

  it('renders base styles', () => {
    wrapper = subject();
    expect(wrapper).toHaveStyleRule('height', '20px');
    expect(wrapper).toHaveStyleRule('width', '36px');
    expect(wrapper.find('span').at(0)).toHaveStyleRule('background', tokens.color_gray_400);
    expect(wrapper.find('span').at(3)).toHaveStyleRule('transform', 'translate(0,0)');
  });

  it('renders default checked styles', () => {
    wrapper = subject({ checked: true });
    expect(wrapper.find('span').at(0)).toHaveStyleRule('background', tokens.color_green_600);
    expect(wrapper.find('span').at(3)).toHaveStyleRule('transform', 'translate(1rem,0)');
  });

  it('renders default disabled styles', () => {
    wrapper = subject({ disabled: true });
    expect(wrapper).toHaveStyleRule('opacity', '0.9');
  });

  it('invokes events', () => {
    const action = { onChange: jest.fn(), onFocus: jest.fn(), onBlur: jest.fn() };
    wrapper = subject(action);
    wrapper.find('input').simulate('change', { target: { checked: true } });
    wrapper.find('input').simulate('focus');
    wrapper.find('input').simulate('blur');
    expect(action.onChange).toHaveBeenCalledTimes(1);
    expect(action.onFocus).toHaveBeenCalledTimes(1);
    expect(action.onBlur).toHaveBeenCalledTimes(1);
  });
});
