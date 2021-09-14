function noop() {
  return;
}

type GetWindowReturnType =
  | (Window & typeof globalThis)
  | {
      [k: string]: any;
    };

/**
 * Checks if window is available to support SSG/SSR builds
 */
export function getWindow(): GetWindowReturnType {
  if (typeof window !== 'undefined') {
    return window;
  }

  return {
    matchMedia: noop,
    addEventListener: noop,
    removeEventListener: noop,
    setTimeout: noop,
    clearTimeout: noop,
  };
}

/**
 * Returns true if window is an iframe
 * window.top is not accessible from an iframe
 * @see https://stackoverflow.com/questions/326069/how-to-identify-if-a-webpage-is-being-loaded-inside-an-iframe-or-directly-into-t
 */
export function isInIframe(): boolean {
  return window.self !== window.top;
}
