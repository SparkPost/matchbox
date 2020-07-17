import React from 'react';

/**
 * Reusable hook to be used with the Modal component
 */

function useModal({ initialOpen = false, id = 'matchbox-modal' } = {}) {
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
