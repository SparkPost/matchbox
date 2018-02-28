import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Portal = ({ children, containerId }) => {
  const container = containerId
    ? document.getElementById(containerId)
    : document.body;
  return ReactDOM.createPortal(children, container);
};

Portal.displayName = 'Portal';

Portal.propTypes = {
  /**
   * ID of the target portal container
   */
  containerId: PropTypes.string
};

export default Portal;
