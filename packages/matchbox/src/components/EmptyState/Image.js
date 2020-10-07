import React from 'react';
import PropTypes from 'prop-types';
import { StyledImage } from './styles';

import { Picture } from '../Picture';

const Image = React.forwardRef(function Image(props, userRef) {
  const { src, className, children } = props;

  return (
    <StyledImage display={['none', null, 'block']} width="100%" height="auto" ref={userRef}>
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
