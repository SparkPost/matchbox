import React from 'react';
// import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Close } from '@sparkpost/matchbox-icons';
import { WindowEvent } from '../WindowEvent';
import { Button } from '../Button';
import { onKey } from '../../helpers/keyEvents';
import Content from './Content';

function Modal(props) {
  const { open, onClose, children, className, showCloseButton, ...rest } = props;

  const handleKeydown = e => {
    if (open && onClose) {
      onKey('escape', onClose)(e);
    }
  };

  const handleOutsideClick = e => {
    // TODO: Figure out how to do this using hooks!
    const isOutside = true;

    if (open && isOutside && onClose) {
      onClose(e);
    }
  };

  return (
    <div className={className} onClose={onClose} {...rest} role="dialog" aria-modal="true">
      <Content open={open}>
        <WindowEvent event="keydown" handler={handleKeydown} />

        <WindowEvent event="click" handler={handleOutsideClick} />

        {showCloseButton && (
          <Button flat onClick={onClose} data-id="modal-close">
            <span>Close</span>

            <Close />
          </Button>
        )}

        {children}
      </Content>
    </div>
  );
}

Modal.propTypes = {
  /**
   * Controlled open state of the modal
   */
  open: PropTypes.bool,
  /**
   * An optional function that is called on key down 'Escape' and on click outside modal content
   */
  onClose: PropTypes.func,
  /**
   * Modal content
   */
  children: PropTypes.node,
  showCloseButton: PropTypes.bool,
};

Modal.displayName = 'Modal';
export default Modal;
