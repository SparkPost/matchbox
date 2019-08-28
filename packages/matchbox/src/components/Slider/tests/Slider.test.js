import React from 'react';
import Slider from '../Slider';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import * as geometry from '../../../helpers/geometry';

const windowEvents = {};
global.addEventListener = jest.fn((event, cb) => {
  windowEvents[event] = cb;
});

global.removeEventListener = jest.fn((event, cb) => {
  delete windowEvents[event];
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

  it('should render a default value and id', () => {
    const slider = subject({ defaultValue: 50, id: 'test-id' });
    expect(slider.find('.Track')).toHaveAttributeValue('style', { width: '100px' });
    expect(slider.find('.Handle')).toHaveAttributeValue('style', { left: '100px' });
    expect(slider.find('.Handle')).toHaveAttributeValue('id', 'test-id');
  });

  it('should handle a provided value', () => {
    const slider = subject({ value: 50, onChange });
    expect(slider.find('.Track')).toHaveAttributeValue('style', { width: '100px' });
    expect(slider.find('.Handle')).toHaveAttributeValue('style', { left: '100px' });
    expect(slider.find('.Handle')).toHaveAttributeValue('aria-valuenow', '50');
    expect(onChange).toHaveBeenCalledWith(50);
  });

  it('should handle a mouse down', () => {
    const slider = subject({ value: 50, onChange });
    slider.find('.Slider').simulate('mouseDown', {
      pageX: 25,
      button: 0
    });
    expect(slider.find('.Track')).toHaveAttributeValue('style', { width: '26px' });
    expect(slider.find('.Handle')).toHaveAttributeValue('style', { left: '26px' });
    expect(onChange).toHaveBeenCalledWith(13);
  });

  it('should handle a mouse drag chain of events', () => {
    const slider = subject({ value: 50, onChange });
    slider.find('.Slider').simulate('mouseDown', { pageX: 0, button: 0 });

    act(() => {
      windowEvents.mousemove({ pageX: 150 });
    });

    slider.update();
    expect(slider.find('.Track')).toHaveAttributeValue('style', { width: '150px' });
    expect(slider.find('.Handle')).toHaveAttributeValue('style', { left: '150px' });
    expect(onChange).toHaveBeenCalledWith(75);

    act(() => {
      windowEvents.mouseup();
    });

    slider.update();
    expect(windowEvents.mousemove).toBe(undefined);
    expect(windowEvents.mouseup).toBe(undefined);
  });

  it('should handle a touch start', () => {
    const slider = subject({ value: 50, onChange });
    slider.find('.Slider').simulate('touchStart', {
      touches: [{ pageX: 25 }]
    });
    expect(slider.find('.Track')).toHaveAttributeValue('style', { width: '26px' });
    expect(slider.find('.Handle')).toHaveAttributeValue('style', { left: '26px' });
    expect(onChange).toHaveBeenCalledWith(13);
  });

  describe('key events', () => {

    it('should handle a increment', () => {
      const slider = subject({ value: 50, onChange });
      slider.find('.Handle').simulate('keyDown', {
        key: 'ArrowUp',
        shiftKey: false
      });
      expect(slider.find('.Track')).toHaveAttributeValue('style', { width: '102px' });
      expect(slider.find('.Handle')).toHaveAttributeValue('style', { left: '102px' });
      expect(onChange).toHaveBeenCalledWith(51);

      slider.find('.Handle').simulate('keyDown', {
        key: 'ArrowRight',
        shiftKey: false
      });
      expect(slider.find('.Track')).toHaveAttributeValue('style', { width: '104px' });
      expect(slider.find('.Handle')).toHaveAttributeValue('style', { left: '104px' });
      expect(onChange).toHaveBeenCalledWith(52);
    });

    it('should handle a decrement with a precision value to the tenth', () => {
      const slider = subject({ value: 50, onChange, precision: 1 });
      slider.find('.Handle').simulate('keyDown', {
        key: 'ArrowDown',
        shiftKey: false
      });
      expect(slider.find('.Track')).toHaveAttributeValue('style', { width: '99.8px' });
      expect(slider.find('.Handle')).toHaveAttributeValue('style', { left: '99.8px' });
      expect(onChange).toHaveBeenCalledWith(49.9);

      slider.find('.Handle').simulate('keyDown', {
        key: 'ArrowLeft',
        shiftKey: false
      });
      expect(slider.find('.Track')).toHaveAttributeValue('style', { width: '99.6px' });
      expect(slider.find('.Handle')).toHaveAttributeValue('style', { left: '99.6px' });
      expect(onChange).toHaveBeenCalledWith(49.8);
    });

    it('should handle home and end key events', () => {
      const slider = subject({ value: 50, onChange });
      slider.find('.Handle').simulate('keyDown', {
        key: 'Home',
        shiftKey: false
      });
      expect(slider.find('.Track')).toHaveAttributeValue('style', { width: '0px' });
      expect(slider.find('.Handle')).toHaveAttributeValue('style', { left: '0px' });
      expect(onChange).toHaveBeenCalledWith(0);

      slider.find('.Handle').simulate('keyDown', {
        key: 'End',
        shiftKey: false
      });
      expect(slider.find('.Track')).toHaveAttributeValue('style', { width: '200px' });
      expect(slider.find('.Handle')).toHaveAttributeValue('style', { left: '200px' });
      expect(onChange).toHaveBeenCalledWith(100);
    });
  });

  describe('disabled', () => {
    it('should render disabled', () => {
      const slider = subject({ value: 50, disabled: true });
      expect(slider.find('.Slider')).toHaveAttributeValue('class', 'Slider Disabled');
      expect(slider.find('.Handle')).toHaveAttributeValue('aria-disabled', 'true');
    });

    it('should not move when disabled', () => {
      const slider = subject({ value: 50, onChange, disabled: true });
      slider.find('.Handle').simulate('keyDown', { key: 'Home', shiftKey: false });
      slider.find('.Slider').simulate('touchStart', { touches: [{ pageX: 25 }]});
      slider.find('.Slider').simulate('mouseDown', { pageX: 25, button: 0 });
      expect(onChange).toHaveBeenCalledTimes(1);
    });
  });

  describe('ticks', () => {
    it('should render ticks', () => {
      const slider = subject({ value: 50, ticks: { 25: 'test tick', 55: 'not included tick' }});
      expect(slider.find('.Tick')).toMatchSnapshot();
    });
  });
});
