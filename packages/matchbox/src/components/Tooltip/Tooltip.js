import React from 'react';
import PropTypes from 'prop-types';
import TooltipOverlay from './TooltipOverlay';
import { Box } from '../Box';

import styled from 'styled-components';
import { visibility } from './styles';
import { deprecate } from '../../helpers/propTypes';
import { border, shadow, background, padding, typography, compose } from 'styled-system';
import { pick } from '@styled-system/props';
import { createPropTypes } from '@styled-system/prop-types';

const system = compose(border, shadow, background, padding, typography);

const StyledTooltipContainer = styled(Box)`
  ${visibility}
`;

const StyledContent = styled(Box)`
  ${system}
`;

function Tooltip(props) {
  const [hover, setHover] = React.useState(false);

  function handleMouseOver() {
    setHover(true);
  }

  function handleMouseOut() {
    setHover(false);
  }

  function renderTooltip({ preferredDirection }) {
    const {
      content,
      dark, // TODO deprecate in favor of system props
      top,
      left,
      // These two props are broken
      right, // Omitting as this is a valid system prop
      bottom, // Omitting as this is a valid system prop
      forcePosition,
      disabled,
      width = '13rem',
      ...rest
    } = props;

    const systemProps = pick(rest);
    const positionTop = preferredDirection.top || (top && !forcePosition);
    const positionLeft = preferredDirection.left || (left && !forcePosition);

    const contentStyles = {
      ...systemProps,
      ...(dark ? { bg: 'gray.1000' } : {}), // TODO deprecate in favor of system props
    };

    return (
      <StyledTooltipContainer
        display="block"
        position="absolute"
        top={positionTop ? 'auto' : '100%'}
        bottom={positionTop ? '100%' : 'auto'}
        left={positionLeft ? 'auto' : '0'}
        right={positionLeft ? '0' : 'auto'}
        // Tooltip gap to activator
        mt={positionTop ? '0' : '100'}
        mb={positionTop ? '100' : '0'}
        visible={!disabled && hover}
      >
        <StyledContent
          position="relative"
          fontSize="200"
          lineHeight="200"
          p="300"
          borderRadius="100"
          bg="gray.1000"
          color="white"
          textAlign="left"
          width={width}
          zIndex="1"
          {...contentStyles}
        >
          <Box overflow="hidden" maxHeight="11rem">
            {content}
          </Box>
        </StyledContent>
      </StyledTooltipContainer>
    );
  }

  function renderActivator({ activatorRef }) {
    return (
      <Box
        display="inline-block"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        ref={activatorRef}
      >
        {props.children}
      </Box>
    );
  }

  return (
    <TooltipOverlay
      eventDebounce={props.eventDebounce}
      portalId={props.portalId}
      renderTooltip={renderTooltip}
      renderActivator={renderActivator}
    />
  );
}
Tooltip.displayName = 'Tooltip';
Tooltip.propTypes = {
  content: PropTypes.node,
  /**
   * Disables hover events
   */
  disabled: PropTypes.bool,
  dark: deprecate(PropTypes.bool, 'Use system props to set styles'),
  active: PropTypes.bool,
  left: PropTypes.bool,
  right: PropTypes.bool,
  top: PropTypes.bool,
  bottom: PropTypes.bool,
  horizontalOffset: PropTypes.string, // TODO Either deprecate or style Tooltip tips
  /**
   * Disables automatic positioning
   */
  forcePosition: PropTypes.bool,
  children: PropTypes.node,
  /**
   * These props are provided automatically through the Overlay component
   */
  preferredDirection: PropTypes.shape({
    top: PropTypes.bool,
    bottom: PropTypes.bool,
    left: PropTypes.bool,
    right: PropTypes.bool,
  }),
  /**
   * Element ID for the portal that will house tooltips. Appends to body if not provided.
   */
  portalId: PropTypes.string,
  ...createPropTypes(border.propNames),
  ...createPropTypes(shadow.propNames),
  ...createPropTypes(background.propNames),
  ...createPropTypes(padding.propNames),
  ...createPropTypes(typography.propNames),
};

Tooltip.defaultProps = {
  right: true,
  bottom: true,
  horizontalOffset: '0px',
  forcePosition: false,
  preferredDirection: {
    bottom: true,
    left: false,
    right: true,
    top: false,
  },
};

export default Tooltip;
