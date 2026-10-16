import React from 'react';
import { render } from 'test-utils';
import Drawer from '../Drawer';

describe('Drawer Footer', () => {
  const subject = (props) =>
    render(<Drawer.Footer {...props}>test footer</Drawer.Footer>).container;

  it('should render footer content with default padding', () => {
    const wrapper = subject();
    expect(wrapper.textContent).toEqual('test footer');
    expect(wrapper.querySelectorAll('div')[1]).toHaveStyleRule('padding', '1.5rem');
  });

  it('should handle padding props', () => {
    const wrapper = subject({ p: '300' });
    expect(wrapper.querySelectorAll('div')[1]).toHaveStyleRule('padding', '0.5rem');
  });
});
