import React from 'react';
import PropTypes from 'prop-types';
import { Portal } from '../Portal';
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

  const { renderTooltip, renderActivator, eventDebounce, portalId } = props;

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
      <Portal containerId={portalId}>
        <Box
          position="absolute"
          zIndex={tokens.zIndex_overlay} // TODO add zindices to styled system theme
          {...position}
          style={{
            pointerEvents: 'none',
          }}
        >
          {renderTooltip({ preferredDirection })}
        </Box>
      </Portal>
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
