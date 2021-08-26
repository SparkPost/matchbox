import React from 'react';
import { MaxWidthProps } from 'styled-system';
import { StyledImage } from './styles';

import { Picture } from '../Picture';

type EmptyStateImageProps = {
  src?: string;
  className?: string;
  children?: React.ReactNode;
} & MaxWidthProps;

const Image = React.forwardRef<HTMLDivElement, EmptyStateImageProps>(function Image(
  props,
  userRef,
) {
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
      {/* @ts-ignore */}
      <Picture className={className}>
        {children}
        {/* @ts-ignore */}
        <Picture.Image src={src} />
      </Picture>
    </StyledImage>
  );
});

Image.displayName = 'EmptyState.Image';
export default Image;
