import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from '../Box';

type MediaProps = {
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

const Media = React.forwardRef<HTMLDivElement, MediaProps>(function Media(
  { children, className }: MediaProps,
  userRef,
) {
  return (
    <StyledMedia className={className} ref={userRef}>
      {children}
    </StyledMedia>
  );
});

Media.displayName = 'Banner.Media';
Media.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Media;
