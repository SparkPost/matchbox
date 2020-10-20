import React from 'react';
import { Box, Drawer, Button, useDrawer, Tabs } from '@sparkpost/matchbox';

export default {
  title: 'Overlays/Drawer',
};

export const DrawerExample = () => {
  const { getDrawerProps: getDrawerPropsA, getActivatorProps: getActivatorPropsA } = useDrawer({
    id: 'example-1',
  });

  const { getDrawerProps: getDrawerPropsB, getActivatorProps: getActivatorPropsB } = useDrawer({
    id: 'example-2',
  });

  return (
    <>
      <Box display="flex">
        <Box flex="1">
          <Button outline color="blue" {...getActivatorPropsA()}>
            On the right
          </Button>
        </Box>
        <Box flex="0">
          <Button outline color="blue" {...getActivatorPropsB()}>
            On the Left
          </Button>
        </Box>
      </Box>

      <Drawer {...getDrawerPropsA()} position="right">
        <Drawer.Content>
          Opened on the right
          <Button outline>Button 1</Button>
          <Button outline>Button 2</Button>
        </Drawer.Content>
      </Drawer>

      <Drawer {...getDrawerPropsB()} position="left">
        <Drawer.Header>Header Title</Drawer.Header>
        <Drawer.Content>
          Opened on the left
          <Button outline>Button 1</Button>
          <Button outline>Button 2</Button>
          {Array.apply(null, Array(100)).map(() => (
            <br />
          ))}
          Bottom
        </Drawer.Content>
        <Drawer.Footer>Footer Content</Drawer.Footer>
      </Drawer>
    </>
  );
};

export const WithOtherComponents = () => {
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
              <Button width="100%" outline>
                Cancel
              </Button>
            </Box>
          </Box>
        </Drawer.Footer>
      </Drawer>
    </>
  );
};
