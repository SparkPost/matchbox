import React from 'react';
import UnstyledLink from './UnstyledLink';
import type { UnstyledLinkProps } from './UnstyledLink';

interface LinkFromTypes extends UnstyledLinkProps {
  content?: React.ReactNode;
  children?: React.ReactNode;
}

export function linkFrom(
  { content, children, ...action }: LinkFromTypes,
  key?: React.Key,
): JSX.Element {
  return (
    <UnstyledLink key={key} {...action}>
      {content}
      {children}
    </UnstyledLink>
  );
}
