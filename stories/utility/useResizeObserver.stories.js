import React from 'react';
import { Box, useResizeObserver } from '@sparkpost/matchbox';

export default {
  title: 'Utility|useResizeObserver',
};

export const exampleUsage = () => {
  const [ref, { contentRect }] = useResizeObserver();
  return (
    <Box
      p="400"
      bg="blue.200"
      color="blue.800"
      style={{ resize: 'both', overflow: 'auto' }}
      ref={ref}
    >
      Resize me <br />
      {JSON.stringify(contentRect)}
    </Box>
  );
};
