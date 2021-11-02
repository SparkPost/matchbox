import React from 'react';
import { Box } from '../Box';

export type InlineCodeProps = {
  children?: React.ReactNode;
};

function InlineCode({ children }: InlineCodeProps): JSX.Element {
  return (
    <Box
      as="code"
      borderRadius="100"
      fontFamily="monospace"
      display="inline"
      bg="blue.200"
      color="blue.700"
      px="100"
      lineHeight="inherit"
      fontSize="75%"
    >
      {children}
    </Box>
  );
}

InlineCode.displayName = 'InlineCode';

export default InlineCode;
