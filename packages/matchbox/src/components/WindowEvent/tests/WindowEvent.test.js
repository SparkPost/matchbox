import React from 'react';
import { render } from 'test-utils';
import WindowEvent from '../WindowEvent';

global.addEventListener = jest.fn();
global.removeEventListener = jest.fn();

describe('WindowEvent', () => {
  let wrapper;
  const handler = jest.fn();

  const subject = () => render(<WindowEvent event="scroll" handler={handler} />);

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('renders nothing', () => {
    wrapper = subject();
    expect(wrapper.container).toBeEmptyDOMElement();
  });

  it('adds event listener on mount', () => {
    wrapper = subject();
    expect(global.addEventListener).toHaveBeenCalledWith('scroll', handler);
  });

  it('removes event listener on unmount', () => {
    wrapper = subject();
    wrapper.unmount();
    expect(global.removeEventListener).toHaveBeenCalledWith('scroll', handler);
  });

  it('adds and removes event listeners on update', () => {
    wrapper = subject();
    jest.resetAllMocks(); // clears count of events on mount
    wrapper.rerender(<WindowEvent event="resize" handler={handler} />);
    expect(global.addEventListener).toHaveBeenCalledWith('resize', handler);
  });
});
