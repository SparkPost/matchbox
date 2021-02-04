import React from 'react';
import { ThemeProvider, Box } from '@sparkpost/matchbox';

export default function(props) {
  return (
    <ThemeProvider>
      <Box p="500">{props.children}</Box>
    </ThemeProvider>
  );
}
