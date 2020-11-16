import React from 'react';
import Group from '../Group';
import 'jest-styled-components';

describe('Checkbox Group', () => {
  const subject = props => global.mountStyled(<Group {...props}>children</Group>);

  it('renders a legend correctly', () => {
    const wrapper = subject({ label: 'test-label' });
    expect(
      wrapper
        .find('legend')
        .find('span')
        .at(0)
        .text(),
    ).toEqual('test-label');
  });

  it('renders optional label correctly', () => {
    const wrapper = subject({ label: 'test-label', optional: true });
    expect(
      wrapper
        .find('legend')
        .find('span')
        .at(1)
        .find('span')
        .at(0)
        .text(),
    ).toEqual('Optional');
  });

  it('renders a legend while hidden correctly', () => {
    const wrapper = subject({ label: 'test-label', labelHidden: true });
    expect(wrapper.find('legend').text()).toEqual('test-label');
  });

  it('renders with system props', () => {
    const wrapper = subject({ label: 'label', mb: '500' });
    expect(wrapper).toHaveStyleRule('margin-bottom', '1.5rem');
  });
});
