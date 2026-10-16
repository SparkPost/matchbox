import React from 'react';
import Toggle from '../Toggle';
import { render, within, fireEvent } from 'test-utils';
import { tokens } from '@sparkpost/design-tokens';
import { StyledOutline } from '../styles';

describe('Toggle', () => {
  let wrapper;

  let subject = (props) => render(<Toggle id="id" {...props} />).container;

  it('renders base styles', () => {
    wrapper = subject();
    expect(wrapper.firstChild).toHaveStyleRule('height', '1.25rem');
    expect(wrapper.firstChild).toHaveStyleRule('width', '2.25rem');
    expect(wrapper.querySelectorAll('span')[0]).toHaveStyleRule(
      'background',
      tokens.color_gray_700,
    );
    expect(wrapper.querySelectorAll('span')[1]).toHaveStyleRule('transform', 'translate(0,0)');
  });

  it('renders default checked styles', () => {
    wrapper = subject({ checked: true, onChange: jest.fn() });
    expect(wrapper.querySelector('input')).toHaveStyleRule('background', tokens.color_green_800, {
      modifier: `:checked ~ ${StyledOutline}`,
    });
    expect(wrapper.querySelectorAll('span')[1]).toHaveStyleRule('transform', 'translate(1rem,0)');
    expect(wrapper.querySelector('input')).toHaveAttributeValue('checked', '');
  });

  it('renders default disabled styles', () => {
    wrapper = subject({ disabled: true });
    expect(wrapper.firstChild).toHaveStyleRule('opacity', '0.6');
    expect(wrapper.querySelector('input')).toHaveAttributeValue('disabled', '');
  });

  it('invokes events', () => {
    const action = { onChange: jest.fn(), onFocus: jest.fn(), onBlur: jest.fn() };
    wrapper = subject(action);
    fireEvent.click(wrapper.querySelector('input'));
    fireEvent.focus(wrapper.querySelector('input'));
    fireEvent.blur(wrapper.querySelector('input'));
    expect(action.onChange).toHaveBeenCalledTimes(1);
    expect(action.onFocus).toHaveBeenCalledTimes(1);
    expect(action.onBlur).toHaveBeenCalledTimes(1);
  });

  it('renders label', () => {
    wrapper = subject({ label: 'test label' });
    expect(wrapper.textContent).toEqual('test label');
  });

  it('renders attributes on the input correctly', () => {
    const { getByTestId } = render(<Toggle data-id="test" data-testattribute="test" id="id" />);
    expect(getByTestId('test')).toBeTruthy();
    expect(within(document.querySelector('input#id'))).toBeTruthy();
    expect(within(document.querySelector('input[data-testattribute="test"]'))).toBeTruthy();
  });
});
