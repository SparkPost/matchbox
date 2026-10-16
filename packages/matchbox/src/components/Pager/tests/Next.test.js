import React from 'react';
import { render, fireEvent } from 'test-utils';
import Next from '../Next';

describe('Pager.Next', () => {
  it('renders screen reader text', () => {
    const wrapper = render(<Next />).container;
    expect(wrapper.querySelector('span').textContent).toEqual('Next');
  });

  it('renders disabled button', () => {
    const wrapper = render(<Next disabled />).container;
    expect(wrapper.querySelector('button')).toBeDisabled();
  });

  it('calls click handler', () => {
    const handleClick = jest.fn();
    const wrapper = render(<Next onClick={handleClick} />).container;
    fireEvent.click(wrapper.querySelector('button'));
    expect(handleClick).toHaveBeenCalled();
  });
});
