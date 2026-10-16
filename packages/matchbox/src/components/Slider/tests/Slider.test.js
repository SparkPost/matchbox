import React from 'react';
import { render, fireEvent, createEvent, act } from 'test-utils';
import Slider from '../Slider';
import { tokens } from '@sparkpost/design-tokens';
import * as geometry from '../../../helpers/geometry';

const windowEvents = {};
global.addEventListener = jest.fn((event, cb) => {
  windowEvents[event] = cb;
});

global.removeEventListener = jest.fn(event => {
  delete windowEvents[event];
});

/**
 * Fires a DOM event with read-only properties, such as pageX or touches, that jsdom does not
 * populate from the event init.
 * @param {Element} element
 * @param {'mouseDown' | 'touchStart'} type
 * @param {Record<string, unknown>} properties
 * @returns {void}
 * @private
 */
function fireWith(element, type, properties) {
  const event = createEvent[type](element, { button: 0 });
  Object.entries(properties).forEach(([key, value]) => {
    Object.defineProperty(event, key, { value });
  });
  fireEvent(element, event);
}

function Track(wrapper) {
  return wrapper.querySelectorAll('div')[2];
}

function Handle(wrapper) {
  return wrapper.querySelectorAll('div')[3];
}

describe('Slider component', () => {
  let onChange;

  beforeEach(() => {
    onChange = jest.fn();
    geometry.getRectFor = jest.fn(() => ({
      left: 0,
      right: 0,
      width: 200,
    }));
  });

  const subject = (props = {}) => render(<Slider {...props} />).container;

  it('should render a default value and id', () => {
    const slider = subject({ defaultValue: 50, id: 'test-id' });
    expect(Track(slider)).toHaveAttributeValue('style', { width: '100px' });
    expect(Handle(slider)).toHaveAttributeValue('style', { left: '100px' });
    expect(Handle(slider)).toHaveAttributeValue('id', 'test-id');
  });

  it('should use min value as a default if defaultValue is not set', () => {
    const slider = subject({ min: 50 });
    expect(Handle(slider)).toHaveAttributeValue('aria-valuenow', '50');
  });

  it('should render an aria-controls attribute ', () => {
    const slider = subject({ 'aria-controls': 'test-id' });
    expect(Handle(slider)).toHaveAttributeValue('aria-controls', 'test-id');
  });

  it('should handle a provided value', () => {
    const slider = subject({ value: 50, onChange });
    expect(Track(slider)).toHaveAttributeValue('style', { width: '100px' });
    expect(Handle(slider)).toHaveAttributeValue('style', { left: '100px' });
    expect(Handle(slider)).toHaveAttributeValue('aria-valuenow', '50');
    expect(onChange).toHaveBeenCalledWith(50);
  });

  it('should handle a provided value with a min and max', () => {
    const slider = subject({ value: 1000, onChange, min: 1000, max: 10000 });
    expect(Track(slider)).toHaveAttributeValue('style', { width: '0px' });
    expect(Handle(slider)).toHaveAttributeValue('style', { left: '0px' });
    expect(Handle(slider)).toHaveAttributeValue('aria-valuenow', '1000');
  });

  it('should handle a mouse down', () => {
    const slider = subject({ value: 50, onChange });
    fireWith(slider.querySelectorAll('div')[0], 'mouseDown', { pageX: 25 });
    expect(Track(slider)).toHaveAttributeValue('style', { width: '26px' });
    expect(Handle(slider)).toHaveAttributeValue('style', { left: '26px' });
    expect(onChange).toHaveBeenCalledWith(13);
  });

  // Flakey test
  it.skip('should handle a mouse drag chain of events', () => {
    const slider = subject({ value: 50, onChange });
    fireWith(slider.querySelectorAll('div')[0], 'mouseDown', { pageX: 0 });

    act(() => {
      windowEvents.mousemove({ pageX: 150 });
    });

    expect(Track(slider)).toHaveAttributeValue('style', { width: '150px' });
    expect(Handle(slider)).toHaveAttributeValue('style', { left: '150px' });
    expect(onChange).toHaveBeenCalledWith(75);

    act(() => {
      windowEvents.mouseup();
    });

    expect(windowEvents.mousemove).toBe(undefined);
    expect(windowEvents.mouseup).toBe(undefined);
  });

  it('should handle a touch start', () => {
    const slider = subject({ value: 50, onChange });
    fireWith(slider.querySelectorAll('div')[0], 'touchStart', { touches: [{ pageX: 25 }] });
    expect(Track(slider)).toHaveAttributeValue('style', { width: '26px' });
    expect(Handle(slider)).toHaveAttributeValue('style', { left: '26px' });
    expect(onChange).toHaveBeenCalledWith(13);
  });

  describe('key events', () => {
    it('should handle a increment', () => {
      const slider = subject({ value: 50, onChange });
      fireEvent.keyDown(Handle(slider), {
        key: 'ArrowUp',
        shiftKey: false,
      });
      expect(Track(slider)).toHaveAttributeValue('style', { width: '102px' });
      expect(Handle(slider)).toHaveAttributeValue('style', { left: '102px' });
      expect(onChange).toHaveBeenCalledWith(51);

      fireEvent.keyDown(Handle(slider), {
        key: 'ArrowRight',
        shiftKey: false,
      });
      expect(Track(slider)).toHaveAttributeValue('style', { width: '104px' });
      expect(Handle(slider)).toHaveAttributeValue('style', { left: '104px' });
      expect(onChange).toHaveBeenCalledWith(52);
    });

    it('should handle a decrement with a precision value to the tenth', () => {
      const slider = subject({ value: 50, onChange, precision: 1 });
      fireEvent.keyDown(Handle(slider), {
        key: 'ArrowDown',
        shiftKey: false,
      });
      expect(Track(slider)).toHaveAttributeValue('style', { width: '99.8px' });
      expect(Handle(slider)).toHaveAttributeValue('style', { left: '99.8px' });
      expect(onChange).toHaveBeenCalledWith(49.9);

      fireEvent.keyDown(Handle(slider), {
        key: 'ArrowLeft',
        shiftKey: false,
      });
      expect(Track(slider)).toHaveAttributeValue('style', { width: '99.6px' });
      expect(Handle(slider)).toHaveAttributeValue('style', { left: '99.6px' });
      expect(onChange).toHaveBeenCalledWith(49.8);
    });

    it('should handle home and end key events', () => {
      const slider = subject({ value: 50, onChange });
      fireEvent.keyDown(Handle(slider), {
        key: 'Home',
        shiftKey: false,
      });
      expect(Track(slider)).toHaveAttributeValue('style', { width: '0px' });
      expect(Handle(slider)).toHaveAttributeValue('style', { left: '0px' });
      expect(onChange).toHaveBeenCalledWith(0);

      fireEvent.keyDown(Handle(slider), {
        key: 'End',
        shiftKey: false,
      });
      expect(Track(slider)).toHaveAttributeValue('style', { width: '200px' });
      expect(Handle(slider)).toHaveAttributeValue('style', { left: '200px' });
      expect(onChange).toHaveBeenCalledWith(100);
    });
  });

  describe('disabled', () => {
    it('should render disabled', () => {
      const slider = subject({ value: 50, disabled: true });
      expect(slider.querySelectorAll('div')[0]).toHaveStyleRule('cursor', 'not-allowed');
      expect(Handle(slider)).toHaveAttributeValue('aria-disabled', 'true');
    });

    it('should not move when disabled', () => {
      const slider = subject({ value: 50, onChange, disabled: true });
      fireEvent.keyDown(Handle(slider), { key: 'Home', shiftKey: false });
      fireWith(slider.querySelectorAll('div')[0], 'touchStart', { touches: [{ pageX: 25 }] });
      fireWith(slider.querySelectorAll('div')[0], 'mouseDown', { pageX: 25 });
      expect(onChange).toHaveBeenCalledTimes(1);
    });
  });

  describe('ticks', () => {
    it('should render ticks', () => {
      const slider = subject({ value: 50, ticks: { 25: 'test tick', 55: 'not included tick' } });
      expect(slider.querySelectorAll('div')[2]).toHaveAttributeValue('style', { left: '50px' });
      expect(
        slider
          .querySelectorAll('div')[3]
          .textContent,
      ).toEqual('test tick');
      expect(slider.querySelectorAll('div')[2]).toHaveStyleRule('background', tokens.color_blue_700);
      expect(
        slider
          .querySelectorAll('div')[5]
          .textContent,
      ).toEqual('not included tick');
      expect(slider.querySelectorAll('div')[4]).toHaveStyleRule('background', tokens.color_gray_300);
    });
  });
});
