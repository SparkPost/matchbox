import React from 'react';

export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number,
  immediate: boolean,
) {
  let timeout;
  return function(...rest) { // eslint-disable-line
    const context = this; // eslint-disable-line
    const args = rest;
    const later = function () {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(context, args);
    }
  };
}

export function noop(): void {
  return undefined;
}

export function identity<T>(a: T) {
  return a;
}

export function isNotTouchEvent(e: TouchEvent): boolean {
  return e.touches.length > 1 || (e.type.toLowerCase() === 'touchend' && e.touches.length > 0);
}
