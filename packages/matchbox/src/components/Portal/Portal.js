import { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

class Portal extends Component {
  static displayName = 'Portal';

  static propTypes = {
    /**
     * ID of the target portal container. Appends a new portal to document body if not provided.
     */
    containerId: PropTypes.string,
    /**
      * Content rendered inside the portal
      */
    children: PropTypes.node
  };

  render() {
    const { containerId, children } = this.props;

    const container = containerId
      ? document.getElementById(containerId)
      : document.body;

    return ReactDOM.createPortal(children, container);
  }
}

export default Portal;
