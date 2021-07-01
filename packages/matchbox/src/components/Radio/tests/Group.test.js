import React from 'react';
import Group from '../Group';
import { render } from 'test-utils';

describe('Checkbox Group', () => {
  const subject = props => global.mountStyled(<Group {...props}>children</Group>);

  it('renders a legend correctly', () => {
    const wrapper = subject({ label: 'test-label' });
    expect(wrapper.find('legend').text()).toEqual('test-label');
  });

  it('renders optional label correctly', () => {
    const wrapper = subject({ label: 'test-label', optional: true });
    expect(wrapper.find('legend').text()).toEqual('test-labelOptional');
  });

  it('renders a legend while hidden correctly', () => {
    const wrapper = subject({ label: 'test-label', labelHidden: true });
    expect(wrapper.find('legend').text()).toEqual('test-label');
  });

  it('renders with system props', () => {
    const wrapper = subject({ label: 'label', mb: '500' });
    expect(wrapper).toHaveStyleRule('margin-bottom', '1.5rem');
  });

  it('renders with a required label', () => {
    const { getByText } = render(
      <Group required label="test label">
        children
      </Group>,
    );
    expect(getByText('test label')).toBeTruthy();
    expect(getByText('Required')).toBeTruthy();
  });
});
