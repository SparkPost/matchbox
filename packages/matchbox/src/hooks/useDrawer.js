import React from 'react';

/**
 * Reusable hook to be used with the Drawer component
 */

function useDrawer({ initialOpen = false }) {
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

  return {
    isOpen,
    toggle,
    open,
    close,
  };
}

export default useDrawer;
