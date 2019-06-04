import { findDOMNode } from 'react-dom';
import { clamp } from './math';

export function getWindowRect() {
  return {
    top: window.scrollY,
    left: window.scrollX,
    height: window.innerHeight,
    width: window.innerWidth
  };
}

export function getRectFor(node) {
  const rect = findDOMNode(node);

  if (!rect) {
    return {};
  }

  return rect.getBoundingClientRect();
}

/**
 * Gets preferred direction for the provided react component
 * @param  {React Node} node - a react component
 * @return {Shape}
 * Returns directional booleans for where the component should render. Eg:
 * top: true if component is in the bottom half of the screen
 * right: true if component in the left half of the screen
 */
export function getPreferredDirectionFor(node) {
  const windowRect = getWindowRect();
  const elementRect = getRectFor(node);

  const rightOffset = windowRect.width - elementRect.right;
  const bottomOffset = windowRect.height - elementRect.bottom;

  return {
    top: bottomOffset < elementRect.top,
    left: rightOffset < elementRect.left,
    right: rightOffset >= elementRect.left,
    bottom: bottomOffset >= elementRect.top
  };
}


/**
 * Gets coordinates and dimensions in pixels for the provided react component
 * @param  {React Node} node
 * @return {Shape}
 */
export function getPositionFor(node, { fixed = false } = {}) {
  const windowRect = getWindowRect();
  const elementRect = getRectFor(node);

  return {
    top: elementRect.top + (fixed ? 0 : windowRect.top),
    left: elementRect.left + (fixed ? 0 : windowRect.left),
    width: elementRect.width,
    height: elementRect.height
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
export function lerp(min, max, n) {
  const value = (max - min) * n + min;
  return clamp(value, min, max);
}
