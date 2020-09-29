import React from 'react';
import PropTypes from 'prop-types';
import { StyledImage } from './styles';

import { Picture } from '../Picture';

const Image = React.forwardRef(function Image(props, userRef) {
  const { src } = props;

  return (
    <StyledImage
      display={['none', null, 'block']}
      width="100%"
      maxWidth="600px"
      height="auto"
      ref={userRef}
    >
      <Picture>
        <Picture.Image src={src} />
      </Picture>
    </StyledImage>
  );
});

Image.displayName = 'EmptyState.Image';

Image.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Image;
