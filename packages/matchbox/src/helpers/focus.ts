const FOCUSABLE_SELECTOR =
  'a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]';

/**
 * Finds the first focusable child within the provided DOM element.
 * @param element The element to query
 * @returns HTMLElement
 */
export function findFocusableChild(element: HTMLElement): HTMLElement {
  return element.querySelector(FOCUSABLE_SELECTOR);
}
