import React from 'react';
import Toggle from '../Toggle';
import { render, within } from 'test-utils';
import { tokens } from '@sparkpost/design-tokens';
import { StyledOutline } from '../styles';

describe('Toggle', () => {
  let wrapper;

  let subject = props => global.mountStyled(<Toggle id="id" {...props} />);

  it('renders base styles', () => {
    wrapper = subject();
    expect(wrapper).toHaveStyleRule('height', '1.25rem');
    expect(wrapper).toHaveStyleRule('width', '2.25rem');
    expect(wrapper.find('span').at(0)).toHaveStyleRule('background', tokens.color_gray_700);
    expect(wrapper.find('span').at(1)).toHaveStyleRule('transform', 'translate(0,0)');
  });

  it('renders default checked styles', () => {
    wrapper = subject({ checked: true, onChange: jest.fn() });
    expect(wrapper.find('input')).toHaveStyleRule('background', tokens.color_green_800, {
      modifier: `:checked ~ ${StyledOutline}`,
    });
    expect(wrapper.find('span').at(1)).toHaveStyleRule('transform', 'translate(1rem,0)');
    expect(wrapper.find('input')).toHaveAttributeValue('checked', '');
  });

  it('renders default disabled styles', () => {
    wrapper = subject({ disabled: true });
    expect(wrapper).toHaveStyleRule('opacity', '0.6');
    expect(wrapper.find('input')).toHaveAttributeValue('disabled', '');
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

  it('renders label', () => {
    wrapper = subject({ label: 'test label' });
    expect(wrapper.text()).toEqual('test label');
  });

  it('renders attributes on the input correctly', () => {
    const { getByTestId } = render(<Toggle data-id="test" data-testattribute="test" id="id" />);
    expect(getByTestId('test')).toBeTruthy();
    expect(within(document.querySelector('input#id'))).toBeTruthy();
    expect(within(document.querySelector('input[data-testattribute="test"]'))).toBeTruthy();
  });
});
