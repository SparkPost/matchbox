import React from 'react';
import { getWindow } from '../../helpers/window';

export type WindowEventProps<T extends keyof WindowEventMap> = {
  /**
   * Type of event
   */
  event?: T;
  /**
   * Event callback function
   */
  handler: (e: WindowEventMap[T]) => void;
};

/**
 * Adds and removes events for you
 * @example <WindowEvent event='keydown' handler={handleKeyDown} />
 */
function WindowEvent<T extends keyof WindowEventMap>(props: WindowEventProps<T>): JSX.Element {
  const { event, handler } = props;
  const environment = getWindow();

  function addEvent() {
    environment.addEventListener(event, handler);
  }

  function removeEvent() {
    environment.removeEventListener(event, handler);
  }

  React.useEffect(() => {
    addEvent();
    return () => {
      removeEvent();
    };
  }, [event, handler]);

  return null;
}

WindowEvent.displayName = 'WindowEvent';
export default WindowEvent;
