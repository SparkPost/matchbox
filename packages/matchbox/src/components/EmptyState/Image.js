import React from 'react';
import PropTypes from 'prop-types';
import { createPropTypes } from '@styled-system/prop-types';
import { maxWidth } from 'styled-system';
import { StyledImage } from './styles';

import { Picture } from '../Picture';

const Image = React.forwardRef(function Image(props, userRef) {
  const { src, className, children, maxWidth = '1100' } = props;

  return (
    <StyledImage
      display="block"
      mx="auto"
      mb="400"
      width={['100%', '80%', '60%', '100%']}
      maxWidth={maxWidth}
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
  ...createPropTypes(maxWidth.propNames),
};

export default Image;
