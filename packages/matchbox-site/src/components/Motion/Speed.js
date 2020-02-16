import React from 'react';
import { Box } from '@sparkpost/matchbox';
import { tokens } from '@sparkpost/design-tokens';
import { PlayCircleFilled, PauseCircleFilled } from '@sparkpost/matchbox-icons';
import styled, { keyframes } from 'styled-components';

const move = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(calc(100% - 2.5rem)); }
`;

const Animator = styled(Box)`
  animation-fill-mode: both;
  animation-iteration-count: infinite;
  animation-name: ${move};
  animation-timing-function: ${tokens.motionEase_in_out};

  ${props => ({ animationPlayState: props.playing ? 'running' : 'paused' })}

  ${props => ({
    animationDuration: `${Number(tokens[props.speed].replace('s', '')) * 2}s`
  })}
`;

function Speed() {
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
        display="flex"
        justifyContent="space-around"
        bg="gray.200"
        py="800"
        px="200"
        height="18rem"
        borderRadius="200"
      >
        <Box display="flex" height="35%" width="1.25rem" position="relative">
          <Animator speed="motionDuration_fast" playing={playing}>
            <Box
              width="1.25rem"
              height="1.25rem"
              bg="purple.700"
              borderRadius="circle"
            ></Box>
          </Animator>
          <Box
            position="absolute"
            top="-2.5rem"
            left="-10px"
            right="-10px"
            textAlign="center"
            fontSize="100"
            color="gray.700"
          >
            Fast
          </Box>
        </Box>
        <Box display="flex" height="60%" width="2.5rem" position="relative">
          <Animator speed="motionDuration_medium" playing={playing}>
            <Box
              width="2.5rem"
              height="2.5rem"
              bg="purple.700"
              borderRadius="circle"
            ></Box>
          </Animator>
          <Box
            position="absolute"
            top="-2.5rem"
            left="-10px"
            right="-10px"
            textAlign="center"
            fontSize="100"
            color="gray.700"
          >
            Medium
          </Box>
        </Box>
        <Box display="flex" height="100%" width="3.75rem" position="relative">
          <Animator speed="motionDuration_slow" playing={playing}>
            <Box
              width="3.75rem"
              height="3.75rem"
              bg="purple.700"
              borderRadius="circle"
            ></Box>
          </Animator>
          <Box
            position="absolute"
            top="-2.5rem"
            left="0"
            right="0"
            textAlign="center"
            fontSize="100"
            color="gray.700"
          >
            Slow
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export { Speed };
