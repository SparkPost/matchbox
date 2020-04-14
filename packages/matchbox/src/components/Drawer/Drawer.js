import React from 'react';
import PropTypes from 'prop-types';
import { tokens } from '@sparkpost/design-tokens';
import { Box } from '../Box';
import { Portal } from '../Portal';
import { useWindowEvent } from '../../hooks';

function Drawer(props) {
  const {
    children,
    // closeOnEscape,
    // closeOnOutsideClick,
    // id,
    onChange,
    onClose,
    open,
    portalId,
    position,
  } = props;

  const overlayRef = React.useRef();
  const childrenRef = React.useRef();

  function handleOutsideClick() {}

  function handleEscape() {}

  useWindowEvent('keyDown', handleEscape);
  useWindowEvent('click', handleOutsideClick);

  React.useEffect(() => {
    if (onChange) {
      onChange(open);
    }

    if (onClose && !open) {
      onClose();
    }
  }, [open]);

  return (
    <Portal containerId={portalId}>
      <Box
        position="fixed"
        top="0"
        left="0"
        height="100vh"
        width="100vw"
        bg="gray.900"
        opacity="0.7"
        ref={overlayRef}
        zIndex={tokens.zIndex_overlay} // TODO use zindex theme values after FE-1011
      >
        <Box
          ref={childrenRef}
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
