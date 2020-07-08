import React from 'react';
import _ from 'lodash';

import { Box, Button, Drawer, useDrawer } from '@sparkpost/matchbox';
import { ChevronLeft, ChevronRight } from '@sparkpost/matchbox-icons';
import SideNavigation from '../SideNavigation/SideNavigation';

function SecondaryNavigation(props) {
  const { navItems } = props;

  const { label: primaryLabel, childRoutes } = _.find(navItems, [
    'selected',
    true
  ]);

  const { label: secondaryLabel } = _.find(childRoutes, ['selected', true]);

  const { getDrawerProps, getActivatorProps } = useDrawer({
    id: 'secondary-navigation'
  });

  return (
    <Box flex="1">
      <Button fullWidth flat p="0" {...getActivatorProps()}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <span>
            <Box as="span" color="gray.700" p="0">
              {primaryLabel} <ChevronRight size={16} />
            </Box>
            <Box color="blue.700" as="span">
              {secondaryLabel}
            </Box>
          </span>
          <Box color="gray.700">
            <ChevronLeft size={24} />
          </Box>
        </Box>
      </Button>

      <Drawer {...getDrawerProps()} position="right">
        <Drawer.Header pb="0" />
        <Drawer.Content pt="0" pl="600" pr="600">
          <SideNavigation navItems={childRoutes} />
        </Drawer.Content>
      </Drawer>
    </Box>
  );
}

export default SecondaryNavigation;
