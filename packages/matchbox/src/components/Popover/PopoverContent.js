import React from 'react';
import { Transition } from 'react-transition-group';
import styled from 'styled-components';
import { padding, layout, compose } from 'styled-system';
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
`;

function Content(props) {
  const {
    children,
    popoverRef,
    open,
    top,
    left,
    bottom = true,
    right = true,
    sectioned,
    className = '',
    trigger,
    style,
    ...rest
  } = props;

  const systemProps = pick(rest);

  return (
    <Transition
      mountOnEnter
      unmountOnExit
      in={open}
      timeout={{
        enter: secondsToMS(tokens.motionDuration_medium),
        exit: secondsToMS(tokens.motionDuration_fast),
      }}
    >
      {state => (
        <Box position="relative" height="100%" ref={popoverRef}>
          <StyledContent
            data-id="popover-content"
            className={className}
            p={sectioned ? '400' : null}
            minWidth="13rem" // 208px
            isTop={top}
            isBottom={bottom}
            isLeft={left}
            isRight={right}
            state={state}
            {...style}
            {...systemProps}
          >
            <div>{children}</div>
          </StyledContent>
        </Box>
      )}
    </Transition>
  );
}

Content.displayName = 'Popover.Content';
export default Content;
