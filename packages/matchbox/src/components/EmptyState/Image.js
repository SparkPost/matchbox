import React from 'react';
import PropTypes from 'prop-types';
import { StyledImage } from './styles';

function Image(props) {
  const { source: Source } = props;

  return (
    <StyledImage
      display={['none', null, 'block']}
      top="45%"
      left="48%"
      width="50%"
      maxWidth="600px"
      height="auto"
      position="absolute"
    >
      <Source />
    </StyledImage>
  );
}

Image.displayName = 'EmptyState.Image';

Image.propTypes = {
  source: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
};

export default Image;
