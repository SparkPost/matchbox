import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { Box, Drawer, Button } from '@sparkpost/matchbox';
// @ts-ignore
import { useDrawer, Tabs } from '@sparkpost/matchbox';

describe('Drawer', () => {
  add('example drawer', () => {
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
            <Button variant="outline" color="blue" {...getActivatorPropsA()}>
              On the right
            </Button>
          </Box>
          <Box flex="0">
            <Button variant="outline" color="blue" {...getActivatorPropsB()}>
              On the Left
            </Button>
          </Box>
        </Box>

        <Drawer {...getDrawerPropsA()} position="right">
          <div>
            <Drawer.Header>Header Title</Drawer.Header>
            <Drawer.Content>
              Opened on the right
              <Button variant="outline">Button 1</Button>
              <Button variant="outline">Button 2</Button>
            </Drawer.Content>
          </div>
        </Drawer>

        <Drawer {...getDrawerPropsB()} position="left">
          <div>
            <Drawer.Header>Header Title</Drawer.Header>
            <Drawer.Content>
              Opened on the left
              <Button variant="outline">Button 1</Button>
              <Button variant="outline">Button 2</Button>
              {/* eslint-disable-next-line prefer-spread */}
              {Array.apply(null, Array(100)).map((n, i) => (
                <br key={i} />
              ))}
              Bottom
            </Drawer.Content>
            <Drawer.Footer>Footer Content</Drawer.Footer>
          </div>
        </Drawer>
      </>
    );
  });

  add('with other components', () => {
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
