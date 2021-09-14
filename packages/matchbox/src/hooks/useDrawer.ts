import React from 'react';

/**
 * Reusable hook to be used with the Drawer component
 */

type UseDrawerProps = {
  initialOpen?: boolean;
  id?: string;
};

function useDrawer({ initialOpen = false, id = 'matchbox-drawer' }: UseDrawerProps = {}): {
  isOpen: boolean;
  toggleDrawer: () => void;
  openDrawer: () => void;
  closeDrawer: () => void;
  getActivatorProps: (additionalProps?: { [k: string]: unknown }) => {
    'aria-controls': UseDrawerProps['id'];
    onClick: () => void;
    [key: string]: unknown;
  };
  getDrawerProps: (props?: { [k: string]: unknown }) => {
    id: UseDrawerProps['id'];
    onClose: () => void;
    open: boolean;
    [key: string]: unknown;
  };
} {
  const [isOpen, setIsOpen] = React.useState<boolean>(initialOpen);

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
