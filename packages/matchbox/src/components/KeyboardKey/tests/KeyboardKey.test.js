import React from 'react';
import KeyboardKey from '../KeyboardKey';

describe('KeyboardKey', () => {
  const subject = props => global.mountStyled(<KeyboardKey {...props}>Ctrl</KeyboardKey>);

  it('should render children correctly', () => {
    const wrapper = subject();
    expect(wrapper.text()).toBe('Ctrl');
  });
});
