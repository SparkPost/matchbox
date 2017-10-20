import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Portal = ({ children, containerId }) => {
  const container = document.getElementById(containerId);
  return ReactDOM.createPortal(children, container);
};

Portal.displayName = 'Portal';

Portal.propTypes = {
  /**
   * ID of the target portal container
   */
  containerId: PropTypes.string.isRequired
};

export default Portal;
