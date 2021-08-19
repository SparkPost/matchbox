import React from 'react';
import { Box } from '../Box';

function InlineCode({ children }): JSX.Element {
  return (
    <Box
      as="code"
      borderRadius="200"
      fontFamily="monospace"
      display="inline"
      bg="gray.200"
      color="gray.900"
      px="200"
      lineHeight="inherit"
      fontSize="75%"
    >
      {children}
    </Box>
  );
}

InlineCode.displayName = 'InlineCode';

export default InlineCode;
