import React from 'react';
import { usePrefersColorScheme } from '@sparkpost/matchbox';
import { describe, add } from '@sparkpost/libby-react';

describe('usePrefersColorScheme', () => {
  add('example usage', () => {
    const prefersColorScheme = usePrefersColorScheme();

    return <>(prefers-color-scheme: {prefersColorScheme})</>;
  });
});
