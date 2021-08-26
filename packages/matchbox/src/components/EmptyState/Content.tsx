import React from 'react';
import { StyledContent } from './styles';

type EmptyStateContentProps = {
  children?: React.ReactNode;
};

const Content = React.forwardRef<HTMLDivElement, EmptyStateContentProps>(function Content(
  props,
  userRef,
) {
  const { children } = props;

  return <StyledContent ref={userRef}>{children}</StyledContent>;
});

Content.displayName = 'EmptyState.Content';
export default Content;
