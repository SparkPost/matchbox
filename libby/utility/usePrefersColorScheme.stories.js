import React from 'react';
import { Box, usePrefersColorScheme } from '@sparkpost/matchbox';

export default {
  title: 'Utility|usePrefersColorScheme',
};

export const ExampleUsage = () => {
  const prefersColorScheme = usePrefersColorScheme();

  return (
    <>
      <Box>(prefers-color-scheme: {prefersColorScheme})</Box>
    </>
  );
};
