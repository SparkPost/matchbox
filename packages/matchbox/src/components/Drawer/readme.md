# Drawer

A set of composable and accessible Drawer compoennts.

```js
import { Drawer, useDrawer } from '@sparkpost/matchbox';

function Example(){
  const {
    isOpen,            // Open state
    closeDrawer,       // Programatically close
    openDrawer,        // Programatically open
    getDrawerProps,    // Passes through open state & handles, a11y attributes
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
