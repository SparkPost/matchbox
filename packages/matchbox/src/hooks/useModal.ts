import React from 'react';

/**
 * Reusable hook to be used with the Modal component
 */

type UseModalProps = {
  initialOpen?: boolean;
  id?: string;
};

type AdditionalProps = {
  [key: string]: any;
};

function useModal({ initialOpen = false, id = 'matchbox-modal' } = {}): {
  isOpen: boolean;
  toggleModal: () => void;
  openModal: () => void;
  closeModal: () => void;
  getActivatorProps: (additionalProps?: { [k: string]: unknown }) => {
    'aria-controls': UseModalProps['id'];
    onClick: () => void;
    [key: string]: unknown;
  };
  getModalProps: (additionalProps?: { [k: string]: unknown }) => {
    id?: UseModalProps['id'];
    onClose: () => void;
    open: boolean;
    [key: string]: unknown;
  };
} {
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

  function getModalProps(additionalProps = {}) {
    return {
      id: id,
      onClose: close,
      open: isOpen,
      ...additionalProps,
    };
  }

  return {
    isOpen,
    toggleModal: toggle,
    openModal: open,
    closeModal: close,
    getActivatorProps,
    getModalProps,
  };
}

export default useModal;
