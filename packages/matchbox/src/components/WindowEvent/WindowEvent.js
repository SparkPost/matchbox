import React from 'react';
import PropTypes from 'prop-types';

/**
 * Adds and removes events for you
 * Usage:
 * <WindowEvent event='keydown' handler={this.handleKeyDown} />
 */

function WindowEvent(props) {
  const { event, handler } = props;

  function addEvent() {
    window.addEventListener(event, handler);
  }

  function removeEvent() {
    window.removeEventListener(event, handler);
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
WindowEvent.propTypes = {
  /**
   * Type of event
   */
  event: PropTypes.string.isRequired,
  /**
   * Event callback function
   */
  handler: PropTypes.func.isRequired,
};

export default WindowEvent;
