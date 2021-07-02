import React from 'react';
import Group from '../Group';
import { render } from 'test-utils';

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

  it('renders a legend with required correctly', () => {
    const wrapper = subject({ label: 'test-label', required: true });
    expect(wrapper.find('legend').text()).toEqual('test-label*');
  });

  it('renders a legend with optional correctly', () => {
    const wrapper = subject({ label: 'test-label', optional: true });
    expect(wrapper.find('legend').text()).toEqual('test-labelOptional');
  });

  it('renders a legend with required correctly while hidden correctly', () => {
    const wrapper = subject({ label: 'test-label', required: true, labelHidden: true });
    expect(wrapper.find('legend').text()).toEqual('test-label*');
  });

  it('renders with system props', () => {
    const wrapper = subject({ mb: '500' });
    expect(wrapper).toHaveStyleRule('margin-bottom', '1.5rem');
  });

  it('renders with a attributes', () => {
    const { getByTestId, container } = render(
      <Group data-id="test-id" className="test-class" label="test label">
        children
      </Group>,
    );
    expect(container.firstChild.classList.contains('test-class')).toBe(true);
    expect(getByTestId('test-id')).toBeTruthy();
  });
});
