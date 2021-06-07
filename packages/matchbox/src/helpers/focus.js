const FOCUSABLE_SELECTOR =
  'a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]';
const INTERACTIVE_SELECTOR =
  'a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled)';

export function findFocusableChild(element) {
  return element.querySelector(FOCUSABLE_SELECTOR);
}

export function findInteractiveChild(element) {
  return element.querySelector(INTERACTIVE_SELECTOR);
}
