import React from 'react';
import { Box } from '@sparkpost/matchbox';

function InlineCode(props) {
  return (
    <Box
      as="code"
      display="inline-block"
      fontFamily="monospace"
      lineHeight="100"
      fontSize="0.65em"
      px="100"
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
