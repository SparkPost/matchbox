import React from 'react';
import { render } from 'test-utils';
import Drawer from '../Drawer';

describe('Drawer Header', () => {
  const subject = (props) => render(<Drawer.Header {...props}>test title</Drawer.Header>).container;

  it('should render a title with a screen reader close button', () => {
    const wrapper = subject();
    expect(wrapper.textContent).toEqual('test titleClose');
  });

  it('should be able to hide the close button', () => {
    const wrapper = subject({ showCloseButton: false });
    expect(wrapper.querySelector('button')).not.toBeInTheDocument();
    expect(wrapper.textContent).toEqual('test title');
  });
});
