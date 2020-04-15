import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import { tokens } from '@sparkpost/design-tokens';
import { Box } from '../Box';
import { Portal } from '../Portal';
import { useWindowEvent } from '../../hooks';
import { onKey } from '../../helpers/keyEvents';
import { secondsToMS } from '../../helpers/string';
import { Overlay } from './styles';

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
          exit: secondsToMS(tokens.motionDuration_slow),
        }}
      >
        {state => (
          <Box
            style={{ pointerEvents: 'none' }}
            position="fixed"
            top="0"
            left="0"
            height="100vh"
            width="100vw"
            zIndex={tokens.zIndex_overlay} // TODO use zindex theme values after FE-1011
          >
            <Overlay state={state} ref={overlayRef} />
            <Box
              ref={childrenRef}
              id={id}
              aria-modal="true"
              role="dialog"
              bg="white"
              position="absolute"
              top="0"
              bottom="0"
              right={position === 'right' ? '0' : 'auto'}
              left={position === 'left' ? '0' : 'auto'}
            >
              <Box>{children}</Box>
            </Box>
          </Box>
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

export default Drawer;
