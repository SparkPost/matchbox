import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { usePrefersReducedMotion } from '@sparkpost/matchbox';

describe('usePrefersReducedMotion', () => {
  add('example usage', () => {
    const prefersReducedMotion = usePrefersReducedMotion();

    return <>(prefers-reduced-motion: {prefersReducedMotion})</>;
  });
});
