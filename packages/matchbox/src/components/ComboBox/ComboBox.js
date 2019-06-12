import React from 'react';
import PropTypes from 'prop-types';

function ComboBox(props) {
  const { children, style, rootRef, ...rest } = props;

  return (
    <div ref={rootRef} style={{ position: 'relative', ...style }} {...rest}>
      {children}
    </div>
  );
}

ComboBox.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  /**
   * Maps to Downshift's refKey set in getRootProps. refKey must be set to "rootRef"
   */
  rootRef: PropTypes.func
};

export default ComboBox;
