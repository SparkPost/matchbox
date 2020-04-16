# Drawer

A set of composable and accessible Drawer components. The hook `useDrawer` handles state management
and provides accessibility attributes to the components.

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
      <Button
        // Provides `onClick` and a11y attributes
        {...getActivatorProps({ ...additionalProps })}
      >
        Open Drawer
      <Button>

      <Drawer
        // Provides `open`, `onClose`, `id` and a11y attributes
        {...getDrawerProps({ ...additionalProps })}

        // When true, closes the Drawer with a keydown escape event
        closeOnEscape={true}

        // When true, closes the Drawer when clicking outside contents
        closeOnOutsideClick={true}

        // ID provided by `getDrawerProps`
        id="matchbox-drawer"

        // Called when open state changes
        onChange={() => ()}

        // Function to close, provided by `getDrawerProps`
        onClose={() => ()}

        // Open state, provided by `getDrawerProps`
        open={true}

        // Optional element ID to target a portal
        portalId="element-id"

        // Positions the Drawer on the right or left
        position="right"
      >
        <Drawer.Header
          // Called when clicking the close button, provided by Drawer
          onClose={() => ()}

          // Shows or hides the close button
          showCloseButton={true}
        >
          Header Title
        </Drawer.Header>

        <Drawer.Content
          // Supports padding system props
          p="500"
        >
          Drawer Content
        </Drawer.Content>

        <Drawer.Footer
          // Supports padding system props
          p="500"
        >
          Footer Content
        </Drawer.Footer>
      </Drawer>
    </>
  )
}
```
