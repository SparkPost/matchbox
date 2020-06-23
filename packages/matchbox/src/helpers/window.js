// Checks if window is available
// To support Gatsby's static build
export function getWindow() {
  if (typeof window !== 'undefined') {
    return window;
  }
  return {};
}

/**
 * Returns true if window is an iframe
 * window.top is not accessible from an iframe
 * @see https://stackoverflow.com/questions/326069/how-to-identify-if-a-webpage-is-being-loaded-inside-an-iframe-or-directly-into-t
 */
export function isInIframe() {
  console.log(window.self !== window.top);
  return window.self !== window.top;
}
