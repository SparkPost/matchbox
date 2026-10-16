import React from 'react';
import { mount } from 'enzyme';
import {
  getWindowRect,
  getRectFor,
  getPreferredDirectionFor,
  getPositionFor,
  lerp,
  useWindowSize,
  roundToBaseline,
} from '../geometry';

function MockComponent() {
  const size = useWindowSize();
  return <div {...size} />;
}

global.scrollY = 10;
global.scrollX = 20;
global.innerHeight = 600;
global.innerWidth = 900;

describe('getWindowRect', () => {
  it('should return window dimensions', () => {
    expect(getWindowRect()).toMatchSnapshot();
  });
});

/**
 * Builds a stand-in element whose bounding box is `rect`.
 * @param {Partial<DOMRect>} rect
 * @returns {Element}
 * @private
 */
function elementWithRect(rect) {
  const element = document.createElement('div');
  element.getBoundingClientRect = () => rect;
  return element;
}

describe('getRectFor', () => {
  it('should return a zero rect with no node', () => {
    expect(getRectFor(null)).toEqual({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 });
  });

  it('should return node dimensions', () => {
    const rect = { top: 1, right: 2, bottom: 3, left: 4, width: 5, height: 6 };
    expect(getRectFor(elementWithRect(rect))).toBe(rect);
  });
});

describe('useWindowSize', () => {
  it('should return window dimensions', () => {
    const wrapper = mount(<MockComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('getPreferredDirectionFor', () => {
  it('should return direction', () => {
    const node = elementWithRect({ top: 600, left: 50, right: 80, bottom: 700 });
    expect(getPreferredDirectionFor(node)).toMatchSnapshot();
  });
});

describe('getPositionFor', () => {
  const node = elementWithRect({ top: 600, left: 50, width: 20, height: 10 });

  it('should return direction', () => {
    expect(getPositionFor(node)).toMatchSnapshot();
  });

  it('should return direction if node is fixed', () => {
    expect(getPositionFor(node, { fixed: true })).toMatchSnapshot();
  });
});

describe('linear interpolation', () => {
  it('should correctly interpolate between two points', () => {
    expect(lerp(-10, 30, 0.5)).toBe(10);
  });

  it('should clamp lower bounds', () => {
    expect(lerp(-10, 30, -1.5)).toBe(-10);
  });

  it('should clamp upper bounds', () => {
    expect(lerp(-10, 30, 1.5)).toBe(30);
  });
});

describe('round to baseline', () => {
  it('should round up correctly', () => {
    expect(roundToBaseline(4.5555)).toBe(8);
    expect(roundToBaseline(4)).toBe(4);
    expect(roundToBaseline(15)).toBe(16);
    expect(roundToBaseline(0)).toBe(0);
    expect(roundToBaseline(3.5, 3)).toBe(6);
  });
});
