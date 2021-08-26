import React from 'react';
import { Transition } from 'react-transition-group';
import styled from 'styled-components';
import {
  border,
  BorderProps,
  color,
  ColorProps,
  compose,
  layout,
  LayoutProps,
  padding,
  PaddingProps,
  typography,
  TypographyProps,
  shadow,
  ShadowProps,
} from 'styled-system';
import { pick } from '@styled-system/props';
import { tokens } from '@sparkpost/design-tokens';
import TooltipOverlay from './TooltipOverlay';
import { Box } from '../Box';
import { ScreenReaderOnly } from '../ScreenReaderOnly';
import { visibility } from './styles';
import { secondsToMS } from '../../helpers/string';

const system = compose(border, color, layout, padding, typography, shadow);

const StyledTooltipContainer = styled(Box)<{
  $visible?: boolean;
  $state?: string;
}>`
  ${visibility}
`;

const StyledContent = styled('div')`
  ${system}
`;

type TooltipProps = {
  as?: 'span' | 'div';
  id: string;
  content?: React.ReactNode;
  /**
   * Disables hover events
   */
  disabled?: boolean;
  /**
   * @deprecated Use system props to set styles
   */
  dark?: boolean;
  left?: boolean;
  right?: boolean;
  top?: boolean;
  bottom?: boolean;
  /**
   * Disables automatic positioning
   */
  forcePosition?: boolean;
  children?: React.ReactNode;
  /**
   * Element ID for the portal that will house tooltips. Appends to body if not provided.
   */
  portalId?: string;
} & BorderProps &
  ColorProps &
  LayoutProps &
  PaddingProps &
  TypographyProps &
  ShadowProps;

function Tooltip(props: TooltipProps): JSX.Element {
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
      forcePosition = false,
      disabled,
      width = '13rem',
      ...rest
    } = props;

    const transitionRef = React.useRef();
    const systemProps = pick(rest);
    const positionTop = preferredDirection.top || (top && !forcePosition);
    const positionLeft = preferredDirection.left || (left && !forcePosition);

    const contentStyles = {
      ...systemProps,
      ...(dark ? { bg: 'gray.1000' } : {}), // TODO deprecate in favor of system props
    };

    return (
      <Transition
        mountOnEnter
        unmountOnExit
        in={show}
        timeout={{
          enter: secondsToMS(tokens.motionDuration_medium),
          exit: 0,
        }}
        nodeRef={transitionRef}
      >
        {(state) => (
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
            $visible={!disabled && show}
            $state={state}
            ref={transitionRef}
          >
            <StyledContent
              position="relative"
              fontSize="100"
              lineHeight="100"
              p="200"
              borderRadius="100"
              bg="gray.1000"
              color="white"
              textAlign="left"
              width={width}
              zIndex="default"
              {...contentStyles}
            >
              <Box overflow="hidden" maxHeight="11rem">
                {content}
              </Box>
            </StyledContent>
          </StyledTooltipContainer>
        )}
      </Transition>
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
export default Tooltip;
