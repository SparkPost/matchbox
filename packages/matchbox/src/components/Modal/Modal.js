import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { createPropTypes } from '@styled-system/prop-types';
import styled from 'styled-components';
import { padding, maxWidth } from 'styled-system';
import FocusLock from 'react-focus-lock';
import { Transition } from 'react-transition-group';
import ScrollLock, { TouchScrollable } from 'react-scrolllock';
import { tokens } from '@sparkpost/design-tokens';
import { Box } from '../Box';
import { Portal } from '../Portal';
import { useWindowEvent } from '../../hooks';
import { onKey } from '../../helpers/keyEvents';
import { secondsToMS } from '../../helpers/string';
import { getChild } from '../../helpers/children';
import { isInIframe } from '../../helpers/window';
import { base, focusLock, wrapper, content, contentAnimation } from './styles';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Legacy from './Legacy';

const StyledBase = styled('div')`
  ${base}
  ${padding}
`;

const StyledWrapper = styled('div')`
  ${wrapper}
`;

const StyledFocusLock = styled(FocusLock)`
  ${focusLock}
`;

const StyledContent = styled('div')`
  ${content}
  ${contentAnimation}
`;

const Modal = React.forwardRef(function Modal(props, ref) {
  const {
    children,
    className,
    closeOnEscape,
    closeOnOutsideClick,
    onClose,
    open,
    portalId,
    maxWidth,
    ...rest
  } = props;

  const overlayRef = useRef();
  const contentRef = useRef();

  // Calls onClose when clicking outside drawer content
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
            <Box p={['400', null, '700']} size="100%" ref={overlayRef}>
              <StyledWrapper>
                <StyledFocusLock disabled={!open || isInIframe()}>
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
                      <StyledContent
                        state={state}
                        tabIndex="-1"
                        ref={ref}
                        data-id="modal-content-wrapper"
                      >
                        <Box ref={contentRef} width="100%" maxWidth={maxWidth} bg="white">
                          {getChild('Modal.Header', children, { onClose })}
                          {getChild('Modal.Content', children, { ref, open })}
                          {getChild('Modal.Footer', children)}
                        </Box>
                      </StyledContent>
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
});

Modal.displayName = 'Modal';

Modal.propTypes = {
  children: PropTypes.node,
  closeOnEscape: PropTypes.bool,
  closeOnOutsideClick: PropTypes.bool,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  portalId: PropTypes.string,
  maxWidth: PropTypes.string,
  ...createPropTypes(padding.propNames),
  ...createPropTypes(maxWidth.propNames),
};

Modal.defaultProps = {
  closeOnEscape: true,
  closeOnOutsideClick: true,
  maxWidth: '1200',
};

Modal.Header = Header;
Modal.Content = Content;
Modal.Footer = Footer;
Modal.LEGACY = Legacy;

export default Modal;
