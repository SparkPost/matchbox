import React from 'react';
import Drawer from '../Drawer';

describe('Drawer Header', () => {
  const subject = props => global.mountStyled(<Drawer.Header {...props}>test title</Drawer.Header>);

  it('should render a title with a screen reader close button', () => {
    const wrapper = subject();
    expect(wrapper.text()).toEqual('test titleClose');
  });

  it('should be able to hide the close button', () => {
    const wrapper = subject({ showCloseButton: false });
    expect(wrapper.find('button')).not.toExist();
    expect(wrapper.text()).toEqual('test title');
  });
});
