import React from 'react';
import { Box, Button, Stack, Inline } from '@sparkpost/matchbox';
import { tokens } from '@sparkpost/design-tokens';
import { PlayCircleFilled } from '@sparkpost/matchbox-icons';
import styled from 'styled-components';

const EnterExitAnimator = styled(Box)`
  flex: 33% 0 0;
  transition: 0s;
  opacity: 0;

  ${props => {
    if (props.stage === 'stop') {
      return `
        opacity: 0;
        transform: translateX(-1rem);
      `;
    }

    if (props.stage === 'enter') {
      return `
        opacity: 1;
        transform: translateX(0);
        transition: ${tokens.motionDuration_medium} ${tokens.motionEase_out};
      `;
    }

    if (props.stage === 'wait') {
      return `
        opacity: 1;
        transform: translateX(0);
      `;
    }

    if (props.stage === 'exit') {
      return `
        opacity: 0;
        transform: translateX(1rem);
        transition: ${tokens.motionDuration_fast} ${tokens.motionEase_in};
      `;
    }
  }}
`;

function EnterExit() {
  const [playing, setPlaying] = React.useState(false);
  const [stage, setStage] = React.useState('stop');

  React.useLayoutEffect(() => {
    if (stage === 'enter') {
      window.setTimeout(() => {
        setStage('wait');
      }, 300);
    }
    if (stage === 'wait') {
      window.setTimeout(() => {
        setStage('exit');
      }, 1500);
    }
    if (stage === 'exit') {
      window.setTimeout(() => {
        setStage('stop');
        setPlaying(false);
      }, 150);
    }
  }, [stage]);

  React.useEffect(() => {
    if (!!playing) {
      setStage('enter');
    }
  }, [playing]);

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
          disabled={!!playing}
          onClick={!playing ? () => setPlaying(true) : null}
        >
          {playing ? null : <PlayCircleFilled />}
          <Box as="span" display="inline-block" pl="200">
            {playing ? ' Playing' : 'Play Animation'}
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
        bg="gray.200"
        p="400"
        height="15rem"
      >
        <EnterExitAnimator playing={playing} stage={stage}>
          <Box
            bg="green.700"
            padding="400"
            color="white"
            borderRadius="200"
            boxShadow="300"
          >
            Good news!
          </Box>
        </EnterExitAnimator>
      </Box>
    </Box>
  );
}

function FastInPlace() {
  return (
    <Box>
      <Box display="flex">
        <Box as="strong" fontWeight="500" flex="1 0 0">
          Example
        </Box>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
        bg="gray.200"
        p="400"
        height="15rem"
      >
        <Button color="blue" mr="500">
          Create Template
        </Button>
        <Button color="red">Delete Template</Button>
      </Box>
    </Box>
  );
}

const StackAnimator = styled(Box)`
  ${props => {
    if (props.stage === 'stop') {
      return `
        transform: translateY(1.5rem);
        opacity: 0;
      `;
    }

    if (props.stage === 'enter') {
      return `
        transform: translateY(0);
        opacity: 1;
        transition: ${tokens.motionDuration_slow} ${props.delay} ${tokens.motionEase_out};
      `;
    }

    if (props.stage === 'wait') {
      return `
        transform: translateY(0);
        opacity: 1;
      `;
    }

    if (props.stage === 'exit') {
      return `
        opacity: 0;
        transform: translateY(0.5rem);
        transition: ${tokens.motionDuration_medium} ${tokens.motionEase_in};
      `;
    }
  }}
`;

function Large() {
  const [playing, setPlaying] = React.useState(false);
  const [stage, setStage] = React.useState('stop');

  React.useLayoutEffect(() => {
    if (stage === 'enter') {
      window.setTimeout(() => {
        setStage('wait');
      }, 950);
    }
    if (stage === 'wait') {
      window.setTimeout(() => {
        setStage('exit');
      }, 2000);
    }
    if (stage === 'exit') {
      window.setTimeout(() => {
        setStage('stop');
        setPlaying(false);
      }, 300);
    }
  }, [stage]);

  React.useEffect(() => {
    if (!!playing) {
      setStage('enter');
    }
  }, [playing]);

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
          disabled={playing}
          onClick={!playing ? () => setPlaying(!playing) : null}
        >
          {playing ? null : <PlayCircleFilled />}
          <Box as="span" display="inline-block" pl="200">
            {playing ? ' Playing' : 'Play Animation'}
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        position="relative"
        bg="gray.200"
        height="30rem"
        position="relative"
        px="800"
        py="700"
      >
        <Box flex="1" position="relative" width="100%">
          <StackAnimator stage={stage} playing={playing} delay="0s">
            <Stack>
              <Box p="400" bg="gray.400" borderRadius="200" width="20rem"></Box>
              <Inline>
                <Box
                  p="100"
                  bg="gray.400"
                  borderRadius="200"
                  width="6rem"
                ></Box>
                <Box
                  p="100"
                  bg="gray.400"
                  borderRadius="200"
                  width="6rem"
                ></Box>
              </Inline>
              <Box my="200"></Box>
            </Stack>
          </StackAnimator>
          <StackAnimator stage={stage} playing={playing} delay="0.1s">
            <Box p="400" mb="400" bg="white">
              <Stack>
                <Box p="100" bg="gray.400" borderRadius="200"></Box>
                <Box p="100" bg="gray.400" borderRadius="200"></Box>
                <Box
                  p="100"
                  bg="gray.400"
                  borderRadius="200"
                  width="20rem"
                ></Box>
              </Stack>
            </Box>
          </StackAnimator>
          <StackAnimator stage={stage} playing={playing} delay="0.17s">
            <Box p="400" bg="white" mb="400">
              <Stack>
                <Box
                  p="300"
                  bg="gray.400"
                  borderRadius="200"
                  width="12rem"
                ></Box>
                <Inline>
                  <Box
                    p="100"
                    bg="gray.400"
                    borderRadius="200"
                    width="8rem"
                  ></Box>
                  <Box
                    p="100"
                    bg="gray.400"
                    borderRadius="200"
                    width="8rem"
                  ></Box>
                  <Box
                    p="100"
                    bg="gray.400"
                    borderRadius="200"
                    width="8rem"
                  ></Box>
                </Inline>
              </Stack>
            </Box>
          </StackAnimator>
          <StackAnimator stage={stage} playing={playing} delay="0.25s">
            <Box p="400" bg="white">
              <Stack>
                <Box
                  p="300"
                  bg="gray.400"
                  borderRadius="200"
                  width="12rem"
                ></Box>
                <Inline>
                  <Box
                    p="100"
                    bg="gray.400"
                    borderRadius="200"
                    width="16rem"
                  ></Box>
                  <Box
                    p="100"
                    bg="gray.400"
                    borderRadius="200"
                    width="5rem"
                  ></Box>
                  <Box
                    p="100"
                    bg="gray.400"
                    borderRadius="200"
                    width="5rem"
                  ></Box>
                </Inline>
              </Stack>
            </Box>
          </StackAnimator>
        </Box>
      </Box>
    </Box>
  );
}

export { EnterExit, FastInPlace, Large };
