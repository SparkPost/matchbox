import React from 'react';
import { render } from 'test-utils';
import KeyboardKey from '../KeyboardKey';

describe('KeyboardKey', () => {
  const subject = (props) => render(<KeyboardKey {...props}>Ctrl</KeyboardKey>).container;

  it('should render children correctly', () => {
    const wrapper = subject();
    expect(wrapper.textContent).toBe('Ctrl');
  });
});
