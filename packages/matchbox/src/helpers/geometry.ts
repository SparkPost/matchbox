import React from 'react';
import { findDOMNode } from 'react-dom';
import { clamp } from './math';
import { debounce } from './event';
import { getWindow } from './window';

export type WindowRect = {
  top: number;
  left: number;
  height: number;
  width: number;
};

export function getWindowRect(): WindowRect {
  const environment = getWindow();
  return {
    top: environment.scrollY,
    left: environment.scrollX,
    height: environment.innerHeight,
    width: environment.innerWidth,
  };
}

export function getRectFor(node?: React.ReactInstance): ClientRect {
  // Need to update this soon since findDomNode is deprecated
  const rect = findDOMNode(node) as Element; //eslint-disable-line

  if (!rect) {
    return {} as ClientRect;
  }

  return rect.getBoundingClientRect();
}

/**
 * Provides a hook that returns window dimensions
 * @param  {number} [wait=100] Timer for debounced dimension calculation
 * @return {Shape}             Same results as `getWindowRect``
 */
export function useWindowSize(wait = 100): WindowRect {
  const environment = getWindow();
  const [size, setSize] = React.useState(getWindowRect());

  const handleResize = debounce(() => {
    setSize(getWindowRect());
  }, wait);

  React.useEffect(() => {
    environment.addEventListener('resize', handleResize);
    return () => {
      environment.removeEventListener('resize', handleResize);
    };
  }, []);

  return size;
}

/**
 * Gets preferred direction for the provided react component
 * @param  {React Node} node - a react component
 * @return {Shape}
 * Returns directional booleans for where the component should render. Eg:
 * top: true if component is in the bottom half of the screen
 * right: true if component in the left half of the screen
 */
export function getPreferredDirectionFor(node?: React.ReactInstance): {
  top: boolean;
  left: boolean;
  right: boolean;
  bottom: boolean;
} {
  const windowRect = getWindowRect();
  const elementRect = getRectFor(node);

  const rightOffset = windowRect.width - elementRect.right;
  const bottomOffset = windowRect.height - elementRect.bottom;

  return {
    top: bottomOffset < elementRect.top,
    left: rightOffset < elementRect.left,
    right: rightOffset >= elementRect.left,
    bottom: bottomOffset >= elementRect.top,
  };
}

/**
 * Gets coordinates and dimensions in pixels for the provided react component
 * @param  {React Node} node
 * @return {Shape}
 */
export function getPositionFor(node?: React.ReactInstance, { fixed = false } = {}): WindowRect {
  const windowRect = getWindowRect();
  const elementRect = getRectFor(node);

  return {
    top: elementRect.top + (fixed ? 0 : windowRect.top),
    left: elementRect.left + (fixed ? 0 : windowRect.left),
    width: elementRect.width,
    height: elementRect.height,
  };
}

/**
 * Linearly interpolates and clamps between two values
 * @param  {number} min
 * @param  {number} max
 * @param  {number} n
 * @return {number}
 * @example
 *   lerp(10, 20, 0.5)
 *   > 15
 */
export function lerp(min: number, max: number, n: number): number {
  const value = (max - min) * n + min;
  return clamp(value, min, max);
}

/**
 * Rounds a number to the nearest baseline ceiling
 */
export function roundToBaseline(n: number, base = 4): number {
  return Math.ceil(n / base) * base;
}
