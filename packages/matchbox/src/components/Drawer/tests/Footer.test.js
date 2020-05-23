import React from 'react';
import Drawer from '../Drawer';
import 'jest-styled-components';

describe('Drawer Footer', () => {
  const subject = props =>
    global.mountStyled(<Drawer.Footer {...props}>test footer</Drawer.Footer>);

  it('should render footer content with default padding', () => {
    const wrapper = subject();
    expect(wrapper.text()).toEqual('test footer');
    expect(wrapper.find('div').at(1)).toHaveStyleRule('padding', '1.5rem');
  });

  it('should handle padding props', () => {
    const wrapper = subject({ p: '300' });
    expect(wrapper.find('div').at(1)).toHaveStyleRule('padding', '0.5rem');
  });
});
