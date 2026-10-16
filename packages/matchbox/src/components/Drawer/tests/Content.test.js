import React from 'react';
import { render } from 'test-utils';
import Drawer from '../Drawer';

describe('Drawer Content', () => {
  const subject = (props) =>
    render(<Drawer.Content {...props}>test content</Drawer.Content>).container;

  it('should render content with default padding', () => {
    const wrapper = subject();
    expect(wrapper.textContent).toEqual('test content');
    expect(wrapper.querySelector('div')).toHaveStyleRule('padding', '1.5rem');
  });

  it('should handle padding props', () => {
    const wrapper = subject({ p: '300' });
    expect(wrapper.querySelector('div')).toHaveStyleRule('padding', '0.5rem');
  });
});
