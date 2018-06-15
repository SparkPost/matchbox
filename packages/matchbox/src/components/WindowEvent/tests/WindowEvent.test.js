import React from 'react';
import WindowEvent from '../WindowEvent';
import { shallow } from 'enzyme';

global.addEventListener = jest.fn();
global.removeEventListener = jest.fn();

describe('WindowEvent', () => {
  let wrapper;
  const handler = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<WindowEvent event='scroll' handler={handler}/>);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('renders nothing', () => {
    expect(wrapper.html()).toEqual(null);
  });

  it('adds event listener on mount', () => {
    expect(global.addEventListener).toHaveBeenCalledTimes(1);
    expect(global.addEventListener).toHaveBeenCalledWith('scroll', handler);
  });

  it('removes event listener on unmount', () => {
    wrapper.unmount();
    expect(global.removeEventListener).toHaveBeenCalledTimes(1);
    expect(global.removeEventListener).toHaveBeenCalledWith('scroll', handler);
  });

  it('adds and removes event listeners on update', () => {
    jest.resetAllMocks(); // clears count of events on mount
    wrapper.setProps({ event: 'resize' });
    expect(global.removeEventListener).toHaveBeenCalledTimes(1);
    expect(global.removeEventListener).toHaveBeenCalledWith('scroll', handler);
    expect(global.addEventListener).toHaveBeenCalledTimes(1);
    expect(global.addEventListener).toHaveBeenCalledWith('resize', handler);
  });
});
