import React from 'react';
import { Box } from '@sparkpost/matchbox';

function InlineCode(props) {
  return (
    <Box
      display="inline-block"
      fontFamily="monospace"
      lineHeight="100"
      fontSize="100"
      px="200"
      py="100"
      bg="gray.200"
      borderRadius="200"
      color="magenta.700"
    >
      {props.children}
    </Box>
  );
}

export default InlineCode;
