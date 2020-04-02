import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { border, color, compose, layout, padding, typography, shadow } from 'styled-system';
import { pick } from '@styled-system/props';
import { createPropTypes } from '@styled-system/prop-types';
import TooltipOverlay from './TooltipOverlay';
import { Box } from '../Box';
import { ScreenReaderOnly } from '../ScreenReaderOnly';
import { visibility } from './styles';
import { deprecate } from '../../helpers/propTypes';

const system = compose(border, color, layout, padding, typography, shadow);

const StyledTooltipContainer = styled(Box)`
  ${visibility}
`;

const StyledContent = styled('div')`
  ${system}
`;

function Tooltip(props) {
  const [show, setshow] = React.useState(false);

  function handleShow() {
    setshow(true);
  }

  function handleHide() {
    setshow(false);
  }

  function renderA11yContent() {
    return (
      <ScreenReaderOnly>
        <span role="tooltip" aria-hidden={!show} id={props.id}>
          {props.content}
        </span>
      </ScreenReaderOnly>
    );
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
        visible={!disabled && show}
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
    const { as = 'span' } = props;

    return (
      <Box
        as={as}
        // Inline block is required to measure and set height
        display={as === 'span' ? 'inline-block' : null}
        onFocus={handleShow}
        onBlur={handleHide}
        onMouseOver={handleShow}
        onMouseOut={handleHide}
        ref={activatorRef}
      >
        {props.children}
      </Box>
    );
  }

  return (
    <TooltipOverlay
      id={props.id}
      hideTooltip={handleHide}
      portalId={props.portalId}
      renderA11yContent={renderA11yContent}
      renderTooltip={renderTooltip}
      renderActivator={renderActivator}
      visible={!props.disabled && show}
    />
  );
}

Tooltip.displayName = 'Tooltip';
Tooltip.propTypes = {
  as: PropTypes.string,
  id: PropTypes.string.isRequired,
  content: PropTypes.node,
  /**
   * Disables hover events
   */
  disabled: PropTypes.bool,
  dark: deprecate(PropTypes.bool, 'Use system props to set styles', 'error'),
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
  ...createPropTypes(color.propNames),
  ...createPropTypes(layout.propNames),
  ...createPropTypes(padding.propNames),
  ...createPropTypes(typography.propNames),
  ...createPropTypes(shadow.propNames),
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
