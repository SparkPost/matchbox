import React, { useRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Close } from '@sparkpost/matchbox-icons';
import { WindowEvent } from '../WindowEvent';
import { Button } from '../Button';
import { Box } from '../Box';
import { onKey } from '../../helpers/keyEvents';
import Content from './Content';
import styles from './Modal.module.scss';

function Modal(props) {
  const { open, onClose, children, className, showCloseButton, ...rest } = props;
  const modalClasses = classNames(styles.Modal, open && styles.open, className);
  let container = useRef(null);
  let content = useRef(null);

  const handleKeydown = e => {
    if (open && onClose) {
      onKey('escape', onClose)(e);
    }
  };

  const handleOutsideClick = e => {
    const isOutside =
      content && !content.contains(e.target) && container && container.contains(e.target);

    if (open && isOutside && onClose) {
      onClose(e);
    }
  };

  return (
    <Box
      className={modalClasses}
      onClose={onClose}
      {...rest}
      ref={el => (container = el)}
      role="dialog"
      aria-modal="true"
    >
      <Content open={open}>
        <div ref={el => (content = el)}>
          <WindowEvent event="keydown" handler={handleKeydown} />

          <WindowEvent event="click" handler={handleOutsideClick} />

          {showCloseButton && (
            <Button flat onClick={onClose} data-id="modal-close">
              <span>Close</span>

              <Close />
            </Button>
          )}

          {children}
        </div>
      </Content>
    </Box>
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
