import React from 'react';
import PropTypes from 'prop-types';

const Media = React.forwardRef(function Media(props, userRef) {
  const { children } = props;

  return <div ref={userRef}>{children}</div>;
});

Media.displayName = 'Banner.Media';
Media.propTypes = {
  children: PropTypes.node,
};

export default Media;
