/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from 'react';
import { Box, ThemeProvider } from '@sparkpost/matchbox';
import GlobalStyle from './src/components/Layout/Global';

const shouldUpdateScroll = ({ routerProps: { location } }) => {
  if (!location.hash) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return false;
  }
  return true;
};

const wrapPageElement = ({ element, props }) => {
  return (
    <ThemeProvider {...props}>
      <GlobalStyle />
      <Box maxWidth="1240px" margin="0 auto" pl="600" pr="600">
        {element}
      </Box>
    </ThemeProvider>
  );
};

export { shouldUpdateScroll, wrapPageElement };
