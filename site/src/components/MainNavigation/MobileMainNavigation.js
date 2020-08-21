import React from 'react';
import { Box, Button, Drawer, useDrawer } from '@sparkpost/matchbox';
import { Menu } from '@sparkpost/matchbox-icons';
import NavItems from './NavItems';

function MobileMainNavigation(props) {
  const { navItems } = props;

  const { getDrawerProps, getActivatorProps } = useDrawer({
    id: 'main-navigation'
  });

  return (
    <Box flex="1">
      <Button
        data-id="main-navigation-button"
        variant="text"
        p="0"
        {...getActivatorProps()}
      >
        <Menu size={24} />
      </Button>

      <Drawer {...getDrawerProps()} position="right">
        <Drawer.Header />
        <Drawer.Content pl="600" pr="600">
          <NavItems items={navItems} />
        </Drawer.Content>
      </Drawer>
    </Box>
  );
}

MobileMainNavigation.displayName = 'MobileMainNavigation';

export default MobileMainNavigation;
