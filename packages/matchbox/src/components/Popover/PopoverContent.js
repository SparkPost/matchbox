import React from 'react';
import { Transition } from 'react-transition-group';
import styled from 'styled-components';
import { padding, layout, compose, variant } from 'styled-system';
import { pick } from '@styled-system/props';
import { Box } from '../Box';
import { tokens } from '@sparkpost/design-tokens';
import { secondsToMS } from '../../helpers/string';
import { content, transition } from './styles';

const system = compose(layout, padding);

const StyledContent = styled('div')`
  ${system}
  ${content}
  ${transition}
  ${variant({
    variants: {
      bottomLeft: {
        right: '0',
        left: 'auto',
        top: '100%',
        bottom: 'auto',
        mt: '100',
      },
      bottomRight: {
        left: '0',
        right: 'auto',
        top: '100%',
        bottom: 'auto',
        mt: '100',
      },
      topRight: {
        left: '0',
        right: 'auto',
        top: 'auto',
        bottom: '100%',
        mb: '100',
      },
      topLeft: {
        right: '0',
        left: 'auto',
        top: 'auto',
        bottom: '100%',
        mb: '100',
      },
    },
  })}
`;

function getPositionFromDeprecatedProps({ top, left }) {
  if (left && !top) {
    return 'bottomLeft';
  }

  if (!left && !top) {
    return 'bottomRight';
  }

  if (left && top) {
    return 'topLeft';
  }

  if (!left && top) {
    return 'topRight';
  }
}

const Content = React.forwardRef(function Content(props, userRef) {
  const {
    children,
    open,

    // TODO: to be removed
    top = false,
    left = false,
    bottom = true,

    // TODO: default to bottomRight when other deprecated props are removed
    position,
    sectioned,
    className = '',
    trigger,
    style,
    ...rest
  } = props;

  const transitionRef = React.useRef();
  const systemProps = pick(rest);

  // TODO: Remove in future
  const variant = position || getPositionFromDeprecatedProps({ top, left, bottom });

  return (
    <Transition
      mountOnEnter
      unmountOnExit
      in={open}
      timeout={{
        enter: 0,
        exit: secondsToMS(tokens.motionDuration_fast),
      }}
      nodeRef={transitionRef}
    >
      {state => (
        <Box position="relative" height="100%" ref={userRef} tabIndex="-1">
          <StyledContent
            data-id="popover-content"
            className={className}
            p={sectioned ? '400' : null}
            minWidth="13rem" // 208px
            variant={variant}
            // TODO: remove in future, isTop is still needed for animation
            isTop={variant.includes('top')}
            state={state}
            {...style}
            {...systemProps}
            ref={transitionRef}
          >
            <div>{children}</div>
          </StyledContent>
        </Box>
      )}
    </Transition>
  );
});

Content.displayName = 'Popover.Content';
export default Content;
