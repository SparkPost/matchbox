import React from 'react';
import { Box } from '@sparkpost/matchbox';
import { tokens } from '@sparkpost/design-tokens';
import { PlayCircleFilled, PauseCircleFilled } from '@sparkpost/matchbox-icons';
import styled, { keyframes } from 'styled-components';

const move = keyframes`
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(calc(100% - 2.5rem)); }
`;

const Animator = styled(Box)`
  ${props => ({ animationPlayState: props.playing ? 'running' : 'paused' })};
  animation-duration: 3s;
  animation-fill-mode: both;
  animation-iteration-count: infinite;
  animation-name: ${move};
  ${props => {
    return {
      animationTimingFunction: tokens[props.ease]
    };
  }}
`;

function EasingDemo(props) {
  const [playing, setPlaying] = React.useState(false);

  return (
    <Box>
      <Box display="flex">
        <Box as="strong" fontWeight="500" flex="1 0 0">
          Example
        </Box>
        <Box
          display="inline-flex"
          alignItems="center"
          as="button"
          padding="0"
          bg="transparent"
          color="blue.700"
          border="none"
          mb="200"
          onClick={() => setPlaying(!playing)}
        >
          {playing ? <PauseCircleFilled /> : <PlayCircleFilled />}
          <Box as="span" display="inline-block" pl="200">
            {playing ? ' Pause Animation' : 'Play Animation'}
          </Box>
        </Box>
      </Box>
      <Box
        position="relative"
        bg="gray.200"
        p="400"
        borderRadius="200"
        overflow="hidden"
      >
        <Animator ease={props.ease} playing={playing}>
          <Box
            width="2.5rem"
            height="2.5rem"
            bg="purple.700"
            borderRadius="circle"
          ></Box>
        </Animator>
      </Box>
    </Box>
  );
}

function EaseIn() {
  return <EasingDemo ease="motionEase_in" />;
}
function EaseOut() {
  return <EasingDemo ease="motionEase_out" />;
}

function EaseInOut() {
  return <EasingDemo ease="motionEase_in_out" />;
}

export { EaseIn, EaseOut, EaseInOut };
