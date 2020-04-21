import React from 'react';
import PropTypes from 'prop-types';
import FocusLock from 'react-focus-lock';
import { Transition } from 'react-transition-group';
import { tokens } from '@sparkpost/design-tokens';
import { Box } from '../Box';
import { Portal } from '../Portal';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useWindowEvent } from '../../hooks';
import { onKey } from '../../helpers/keyEvents';
import { secondsToMS } from '../../helpers/string';
import { getChild } from '../../helpers/children';
import { Overlay, Container } from './styles';

function Drawer(props) {
  const {
    children,
    closeOnEscape,
    closeOnOutsideClick,
    id,
    onChange,
    onClose,
    open,
    portalId,
    position,
  } = props;

  const overlayRef = React.useRef();
  const childrenRef = React.useRef();

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

  React.useEffect(() => {
    if (onChange) {
      onChange(open);
    }
  }, [open]);

  return (
    <Portal containerId={portalId}>
      <Transition
        mountOnEnter
        unmountOnExit
        in={open}
        timeout={{
          enter: 0,
          exit: secondsToMS(tokens.motionDuration_medium),
        }}
      >
        {state => (
          <FocusLock returnFocus>
            <Box
              data-id="drawer-wrapper"
              height="100vh"
              left="0"
              position="fixed"
              style={{ pointerEvents: 'none' }}
              top="0"
              width="100vw"
              zIndex={tokens.zIndex_overlay} // TODO use zindex theme values after FE-1011
            >
              <Overlay data-id="drawer-overlay" ref={overlayRef} state={state} />
              <Container
                aria-modal="true"
                data-id="drawer-container"
                id={id}
                position={position}
                ref={childrenRef}
                role="dialog"
                state={state}
              >
                <Box overflowY="scroll" position="relative" height="100%">
                  {getChild('Drawer.Header', children, { onClose })}
                  {getChild('Drawer.Content', children)}
                  {getChild('Drawer.Footer', children)}
                </Box>
              </Container>
            </Box>
          </FocusLock>
        )}
      </Transition>
    </Portal>
  );
}

Drawer.displayName = 'Drawer';

Drawer.propTypes = {
  children: PropTypes.node,
  closeOnEscape: PropTypes.bool,
  closeOnOutsideClick: PropTypes.bool,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  portalId: PropTypes.string,
  position: PropTypes.oneOf(['right', 'left']),
};

Drawer.defaultProps = {
  closeOnEscape: true,
  closeOnOutsideClick: true,
  position: 'right',
};

Drawer.Footer = Footer;
Drawer.Content = Content;
Drawer.Header = Header;

export default Drawer;
