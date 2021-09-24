import React from 'react';
import styled from 'styled-components';
import { Box } from '../Box';

export type BannerMediaProps = {
  children?: React.ReactNode;
  className?: string;
};

const StyledMedia = styled(Box)`
  pointer-events: none;
  figure,
  img,
  video {
    position: absolute;
    height: 100%;
    width: auto;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const Media = React.forwardRef<HTMLDivElement, BannerMediaProps>(function Media(
  { children, className },
  userRef,
) {
  return (
    <StyledMedia className={className} ref={userRef}>
      {children}
    </StyledMedia>
  );
});

Media.displayName = 'Banner.Media';

export default Media;
