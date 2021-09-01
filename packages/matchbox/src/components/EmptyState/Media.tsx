import React from 'react';
import styled from 'styled-components';
import { MaxWidthProps } from 'styled-system';
import { Box } from '../Box';

const StyledMedia = styled(Box)`
  pointer-events: none;
`;

type EmptyStateMediaProps = {
  children?: React.ReactNode;
  className?: string;
} & MaxWidthProps;

const Media = React.forwardRef<HTMLDivElement, EmptyStateMediaProps>(function Media(
  props,
  userRef,
) {
  const { children, className, maxWidth = '1100' } = props;

  return (
    <StyledMedia
      display="block"
      mx="auto"
      mb="400"
      width={['100%', '80%', '60%', '100%']}
      maxWidth={maxWidth}
      height="auto"
      className={className}
      ref={userRef}
    >
      {children}
    </StyledMedia>
  );
});

Media.displayName = 'EmptyState.Media';
export default Media;
