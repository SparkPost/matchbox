import React from 'react';
import { Box, usePrefersReducedMotion } from '@sparkpost/matchbox';

export default {
  title: 'Utility|usePrefersReducedMotion',
};

export const ExampleUsage = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <>
      <Box>(prefers-reduced-motion: {prefersReducedMotion})</Box>
    </>
  );
};
