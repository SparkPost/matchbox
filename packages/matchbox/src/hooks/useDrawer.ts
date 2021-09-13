import React from 'react';
import { OptionalSpread } from '../helpers/types';

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
  getActivatorProps: <T = undefined>(
    ...args: OptionalSpread<T>
  ) => {
    'aria-controls': UseDrawerProps['id'];
    onClick: () => void;
    [key: string]: any;
  };
  getDrawerProps: <T = undefined>(
    ...args: OptionalSpread<T>
  ) => {
    id: UseDrawerProps['id'];
    onClose: () => void;
    open: boolean;
    [key: string]: any;
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
