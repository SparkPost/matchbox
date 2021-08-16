export function getWindow(): (Window & typeof globalThis) | {
    matchMedia: () => {};
};
/**
 * Returns true if window is an iframe
 * window.top is not accessible from an iframe
 * @see https://stackoverflow.com/questions/326069/how-to-identify-if-a-webpage-is-being-loaded-inside-an-iframe-or-directly-into-t
 */
export function isInIframe(): boolean;
