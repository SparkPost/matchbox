import { findDOMNode } from 'react-dom';

export function getWindowRect() {
  return {
    top: window.scrollY,
    left: window.scrollX,
    height: window.innerHeight,
    width: window.innerWidth
  };
}

export function getRectForNode(node) {
  const rect = findDOMNode(node);

  if (!rect) {
    return {};
  }

  return rect.getBoundingClientRect();
}
