import React from 'react';
import Drawer from '../Drawer';
import 'jest-styled-components';

describe('Drawer Content', () => {
  const subject = props =>
    global.mountStyled(<Drawer.Content {...props}>test content</Drawer.Content>);

  it('should render content with default padding', () => {
    const wrapper = subject();
    expect(wrapper.text()).toEqual('test content');
    expect(wrapper.find('div')).toHaveStyleRule('padding', '1.5rem');
  });

  it('should handle padding props', () => {
    const wrapper = subject({ p: '300' });
    expect(wrapper.find('div')).toHaveStyleRule('padding', '0.5rem');
  });
});
