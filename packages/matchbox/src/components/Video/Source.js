import React from 'react';
import PropTypes from 'prop-types';

const Source = React.forwardRef(function Source(props, userRef) {
  const { src, type, className } = props;

  return <source className={className} src={src} ref={userRef} type={type}></source>;
});

Source.displayName = 'Video.Source';

Source.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
};

export default Source;
