export function debounce(func, wait, immediate) {
  let timeout;
  return function() { // eslint-disable-line
    const context = this; // eslint-disable-line
    const args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) { func.apply(context, args); }
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) { func.apply(context, args); }
  };
}

export function noop() {
}

export function identity(a) {
  return a;
}

export function isNotTouchEvent(e) {
  return e.touches.length > 1 || (e.type.toLowerCase() === 'touchend' && e.touches.length > 0);
}
