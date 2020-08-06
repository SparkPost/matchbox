import React from 'react';
import Checkbox from '../Checkbox';
import { StyledBox } from '../styles';
import 'jest-styled-components';
import { tokens } from '@sparkpost/design-tokens';

describe('Checkbox', () => {
  const events = {
    onChange: jest.fn(),
    onBlur: jest.fn(),
    onFocus: jest.fn(),
  };
  const subject = props => global.mountStyled(<Checkbox id="test-id" {...events} {...props} />);

  it('renders with id', () => {
    const wrapper = subject();
    expect(wrapper.find('input')).toHaveAttributeValue('id', 'test-id');
    expect(wrapper.find('label')).toHaveAttributeValue('for', 'test-id');
  });

  it('renders checked and value', () => {
    const wrapper = subject({ checked: true, value: 'test-value' });
    expect(wrapper.find('input')).toHaveAttributeValue('checked', '');
    expect(wrapper.find('input')).toHaveAttributeValue('value', 'test-value');
    expect(wrapper.find('label')).toHaveStyleRule('cursor', 'pointer');
  });

  it('renders a label', () => {
    const wrapper = subject({ label: 'test-label' });
    expect(wrapper.text()).toEqual('test-label');
  });

  it('renders error', () => {
    const wrapper = subject({ error: 'test-error' });
    expect(wrapper.find(StyledBox)).toHaveStyleRule('border', `2px solid ${tokens.color_red_700}`);
    expect(wrapper.text()).toEqual('test-error');
    expect(wrapper.find('input')).toHaveAttributeValue('aria-describedby', 'test-id-error');
    expect(wrapper.find('div').at(3)).toHaveAttributeValue('id', 'test-id-error');
  });

  it('renders disabled', () => {
    const wrapper = subject({ disabled: true });
    expect(wrapper.find('label')).toHaveStyleRule('cursor', 'not-allowed');
    expect(wrapper.find('input')).toBeDisabled();
  });

  it('renders required', () => {
    const wrapper = subject({ required: true, label: 'test-label' });
    expect(wrapper.text()).toEqual('test-label*');
    expect(wrapper.find('input')).toHaveAttributeValue('required', '');
  });

  it('renders help text', () => {
    const wrapper = subject({ helpText: 'test-help' });
    expect(wrapper.text()).toEqual('test-help');
    expect(wrapper.find('input')).toHaveAttributeValue('aria-describedby', 'test-id-helptext');
    expect(wrapper.find('div').last()).toHaveAttributeValue('id', 'test-id-helptext');
  });

  it('renders with error and helptext describedby', () => {
    const wrapper = subject({ error: 'test-error', helpText: 'test-help' });
    expect(wrapper.find('input')).toHaveAttributeValue(
      'aria-describedby',
      'test-id-helptext test-id-error',
    );
  });

  it('renders with system props', () => {
    const wrapper = subject({ mb: '500' });
    expect(wrapper).toHaveStyleRule('margin-bottom', '1.5rem');
    expect(wrapper.find('input').prop('mb')).toBeUndefined();
  });

  it('should invoke events', () => {
    const wrapper = subject();
    wrapper.find('input').simulate('change');
    wrapper.find('input').simulate('focus');
    wrapper.find('input').simulate('blur');
    expect(events.onChange).toHaveBeenCalled();
    expect(events.onBlur).toHaveBeenCalled();
    expect(events.onFocus).toHaveBeenCalled();
  });
});
