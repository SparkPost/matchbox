import React from 'react';
import UnstyledLink from './UnstyledLink';

export function linkFrom({ content, ...action }, key) {
  return (
    <UnstyledLink
      key={key}
      children={content}
      {...action}
    />
  );
}
