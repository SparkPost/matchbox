const FOCUSABLE_SELECTOR =
  'a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]';

export function findFocusableChild(element) {
  return element.querySelector(FOCUSABLE_SELECTOR);
}
