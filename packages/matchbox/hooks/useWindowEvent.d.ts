export default useWindowEvent;
/**
 * Handles global window event listeners in a reusable hook
 * @param {String} event
 * @param {Func} callback
 *
 * @example
 *  function Component() {
 *    useWindowEvent('resize', handleWindowResize);
 *    ...
 *  }
 */
declare function useWindowEvent(event: string, callback: any): void;
