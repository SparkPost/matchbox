import React from 'react';
import PropTypes from 'prop-types';
import { WindowEvent } from '../WindowEvent';
import { Portal } from '../Portal';
import { Box } from '../Box';
import { getPositionFor } from '../../helpers/geometry';

const defaultPosition = {
  top: 0,
  left: 0,
  width: 0,
  height: 0,
};

function PopoverOverlay(props) {
  const [position, setPosition] = React.useState(defaultPosition);
  const activatorRef = React.useRef(null);
  const { id, open, renderPopover, renderActivator, portalId } = props;

  function handleMeasurement() {
    setPosition(getPositionFor(activatorRef.current));
  }

  React.useEffect(() => {
    handleMeasurement();
  }, [open]);

  return (
    <>
      {open && <WindowEvent event="resize" handler={handleMeasurement} />}

      {renderActivator({
        activatorRef: node => {
          activatorRef.current = node;
        },
      })}

      <Portal containerId={portalId}>
        <Box
          {...(!open ? { 'aria-hidden': true } : {})}
          id={id}
          position="absolute"
          top={`${position.top}px`}
          left={`${position.left}px`}
          height={`${position.height}px`}
          width={`${position.width}px`}
          zIndex="overlay"
          style={{ pointerEvents: 'none' }}
        >
          {renderPopover()}
        </Box>
      </Portal>
    </>
  );
}
PopoverOverlay.displayName = 'PopoverOverlay';
PopoverOverlay.propTypes = {
  renderActivator: PropTypes.func.isRequired,
  renderPopover: PropTypes.func.isRequired,
};

export default PopoverOverlay;
