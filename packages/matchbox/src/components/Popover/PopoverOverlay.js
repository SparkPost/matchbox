import React from 'react';
import PropTypes from 'prop-types';
import { WindowEvent } from '../WindowEvent';
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
  let activatorRef = React.useRef(null);
  const { as, id, open, renderPopover, renderActivator } = props;

  function handleMeasurement() {
    setPosition(getPositionFor(activatorRef));
  }

  React.useEffect(() => {
    handleMeasurement();
  }, [open]);

  return (
    <>
      {open && <WindowEvent event="resize" handler={handleMeasurement} />}
      <Box
        as={as}
        // Inline block is required to measure and set height correctly on spans
        display={as === 'span' ? 'inline-block' : null}
        position="relative"
      >
        {renderActivator({
          activatorRef: node => {
            activatorRef = node;
          },
        })}
        <Box
          {...(!open ? { 'aria-hidden': true } : {})}
          id={id}
          position="absolute"
          top="0"
          left="0"
          height={`${position.height}px`}
          width={`${position.width}px`}
          zIndex={tokens.zIndex_overlay}
          style={{ pointerEvents: 'none' }}
        >
          {renderPopover()}
        </Box>
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
