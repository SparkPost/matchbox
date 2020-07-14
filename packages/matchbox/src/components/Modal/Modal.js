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
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useWindowEvent } from '../../hooks';
import { onKey } from '../../helpers/keyEvents';
import { secondsToMS } from '../../helpers/string';
import { getRectFor } from '../../helpers/geometry';
import { getChild } from '../../helpers/children';
import { isInIframe } from '../../helpers/window';
import { Overlay, Container } from './styles';
import { base, focusLock, wrapper, content, contentAnimation, closeButton } from './styles';

import Legacy from './Legacy';

const StyledBase = styled('div')`
  ${base}
  ${padding}
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
      childrenRef.current &&
      !childrenRef.current.contains(e.target);

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
        <StyledBase
          open={open}
          {...rest}
          className={className}
          onClose={onClose}
          ref={ref}
          role="dialog"
          aria-modal="true"
        >
          <Box p={['400', null, '700']} size="100%" ref={overlayRef}>
            <div>Modal</div>
          </Box>
        </StyledBase>
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
  position: 'right',
};

Modal.LEGACY = Legacy;

export default Modal;
