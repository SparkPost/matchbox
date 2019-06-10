import React from 'react';
import PropTypes from 'prop-types';

function ComboBox(props) {
  const { children, style, ...rest } = props;

  return (
    <div style={{ position: 'relative', ...style }} {...rest}>
      {children}
    </div>
  );
}

ComboBox.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object
};

export default ComboBox;
