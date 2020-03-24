import React from 'react';
import Group from '../Group';
import 'jest-styled-components';

describe('Checkbox Group', () => {
  const subject = props => global.mountStyled(<Group {...props}>children</Group>);

  it('renders a legend correctly', () => {
    const wrapper = subject({ label: 'test-label' });
    expect(wrapper.find('legend').text()).toEqual('test-label');
  });

  it('renders a legend with required correctly', () => {
    const wrapper = subject({ label: 'test-label', required: true });
    expect(wrapper.find('legend').text()).toEqual('test-label*');
  });

  it('renders a legend with required correctly while hidden correctly', () => {
    const wrapper = subject({ label: 'test-label', required: true, labelHidden: true });
    expect(wrapper.find('legend').text()).toEqual('test-label');
  });

  it('renders with system props', () => {
    const wrapper = subject({ mb: '500' });
    expect(wrapper).toHaveStyleRule('margin-bottom', '1.5rem');
  });
});
