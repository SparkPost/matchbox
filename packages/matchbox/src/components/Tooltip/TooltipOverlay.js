import React from 'react';
import PropTypes from 'prop-types';
import { WindowEvent } from '../WindowEvent';
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

  const { as, id, renderTooltip, renderActivator, hideTooltip, visible } = props;

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
      <Box as={as} display={as === 'span' ? 'inline-block' : null} position="relative">
        {renderActivator({ activatorRef })}
        <Box
          as="span"
          display="inline-block"
          position="absolute"
          {...(!visible ? { 'aria-hidden': true } : {})}
          id={id}
          top="0"
          left="0"
          width={position.width}
          height={position.height}
          zIndex={tokens.zIndex_overlay} // TODO add zindices to styled system theme
          style={{
            pointerEvents: 'none',
          }}
        >
          {renderTooltip({ preferredDirection })}
        </Box>
      </Box>
    </>
  );
}

TooltipOverlay.displayName = 'TooltipOverlay';
TooltipOverlay.propTypes = {
  renderActivator: PropTypes.func.isRequired,
  renderTooltip: PropTypes.func.isRequired,
};

export default TooltipOverlay;
