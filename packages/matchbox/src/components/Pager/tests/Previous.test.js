import React from 'react';
import { render, fireEvent } from 'test-utils';

import Previous from '../Previous';

describe('Pager.Previous', () => {
  it('renders screen reader text', () => {
    const wrapper = render(<Previous />).container;
    expect(wrapper.querySelector('span').textContent).toEqual('Previous');
  });

  it('renders disabled button', () => {
    const wrapper = render(<Previous disabled />).container;
    expect(wrapper.querySelector('button')).toBeDisabled();
  });

  it('calls click handler', () => {
    const handleClick = jest.fn();
    const wrapper = render(<Previous onClick={handleClick} />).container;
    fireEvent.click(wrapper.querySelector('button'));
    expect(handleClick).toHaveBeenCalled();
  });
});
