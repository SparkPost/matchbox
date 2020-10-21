import React from 'react';
import { Box, useInView } from '@sparkpost/matchbox';

export default {
  title: 'Utility|useInView',
};

export const ExampleUsage = () => {
  const [ref, inView] = useInView();

  return (
    <>
      <Box position="fixed">{inView ? 'In View' : 'Not In View'}</Box>
      <Box height="2000px" bg="blue.300"></Box>
      <Box ref={ref} height="200px" bg="blue.700"></Box>
      <Box height="2000px" bg="blue.300"></Box>
    </>
  );
};
