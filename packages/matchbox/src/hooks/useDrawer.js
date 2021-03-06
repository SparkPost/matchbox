import React from 'react';

/**
 * Reusable hook to be used with the Drawer component
 */

function useDrawer({ initialOpen = false, id = 'matchbox-drawer' } = {}) {
  const [isOpen, setIsOpen] = React.useState(initialOpen);

  function toggle() {
    setIsOpen(!isOpen);
  }

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  function getActivatorProps(additionalProps = {}) {
    return {
      'aria-controls': id,
      onClick: open,
      ...additionalProps,
    };
  }

  function getDrawerProps(additionalProps = {}) {
    return {
      id: id,
      onClose: close,
      open: isOpen,
      ...additionalProps,
    };
  }

  return {
    isOpen,
    toggleDrawer: toggle,
    openDrawer: open,
    closeDrawer: close,
    getActivatorProps,
    getDrawerProps,
  };
}

export default useDrawer;
