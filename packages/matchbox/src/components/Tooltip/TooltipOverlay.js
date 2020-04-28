import React from 'react';
import PropTypes from 'prop-types';
import { Portal } from '../Portal';
import { WindowEvent } from '../WindowEvent';
import { getPositionFor, getPreferredDirectionFor } from '../../helpers/geometry';
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

  const {
    renderA11yContent,
    renderTooltip,
    renderActivator,
    hideTooltip,
    visible,
    portalId,
  } = props;

  function handleMeasurement() {
    if (activatorRef.current && visible) {
      setPosition(getPositionFor(activatorRef.current));
      setPreferredDirection(getPreferredDirectionFor(activatorRef.current));
    }
  }

  // Tooltips are fixed to the window and do not reposition on scroll
  // This hides them since scrolling does not automatically trigger `mouseOut`
  function handleScroll() {
    if (visible) {
      hideTooltip();
    }
  }

  React.useLayoutEffect(() => {
    handleMeasurement();
  }, [renderTooltip, renderActivator, activatorRef, visible]);

  return (
    <>
      <WindowEvent event="scroll" handler={handleScroll} />
      {renderActivator({ activatorRef })}
      {renderA11yContent()}
      <Portal containerId={portalId}>
        <Box
          aria-hidden="true"
          position="absolute"
          top="0"
          left="0"
          style={{
            pointerEvents: 'none',
          }}
        >
          <Box
            position="absolute"
            top={`${position.top}px`}
            left={`${position.left}px`}
            height={`${position.height}px`}
            width={`${position.width}px`}
            zIndex="overlay"
          >
            {renderTooltip({ preferredDirection })}
          </Box>
        </Box>
      </Portal>
    </>
  );
}

TooltipOverlay.displayName = 'TooltipOverlay';
TooltipOverlay.propTypes = {
  renderActivator: PropTypes.func.isRequired,
  renderTooltip: PropTypes.func.isRequired,
};

export default TooltipOverlay;
