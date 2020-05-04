import React from 'react';
import MainNavigation from '../MainNavigation/MainNavigation';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { Box } from '@sparkpost/matchbox';

const StyledTitle = styled(Link)`
  flex: 0 0 0;
  text-decoration: none;
`;

function Header(props) {
  return (
    <Box
      as="header"
      display="flex"
      alignItems="baseline"
      mb="700"
      pt="800"
      pb="800"
    >
      <StyledTitle to="/">
        <Box as="h1" fontSize="500" fontWeight="regular" color="gray.900">
          Matchbox
        </Box>
      </StyledTitle>
      <Box flex="1 0 0">
        <MainNavigation navItems={props.navItems} location={props.location} />
      </Box>
    </Box>
  );
}

export default Header;
