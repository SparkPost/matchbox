import React from 'react';
import PropTypes from 'prop-types';
import { WindowEvent } from '../WindowEvent';
import { debounce } from '../../helpers/event';
import { getPositionFor, getPreferredDirectionFor } from '../../helpers/geometry';
import { tokens } from '@sparkpost/design-tokens';
import { Box } from '../Box';

const defaultPosition = {
  top: 0,
  left: 0,
  width: 0,
  height: 0,
};

const defaultDirection = {
  top: null,
  bottom: null,
  left: null,
  right: null,
};

function TooltipOverlay(props) {
  const [position, setPosition] = React.useState(defaultPosition);
  const [preferredDirection, setPreferredDirection] = React.useState(defaultDirection);
  const activatorRef = React.useRef(null);

  const { id, renderTooltip, renderActivator, eventDebounce, visible } = props;

  function handleMeasurement() {
    if (activatorRef.current) {
      setPosition(getPositionFor(activatorRef.current));
      setPreferredDirection(getPreferredDirectionFor(activatorRef.current));
    }
  }

  React.useLayoutEffect(() => {
    handleMeasurement();
  }, [renderTooltip, renderActivator, activatorRef]);

  return (
    <>
      <WindowEvent event="resize" handler={debounce(handleMeasurement, eventDebounce)} />
      <WindowEvent event="scroll" handler={debounce(handleMeasurement, eventDebounce)} />
      {renderActivator({ activatorRef })}
      <Box
        {...(!visible ? { 'aria-hidden': true } : {})}
        as="span"
        id={id}
        position="absolute"
        // Fixes this wrapper to the top and left of viewport
        // Handles any potential 'position: relative' on a parent
        top={-position.top}
        left={-position.left}
        style={{
          pointerEvents: 'none',
        }}
        zIndex={tokens.zIndex_overlay} // TODO add zindices to styled system theme
      >
        <Box as="span" position="absolute" {...position}>
          {renderTooltip({ preferredDirection })}
        </Box>
      </Box>
    </>
  );
}

TooltipOverlay.displayName = 'TooltipOverlay';

TooltipOverlay.defaultProps = {
  eventDebounce: 400,
};

TooltipOverlay.propTypes = {
  renderActivator: PropTypes.func.isRequired,
  renderTooltip: PropTypes.func.isRequired,
  eventDebounce: PropTypes.number,
};

export default TooltipOverlay;
