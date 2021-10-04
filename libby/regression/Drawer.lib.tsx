import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { Box, Drawer, Button, useDrawer, Tabs } from '@sparkpost/matchbox';

describe('Visual Regression', () => {
  add('Drawer', () => {
    const drawer = useDrawer();

    return (
      <>
        <Button {...drawer.getActivatorProps()}>Open Drawer</Button>
        <Drawer {...drawer.getDrawerProps()}>
          <Drawer.Header>Drawer Title</Drawer.Header>
          <Drawer.Content p="0">
            <Tabs
              fitted
              selected={0}
              tabs={[{ content: 'Metrics' }, { content: 'Filters' }, { content: 'Compare' }]}
            />
            <Box p="500">Content</Box>
          </Drawer.Content>
          <Drawer.Footer>
            <Box display="flex">
              <Box flex="1" pr="100">
                <Button width="100%" color="blue">
                  Apply
                </Button>
              </Box>
              <Box flex="1" pl="100">
                <Button width="100%" variant="outline">
                  Cancel
                </Button>
              </Box>
            </Box>
          </Drawer.Footer>
        </Drawer>
      </>
    );
  });
});
