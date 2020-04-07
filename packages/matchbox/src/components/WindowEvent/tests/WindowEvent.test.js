import React from 'react';
import WindowEvent from '../WindowEvent';
import { mount } from 'enzyme';

global.addEventListener = jest.fn();
global.removeEventListener = jest.fn();

describe('WindowEvent', () => {
  let wrapper;
  const handler = jest.fn();

  const subject = () => mount(<WindowEvent event="scroll" handler={handler} />);

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('renders nothing', () => {
    wrapper = subject();
    expect(wrapper.html()).toEqual(null);
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
    wrapper.setProps({ event: 'resize' });
    expect(global.addEventListener).toHaveBeenCalledWith('resize', handler);
  });
});
