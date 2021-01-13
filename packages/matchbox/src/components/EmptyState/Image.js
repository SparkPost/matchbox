import React from 'react';
import PropTypes from 'prop-types';
import { StyledImage } from './styles';

import { Picture } from '../Picture';

const Image = React.forwardRef(function Image(props, userRef) {
  const { src, className, children } = props;

  return (
    <StyledImage
      display="block"
      mx="auto"
      mb="400"
      width={['100%', '80%', '60%', '100%']}
      maxWidth="1150"
      height="auto"
      ref={userRef}
    >
      <Picture className={className}>
        {children}
        <Picture.Image src={src} />
      </Picture>
    </StyledImage>
  );
});

Image.displayName = 'EmptyState.Image';

Image.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
};

export default Image;
