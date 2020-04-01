import React, { useEffect, useRef } from 'react';
import { Transition } from 'react-transition-group';
import FocusLock from 'react-focus-lock';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Close } from '@sparkpost/matchbox-icons';
import { ScreenReaderOnly } from '../ScreenReaderOnly';
import { WindowEvent } from '../WindowEvent';
import { Button } from '../Button';
import { Portal } from '../Portal';
import { onKey } from '../../helpers/keyEvents';
import { base, isOpen, focusLock, wrapper, content, closeButton } from './styles';

const StyledBase = styled('div')`
  ${base}
  ${isOpen}
`;

const StyledWrapper = styled('div')`
  ${wrapper}
`;

const StyledCloseButton = styled(Button)`
  ${closeButton}
`;

const StyledFocusLock = styled(FocusLock)`
  ${focusLock}
`;

const StyledContent = styled('div')`
  ${content}
`;

function Modal(props) {
  const { onClose, children, containerId, className, showCloseButton, ...rest } = props;
  let container = useRef(null);
  let content = useRef(null);

  const handleKeydown = e => {
    const { open } = props;

    if (open && onClose) {
      onKey('escape', onClose)(e);
    }
  };

  const handleOutsideClick = e => {
    const { open } = props;
    const isOutside =
      content && !content.contains(e.target) && container && container.contains(e.target);

    if (open && isOutside && onClose) {
      onClose(e);
    }
  };

  return (
    <Portal containerId={containerId}>
      <StyledBase
        {...rest}
        className={className}
        onClose={onClose}
        ref={el => (container = el)}
        role="dialog"
        aria-modal="true"
      >
        <StyledWrapper>
          <ModalContent open={props.open} maxWidth={props.maxWidth}>
            <div ref={el => (content = el)}>
              <WindowEvent event="keydown" handler={handleKeydown} />

              <WindowEvent event="click" handler={handleOutsideClick} />

              {showCloseButton && (
                <StyledCloseButton flat onClick={onClose} data-id="modal-close">
                  <ScreenReaderOnly>Close</ScreenReaderOnly>

                  <Close size={34} />
                </StyledCloseButton>
              )}

              {children}
            </div>
          </ModalContent>
        </StyledWrapper>
      </StyledBase>
    </Portal>
  );
}

function ModalContent(props) {
  const { open, children, maxWidth } = props;
  const content = useRef(null);

  const handleOpen = () => {
    if (open && content.current) {
      content.current.focus();
    }
  };

  // On mount, focus
  useEffect(() => {
    handleOpen();
  }, []);

  // If open changes, handle opening
  useEffect(() => {
    handleOpen();
  }, [open]);

  return (
    <StyledFocusLock disabled={!open} maxWidth={maxWidth}>
      <Transition
        mountOnEnter
        unmountOnExit
        in={open}
        timeout={{
          enter: 0,
          exit: 150,
        }}
      >
        {/* Negative `tabIndex` required to programmatically focus */}
        {state => (
          <StyledContent state={state} tabIndex="-1" ref={content} data-id="modal-content-wrapper">
            {children}
          </StyledContent>
        )}
      </Transition>
    </StyledFocusLock>
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
  maxWidth: PropTypes.string,
  /**
   * Controls the target container ID for the rendering React portal
   */
  containerId: PropTypes.string,
};

Modal.defaultProps = {
  maxWidth: '800px',
  containerId: 'modal-portal',
};

export default Modal;
