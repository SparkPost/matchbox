import React from 'react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { ThemeProvider, Box, Drawer, Button, useDrawer } from '@sparkpost/matchbox';

addDecorator(storyFn => <ThemeProvider>{storyFn()}</ThemeProvider>);

export default {
  title: 'Overlays|Drawer',
};

export const DrawerExample = withInfo({ propTables: [Drawer] })(() => {
  const { closeDrawer, getDrawerProps, getActivatorProps } = useDrawer({ id: 'example-1' });

  const { getDrawerProps: getDrawerPropsB, getActivatorProps: getActivatorPropsB } = useDrawer({
    id: 'example-2',
  });

  // Overriding onClose
  function handleClose() {
    action('close');
    closeDrawer();
  }

  return (
    <>
      <Box display="flex">
        <Box flex="1">
          <Button outline color="blue" {...getActivatorProps()}>
            On the right
          </Button>
        </Box>
        <Box flex="0">
          <Button outline color="blue" {...getActivatorPropsB()}>
            On the Left
          </Button>
        </Box>
      </Box>

      <Drawer
        {...getDrawerProps({ onClose: handleClose })}
        position="right"
        portalId="modal-portal"
      >
        <button>testing</button>
        <button>focus</button>
      </Drawer>

      <Drawer {...getDrawerPropsB()} position="left" portalId="modal-portal">
        <button>testing</button>
        <button>focus</button>
      </Drawer>
    </>
  );
});
