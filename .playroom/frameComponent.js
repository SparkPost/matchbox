import React from 'react';
import { ThemeProvider, Box } from '../packages/matchbox/src/components';

export default ({ theme, children }) => (
  <ThemeProvider theme={theme}>
    <Box mx={['500', null, null, '700']} my={['500', null, null, '700']}>
      {children}
    </Box>
  </ThemeProvider>
);
