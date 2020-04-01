import React from 'react';
import { Transition } from 'react-transition-group';
import styled from 'styled-components';
import { padding, layout, compose } from 'styled-system';
import { pick } from '@styled-system/props';
import { Box } from '../Box';
import { tokens } from '@sparkpost/design-tokens';

const system = compose(layout, padding);

const StyledContent = styled('div')`
  ${system}
  position: absolute;
  background: ${tokens.color_white};
  border: ${tokens.borderWidth_100} solid ${tokens.color_gray_400};
  border-radius: ${tokens.borderRadius_100};
  box-shadow: ${tokens.boxShadow_100};
  margin-top: ${props => (props.isTop ? tokens.spacing_0 : tokens.spacing_100)};
  margin-bottom: ${props => (props.isTop ? tokens.spacing_100 : tokens.spacing_0)};

  left: ${props => (props.isLeft ? 'auto' : '0')};
  right: ${props => (!props.isLeft ? 'auto' : '0')};
  top: ${props => (props.isTop ? 'auto' : '100%')};
  bottom: ${props => (!props.isTop ? 'auto' : '100%')};

  ${props => {
    switch (props.state) {
      case 'entered':
      case 'entering':
        return `
          pointer-events: auto;
          opacity: 1;
          transition: opacity ${tokens.motionDuration_medium} ${tokens.motionEase_out};
        `;
      case 'exiting':
      case 'exited':
      default:
        return `
          pointer-events: none;
          opacity: 0;
          transition: opacity ${tokens.motionDuration_fast} ${tokens.motionEase_in};
        `;
    }
  }}
`;

const fastInMs = tokens.motionDuration_fast.replace('s', '') * 1000;

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
    <Transition mountOnEnter unmountOnExit in={open} timeout={{ enter: 0, exit: fastInMs }}>
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
