import React from 'react';
import { MDXProvider } from '../';
import { Box } from '@sparkpost/matchbox';
import Wrapper from './Wrapper';

function Layout(props) {
  return (
    <Wrapper location={props.location}>
      <Box maxWidth="1400" m="0 auto">
        <Box as="main" pb={['400', null, '800']} pt="400" px="500">
          <MDXProvider>{props.children}</MDXProvider>
        </Box>
      </Box>
    </Wrapper>
  );
}

export default Layout;
