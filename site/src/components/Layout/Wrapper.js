import React from 'react';
import SEO from '../seo';
import { createGlobalStyle } from 'styled-components';
import { Box, ThemeProvider } from '@sparkpost/matchbox';
import { Header } from '../';
import Footer from '../Footer/Footer';
import global from './Global';
import useNavItems from './useNavItems';

const GlobalStyle = createGlobalStyle`	
  ${global}	
`;

function Wrapper(props) {
  const { pageTitle, navItems, data } = useNavItems(props);

  return (
    <ThemeProvider>
      <GlobalStyle />
      <SEO title={pageTitle} />
      <Box maxWidth="1400" margin="0 auto" px="500">
        <Header siteTitle={data.site.siteMetadata.title} navItems={navItems} />
      </Box>
      {props.children}
      <Box maxWidth="1400" margin="0 auto" px="500">
        <Footer />
      </Box>
      <Box id="modal-portal"></Box>
    </ThemeProvider>
  );
}

export default Wrapper;
