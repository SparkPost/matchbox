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
  getActivatorProps: ({}: AdditionalProps) => {
    'aria-controls': UseModalProps['id'];
    onClick: () => void;
    [key: string]: any;
  };
  getModalProps: ({}: AdditionalProps) => {
    id?: UseModalProps['id'];
    onClose: () => void;
    open: boolean;
    [key: string]: any;
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
