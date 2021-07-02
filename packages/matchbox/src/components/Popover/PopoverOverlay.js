import React from 'react';
import PropTypes from 'prop-types';
import { WindowEvent } from '../WindowEvent';
import { Portal } from '../Portal';
import { Box } from '../Box';
import { getPositionFor } from '../../helpers/geometry';
import { tokens } from '@sparkpost/design-tokens';

const defaultPosition = {
  top: 0,
  left: 0,
  width: 0,
  height: 0,
};

function PopoverOverlay(props) {
  const [position, setPosition] = React.useState(defaultPosition);
  const activatorRef = React.useRef(null);
  const { as, id, open, renderPopover, renderActivator, portalId } = props;

  function handleMeasurement() {
    setPosition(getPositionFor(activatorRef.current));
  }

  React.useEffect(() => {
    handleMeasurement();
  }, [open]);

  return (
    <>
      <WindowEvent event="resize" handler={handleMeasurement} />
      <Box
        as={as}
        // Inline block is required to measure and set height correctly on spans
        display={as === 'span' ? 'inline-block' : null}
        position="relative"
      >
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
            left={`${position.left}px`}
            top={`${position.top}px`}
            height={`${position.height}px`}
            width={`${position.width}px`}
            zIndex={tokens.zIndex_overlay + 1}
            style={{ pointerEvents: 'none' }}
          >
            {renderPopover()}
          </Box>
        </Portal>
      </Box>
    </>
  );
}
PopoverOverlay.displayName = 'PopoverOverlay';
PopoverOverlay.propTypes = {
  renderActivator: PropTypes.func.isRequired,
  renderPopover: PropTypes.func.isRequired,
};

export default PopoverOverlay;
