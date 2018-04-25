import { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Adds and removes events for you
 * Usage:
 * <WindowEvent event='keydown' handler={this.handleKeyDown} />
 */
class WindowEvent extends Component {
  static displayName = 'WindowEvent';

  static propTypes = {
    /**
     * Type of event
     */
    event: PropTypes.string.isRequired,
    /**
      * Event callback function
      */
    handler: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.addEvent();
  }

  componentWillUpdate() {
    this.removeEvent();
  }

  componentDidUpdate() {
    this.addEvent();
  }

  componentWillUnmount() {
    this.removeEvent();
  }

  render() {
    return null;
  }

  addEvent() {
    const { event, handler } = this.props;
    window.addEventListener(event, handler);
  }

  removeEvent() {
    const { event, handler } = this.props;
    window.removeEventListener(event, handler);
  }
}

export default WindowEvent;
