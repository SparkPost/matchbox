import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

function Portal(props) {
  const { containerId, children } = props;

  if (typeof document !== 'undefined') {
    const container = containerId ? document.getElementById(containerId) : document.body;
    if (container) {
      return ReactDOM.createPortal(children, container);
    }
  }

  return null;
}

Portal.displayName = 'Portal';
Portal.propTypes = {
  /**
   * ID of the target portal container. Appends a new portal to document body if not provided.
   */
  containerId: PropTypes.string,
  /**
   * Content rendered inside the portal
   */
  children: PropTypes.node,
};

export default Portal;
