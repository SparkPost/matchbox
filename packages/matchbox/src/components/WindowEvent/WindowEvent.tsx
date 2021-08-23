import React from 'react';
import { getWindow } from '../../helpers/window';

type WindowEventProps = {
  /**
   * Type of event
   */
  event?: string;
  /**
   * Event callback function
   */
  handler?: EventListenerOrEventListenerObject;
};

/**
 * Adds and removes events for you
 * @example <WindowEvent event='keydown' handler={handleKeyDown} />
 */
function WindowEvent(props: WindowEventProps): JSX.Element {
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
