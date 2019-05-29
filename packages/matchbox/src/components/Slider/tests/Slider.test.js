import React from 'react';
import Slider from '../Slider';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import * as geometry from '../../../helpers/geometry';

const map = {};
global.addEventListener = jest.fn((event, cb) => {
  map[event] = cb;
});

global.removeEventListener = jest.fn((event, cb) => {
  delete map[event];
});

describe('Slider component', () => {
  let onChange;

  beforeEach(() => {
    onChange = jest.fn();
    geometry.getRectFor = jest.fn(() => ({
      left: 0, right: 0, width: 200
    }));
  });
  const subject = (props = {}) => mount(<Slider {...props}/>);

  it('should render default state correctly', () => {
    expect(subject()).toMatchSnapshot();
  });

  it('should render a default value', () => {
    const slider = subject({ defaultValue: 50 });
    expect(slider.find('.Track').prop('style').width).toBe(100);
    expect(slider.find('.Handle').prop('style').left).toBe(100);
  });

  it('should handle a provided value', () => {
    const slider = subject({ value: 50, onChange });
    expect(slider.find('.Track').prop('style').width).toBe(100);
    expect(slider.find('.Handle').prop('style').left).toBe(100);
    expect(onChange).toHaveBeenCalledWith(50);
  });

  it('should handle a mouse down', () => {
    const slider = subject({ value: 50, onChange });
    slider.find('.Slider').simulate('mouseDown', {
      pageX: 25,
      button: 0
    });
    expect(slider.find('.Track').prop('style').width).toBe(26);
    expect(slider.find('.Handle').prop('style').left).toBe(26);
    expect(onChange).toHaveBeenCalledWith(13);
  });

  it('should handle a mouse drag chain of events', () => {
    const slider = subject({ value: 50, onChange });
    slider.find('.Slider').simulate('mouseDown', { pageX: 0, button: 0 });

    act(() => {
      map.mousemove({ pageX: 150 });
    });

    slider.update();
    expect(slider.find('.Track').prop('style').width).toBe(150);
    expect(slider.find('.Handle').prop('style').left).toBe(150);
    expect(onChange).toHaveBeenCalledWith(75);

    act(() => {
      map.mouseup();
    });

    slider.update();
    expect(map.mousemove).toBe(undefined);
    expect(map.mouseup).toBe(undefined);
  });

  it('should handle a touch start', () => {
    const slider = subject({ value: 50, onChange });
    slider.find('.Slider').simulate('touchStart', {
      touches: [{ pageX: 25 }]
    });
    expect(slider.find('.Track').prop('style').width).toBe(26);
    expect(slider.find('.Handle').prop('style').left).toBe(26);
    expect(onChange).toHaveBeenCalledWith(13);
  });

  describe('key events', () => {

    it('should handle a increment', () => {
      const slider = subject({ value: 50, onChange });
      slider.find('.Handle').simulate('keyDown', {
        key: 'ArrowUp',
        shiftKey: false
      });
      expect(slider.find('.Track').prop('style').width).toBe(102);
      expect(slider.find('.Handle').prop('style').left).toBe(102);
      expect(onChange).toHaveBeenCalledWith(51);

      slider.find('.Handle').simulate('keyDown', {
        key: 'ArrowRight',
        shiftKey: false
      });
      expect(slider.find('.Track').prop('style').width).toBe(104);
      expect(slider.find('.Handle').prop('style').left).toBe(104);
      expect(onChange).toHaveBeenCalledWith(52);
    });

    it('should handle a decrement with a precision value to the tenth', () => {
      const slider = subject({ value: 50, onChange, precision: 1 });
      slider.find('.Handle').simulate('keyDown', {
        key: 'ArrowDown',
        shiftKey: false
      });
      expect(slider.find('.Track').prop('style').width).toBe(99.8);
      expect(slider.find('.Handle').prop('style').left).toBe(99.8);
      expect(onChange).toHaveBeenCalledWith(49.9);

      slider.find('.Handle').simulate('keyDown', {
        key: 'ArrowLeft',
        shiftKey: false
      });
      expect(slider.find('.Track').prop('style').width).toBe(99.6);
      expect(slider.find('.Handle').prop('style').left).toBe(99.6);
      expect(onChange).toHaveBeenCalledWith(49.8);
    });

    it('should handle home and end key events', () => {
      const slider = subject({ value: 50, onChange });
      slider.find('.Handle').simulate('keyDown', {
        key: 'Home',
        shiftKey: false
      });
      expect(slider.find('.Track').prop('style').width).toBe(0);
      expect(slider.find('.Handle').prop('style').left).toBe(0);
      expect(onChange).toHaveBeenCalledWith(0);

      slider.find('.Handle').simulate('keyDown', {
        key: 'End',
        shiftKey: false
      });
      expect(slider.find('.Track').prop('style').width).toBe(200);
      expect(slider.find('.Handle').prop('style').left).toBe(200);
      expect(onChange).toHaveBeenCalledWith(100);
    });
  });

  describe('disabled', () => {
    it('should render disabled', () => {
      const slider = subject({ value: 50, disabled: true });
      expect(slider.find('.Slider').prop('className')).toMatch('Disabled');
      expect(slider.find('.Handle').prop('aria-disabled')).toBe(true);
    });

    it('should not move when disabled', () => {
      const slider = subject({ value: 50, onChange, disabled: true });
      slider.find('.Handle').simulate('keyDown', { key: 'Home', shiftKey: false });
      slider.find('.Slider').simulate('touchStart', { touches: [{ pageX: 25 }]});
      slider.find('.Slider').simulate('mouseDown', { pageX: 25, button: 0 });
      expect(onChange).toHaveBeenCalledTimes(1);
    });
  });
});
