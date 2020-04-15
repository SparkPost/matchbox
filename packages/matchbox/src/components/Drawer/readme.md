# Drawer

A set of composable and accessible Drawer components.

```js
import { Drawer, useDrawer } from '@sparkpost/matchbox';

function Example(){
  const {
    isOpen,            // Open state
    closeDrawer,       // Function to close the drawer
    openDrawer,        // Function to open the drawer
    toggleDrawer,      // Function to toggle the drawer's open state
    getDrawerProps,    // Passes through open state, event handlers, a11y attributes
    getActivatorProps, // Passes through a11y attributes
  } = useDrawer({
    id,                // Specify an ID, defaults to `matchbox-drawer`
    initialOpen        // Sets initial open state
  });

  return (
    <>
      <Button {...getActivatorProps()}>
        Open Drawer
      <Button>

      <Drawer {...getDrawerProps()}>
        <Drawer.Header />
        <Drawer.Content>
          Drawer Content Here
        </Drawer.Content>
        <Drawer.Footer />
      </Drawer>
    </>
  )
}
```
