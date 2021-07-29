import React from 'react';
import { ThemeProvider, Box } from '@sparkpost/matchbox';
import './calibre.css';

function Layout(props) {
  return (
    <ThemeProvider>
      <Box p="500">{props.children}</Box>
    </ThemeProvider>
  );
}

export default Layout;
