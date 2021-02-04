import React from 'react';
import { Box, useInView } from '@sparkpost/matchbox';

export default {
  title: 'Utility|useInView',
};

export const ExampleUsage = () => {
  const [ref, inView] = useInView();

  React.useLayoutEffect(() => {
    if (inView) {
      console.log('scrolled into view');
    }
  }, [inView]);

  return (
    <>
      <Box position="fixed">{inView ? 'In View: True' : 'In View: False'}</Box>
      <Box height="2000px" bg="blue.300"></Box>
      <Box ref={ref} height="200px" bg="blue.700"></Box>
      <Box height="2000px" bg="blue.300"></Box>
    </>
  );
};

export const OnceFalse = () => {
  const [ref, inView] = useInView({ once: false });

  React.useLayoutEffect(() => {
    if (inView) {
      console.log('scrolled into view');
    }
  }, [inView]);

  return (
    <>
      <Box position="fixed">{inView ? 'In View: True' : 'In View: False'}</Box>
      <Box height="2000px" bg="blue.300"></Box>
      <Box ref={ref} height="200px" bg="blue.700"></Box>
      <Box height="2000px" bg="blue.300"></Box>
    </>
  );
};
