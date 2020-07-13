import React from 'react';
import { Box } from '@sparkpost/matchbox';

import NavItems from './NavItems';

function MainNavigation(props) {
  const { navItems } = props;

  return (
    <nav>
      <Box
        as="ul"
        display="flex"
        justifyContent="flex-end"
        padding="0"
        margin="0"
      >
        <NavItems items={navItems} />
      </Box>
    </nav>
  );
}

export default MainNavigation;
