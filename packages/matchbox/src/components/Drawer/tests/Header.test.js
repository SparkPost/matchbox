import React from 'react';
import Drawer from '../Drawer';
import 'jest-styled-components';

describe('Drawer Header', () => {
  const subject = props => global.mountStyled(<Drawer.Header {...props}>test title</Drawer.Header>);

  it('should render a title with a screen reader close button', () => {
    const wrapper = subject();
    expect(wrapper.text()).toEqual('test titleClose');
  });

  it('should handle clicking on close button', () => {
    const onClose = jest.fn();
    const wrapper = subject({ onClose });
    wrapper.find('button').simulate('click');
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('should be able to hide the close button', () => {
    const wrapper = subject({ showCloseButton: false });
    expect(wrapper.find('button')).not.toExist();
    expect(wrapper.text()).toEqual('test title');
  });
});
