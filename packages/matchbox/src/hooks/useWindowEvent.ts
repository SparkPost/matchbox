import React from 'react';
import { getWindow } from '../helpers/window';

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
function useWindowEvent<T extends keyof WindowEventMap>(
  event: T,
  callback: (e: WindowEventMap[T]) => void,
): void {
  const environment = getWindow();

  React.useEffect(() => {
    environment.addEventListener(event, callback);
    return () => environment.removeEventListener(event, callback);
  }, [event, callback]);
}

export default useWindowEvent;
