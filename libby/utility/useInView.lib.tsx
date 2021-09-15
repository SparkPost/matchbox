import React from 'react';
import { Box, useInView } from '@sparkpost/matchbox';
import { describe, add } from '@sparkpost/libby-react';

function ExampleOne() {
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
}

function ExampleTwo() {
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
}

describe('useInView', () => {
  add('example usage', () => <ExampleOne />);
  add('once set to false', () => <ExampleTwo />);
});
