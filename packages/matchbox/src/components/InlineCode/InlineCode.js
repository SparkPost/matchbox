import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';

function InlineCode({ children }) {
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

InlineCode.propTypes = {
  children: PropTypes.node,
};

export default InlineCode;
