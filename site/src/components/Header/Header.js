import React from 'react';
import MainNavigation from '../MainNavigation/MainNavigation';
import MobileMainNavigation from '../MainNavigation/MobileMainNavigation';
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
      justifyContent="space-between"
      alignItems={['center', null, 'baseline']}
      mb={['0', null, '700']}
      pt="800"
      pb={['300', null, '800']}
    >
      <StyledTitle to="/">
        <Box as="h1" m="0" fontSize="500" fontWeight="regular" color="gray.900">
          Matchbox
        </Box>
      </StyledTitle>
      <Box display={['none', null, 'block']}>
        <MainNavigation navItems={props.navItems} location={props.location} />
      </Box>
      <Box display={['block', null, 'none']}>
        <MobileMainNavigation
          navItems={props.navItems}
          location={props.location}
        />
      </Box>
    </Box>
  );
}

export default Header;
