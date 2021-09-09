import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { maxWidth, MaxWidthProps } from 'styled-system';
import FocusLock from 'react-focus-lock';
import { Transition } from 'react-transition-group';
import ScrollLock, { TouchScrollable } from 'react-scrolllock';
import { tokens } from '@sparkpost/design-tokens';
import { Box } from '../Box';
import { Portal } from '../Portal';
import { useWindowEvent } from '../../hooks';
import { onKey } from '../../helpers/keyEvents';
import { secondsToMS } from '../../helpers/string';
import { isInIframe } from '../../helpers/window';
import { ModalContext } from './context';
import { base, focusLock, wrapper, content, contentAnimation } from './styles';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Legacy from './Legacy';

const StyledBase = styled('div')<{ $open?: boolean }>`
  ${base}
`;

const StyledWrapper = styled('div')`
  ${wrapper}
`;

const StyledFocusLock = styled(FocusLock)`
  ${focusLock}
`;

const StyledContent = styled(Box)<{ $state?: 'entered' | 'exiting' | 'exited' }>`
  ${content}
  ${contentAnimation}
`;

export type ModalProps = {
  children?: React.ReactNode;
  className?: string;
  closeOnEscape?: boolean;
  closeOnOutsideClick?: boolean;
  onClose?: () => void;
  open: boolean;
  portalId?: string;
  maxWidth?: string;
} & MaxWidthProps;

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(function Modal(props, userRef) {
  const {
    children,
    className,
    closeOnEscape = true,
    closeOnOutsideClick = true,
    onClose,
    open,
    portalId,
    maxWidth = '1200',
  } = props;

  const overlayRef = useRef<HTMLDivElement>();
  const contentRef = useRef<HTMLDivElement>();
  const transitionRef = useRef<HTMLDivElement>();

  // Calls onClose when clicking outside modal content
  function handleOutsideClick(e) {
    if (!closeOnOutsideClick) {
      return;
    }

    const isOutside =
      overlayRef.current &&
      overlayRef.current.contains(e.target) &&
      contentRef.current &&
      !contentRef.current.contains(e.target);

    if (isOutside && open && onClose) {
      onClose();
    }
  }

  // Calls onClose when receiving a escape keydown event
  function handleEscape(e) {
    if (closeOnEscape && open && onClose) {
      onKey('escape', onClose)(e);
    }
  }

  useWindowEvent('keydown', handleEscape);
  useWindowEvent('click', handleOutsideClick);

  // Focuses container when opening
  React.useLayoutEffect(() => {
    if (open) {
      contentRef.current.focus();
    }
  }, [open]);

  return (
    <>
      <ScrollLock isActive={open} />
      <Portal containerId={portalId}>
        <TouchScrollable>
          <StyledBase $open={open} className={className} role="dialog" aria-modal="true">
            <Box size="100%" ref={overlayRef} data-id="modal-overlay">
              <StyledWrapper>
                <StyledFocusLock disabled={!open || isInIframe()} returnFocus>
                  <Transition
                    mountOnEnter
                    unmountOnExit
                    in={open}
                    timeout={{
                      enter: secondsToMS(tokens.motionDuration_medium),
                      exit: secondsToMS(tokens.motionDuration_fast),
                    }}
                    nodeRef={transitionRef}
                  >
                    {/* Negative `tabIndex` required to programmatically focus */}
                    {(state) => (
                      <div ref={transitionRef}>
                        <StyledContent
                          $state={state}
                          tabIndex={-1}
                          ref={userRef}
                          display="flex"
                          justifyContent="center"
                          data-id="modal-content-wrapper"
                          p={['400', null, '700']}
                        >
                          <Box
                            ref={contentRef}
                            width="100%"
                            maxWidth={maxWidth}
                            bg="white"
                            tabIndex={-1}
                            data-id="modal-content-panel"
                          >
                            <ModalContext.Provider value={{ onClose, open }}>
                              {children}
                            </ModalContext.Provider>
                          </Box>
                        </StyledContent>
                      </div>
                    )}
                  </Transition>
                </StyledFocusLock>
              </StyledWrapper>
            </Box>
          </StyledBase>
        </TouchScrollable>
      </Portal>
    </>
  );
}) as React.ForwardRefExoticComponent<ModalProps> & {
  Header: typeof Header;
  Content: typeof Content;
  Footer: typeof Footer;
  LEGACY: typeof Legacy;
};

Modal.displayName = 'Modal';

Modal.Header = Header;
Modal.Content = Content;
Modal.Footer = Footer;
Modal.LEGACY = Legacy;

export default Modal;
