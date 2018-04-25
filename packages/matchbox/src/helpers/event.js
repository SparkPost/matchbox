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
