import React from 'react';
import { tokens } from '@sparkpost/design-tokens';
import 'jest-styled-components';

import Tabs from '../Tabs';

describe('Tabs', () => {
  const defaultprops = {
    tabs: [{ content: 'Tab 1' }, { content: 'Tab 2' }, { content: 'Tab 3', onClick: jest.fn() }],
    selected: 0,
    onSelect: jest.fn(),
  };
  const subject = props => global.mountStyled(<Tabs {...defaultprops} {...props} />);

  it('renders non-fitted styles', () => {
    const wrapper = subject();
    expect(wrapper.find('button').at(0)).toHaveStyleRule('flex', '0');
    expect(wrapper.find('button').at(0)).toHaveStyleRule('margin', '0 1.25rem');
  });

  it('renders fitted styles', () => {
    const wrapper = subject({ fitted: true });
    expect(wrapper.find('button').at(0)).toHaveStyleRule('flex', '1');
    expect(wrapper.find('button').at(0)).toHaveStyleRule('margin', '0 0');
  });

  it('renders with first tab selected', () => {
    const wrapper = subject();
    expect(wrapper.find('button').at(0)).toHaveStyleRule('color', tokens.color_blue_700);
    expect(wrapper.find('button').at(1)).toHaveStyleRule('color', tokens.color_gray_700);
  });

  it('handles clicking a tab', () => {
    const wrapper = subject();
    wrapper
      .find('button')
      .at(2)
      .simulate('click');
    expect(defaultprops.onSelect).toHaveBeenCalledWith(2, 0);
    expect(defaultprops.tabs[2].onClick).toHaveBeenCalledTimes(1);
  });
});
