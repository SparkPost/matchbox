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
  ${'' /* TODO Expand this to include top and bottom */}
  ${variant({
    variants: {
      isLeft: {
        right: '0',
        left: 'auto',
      },
      isRight: {
        left: '0',
        right: 'auto',
      },
    },
  })}
`;

const Content = React.forwardRef(function Content(props, userRef) {
  const {
    children,
    open,
    top = false,
    left = false,
    bottom = true,
    // right = true,
    sectioned,
    className = '',
    trigger,
    style,
    ...rest
  } = props;

  const transitionRef = React.useRef();

  const systemProps = pick(rest);

  // Allows for responsive positioning arrays
  const horizontalPosition = React.useMemo(() => {
    if (typeof left === 'object') {
      return left.map(bool => (bool ? 'isLeft' : 'isRight'));
    }

    return left ? 'isLeft' : 'isRight';
  });

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
            isTop={top}
            isBottom={bottom}
            variant={horizontalPosition}
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
