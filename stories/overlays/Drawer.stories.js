import React from 'react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { ThemeProvider, Drawer, Button, useDrawer } from '@sparkpost/matchbox';

addDecorator(storyFn => <ThemeProvider>{storyFn()}</ThemeProvider>);

export default {
  title: 'Overlays|Drawer',
};

export const DefaultStyle = withInfo({ propTables: [Drawer] })(() => {
  const {
    // isOpen, // Open state
    closeDrawer, // Programatically close
    // openDrawer, // Programatically open
    getDrawerProps, // Passes through open state & handles, a11y attributes
    getActivatorProps, // Passes through a11y attributes
  } = useDrawer();

  // overriding onClose
  function handleClose() {
    action('close');
    closeDrawer();
  }

  return (
    <>
      <Button outline color="blue" {...getActivatorProps()}>
        Open Drawer
      </Button>

      <Drawer
        {...getDrawerProps({ onClose: handleClose })}
        // position="left"
      >
        test test testtest sfdsf
        <div>test</div>
      </Drawer>
    </>
  );
});
