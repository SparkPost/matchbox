import React, { useRef } from 'react';
import { Transition } from 'react-transition-group';
import FocusLock from 'react-focus-lock';
import ScrollLock, { TouchScrollable } from 'react-scrolllock';
import styled from 'styled-components';
import { padding, maxWidth } from 'styled-system';
import { createPropTypes } from '@styled-system/prop-types';
import PropTypes from 'prop-types';
import { tokens } from '@sparkpost/design-tokens';
import { Close } from '@sparkpost/matchbox-icons';
import { ScreenReaderOnly } from '../ScreenReaderOnly';
import { WindowEvent } from '../WindowEvent';
import { Button } from '../Button';
import { Box } from '../Box';
import { Portal } from '../Portal';
import { onKey } from '../../helpers/keyEvents';
import { secondsToMS } from '../../helpers/string';
import { isInIframe } from '../../helpers/window';
import { base, focusLock, wrapper, content, contentAnimation, closeButton } from './styles';

const StyledBase = styled('div')`
  ${base}
  ${padding}
`;

const StyledWrapper = styled('div')`
  ${wrapper}
`;

const StyledCloseButton = styled(Button)`
  ${closeButton}
`;

const StyledFocusLock = styled(FocusLock)`
  ${focusLock}
  ${maxWidth}
`;

const StyledContent = styled('div')`
  ${content}
  ${contentAnimation}
`;

const Modal = React.forwardRef(function Modal(props, userRef) {
  const {
    onClose,
    children,
    portalId,
    className,
    showCloseButton,
    maxWidth,
    open,
    ...rest
  } = props;
  const container = useRef();
  const content = useRef();

  const handleKeydown = e => {
    if (open && onClose) {
      onKey('escape', onClose)(e);
    }
  };

  const handleOutsideClick = e => {
    const isOutside =
      content &&
      !content.current.contains(e.target) &&
      container &&
      container.current.contains(e.target);

    if (open && isOutside && onClose) {
      onClose(e);
    }
  };

  return (
    <>
      <ScrollLock isActive={open} />
      <Portal containerId={portalId}>
        <TouchScrollable>
          <StyledBase
            open={open}
            {...rest}
            className={className}
            onClose={onClose}
            role="dialog"
            aria-modal="true"
          >
            {/*
              Ref can't be a direct child of TouchScrollable
              See https://github.com/jossmac/react-scrolllock/issues/67
            */}
            <Box p={['400', null, '700']} size="100%" ref={container}>
              <StyledWrapper>
                <div ref={content}>
                  <ModalContent open={open} maxWidth={maxWidth} ref={userRef}>
                    <WindowEvent event="keydown" handler={handleKeydown} />
                    <WindowEvent event="click" handler={handleOutsideClick} />

                    {showCloseButton && (
                      <StyledCloseButton flat onClick={onClose} data-id="modal-close">
                        <ScreenReaderOnly>Close</ScreenReaderOnly>

                        <Close size={24} />
                      </StyledCloseButton>
                    )}
                    {children}
                  </ModalContent>
                </div>
              </StyledWrapper>
            </Box>
          </StyledBase>
        </TouchScrollable>
      </Portal>
    </>
  );
});

const ModalContent = React.forwardRef(function ModalContent(props, userRef) {
  const { open, children, maxWidth } = props;

  return (
    <StyledFocusLock disabled={!open || isInIframe()} maxWidth={maxWidth}>
      <Transition
        mountOnEnter
        unmountOnExit
        in={open}
        timeout={{
          enter: secondsToMS(tokens.motionDuration_medium),
          exit: secondsToMS(tokens.motionDuration_fast),
        }}
      >
        {/* Negative `tabIndex` required to programmatically focus */}
        {state => (
          <StyledContent state={state} tabIndex="-1" ref={userRef} data-id="modal-content-wrapper">
            {children}
          </StyledContent>
        )}
      </Transition>
    </StyledFocusLock>
  );
});

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
  portalId: PropTypes.string,
  ...createPropTypes(padding.propNames),
  ...createPropTypes(maxWidth.propNames),
};

Modal.defaultProps = {
  maxWidth: '1200',
};

export default Modal;
