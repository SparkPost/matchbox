import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
// @ts-ignore
import { TextField } from '@sparkpost/matchbox';
import { Tooltip, Button, Box } from '@sparkpost/matchbox';
import { FileDownload } from '@sparkpost/matchbox-icons';

function noop() {
  return null;
}

describe('Tooltip', () => {
  add('default', () => (
    <Box position="relative">
      <Button.Group>
        <Tooltip id="test-tooltip" content="Hellow I am a Tooltip">
          <Button aria-describedby="test-tooltip" onClick={noop} outline>
            <FileDownload size={14} />
            Accepted
          </Button>
        </Tooltip>
        <Button disabled outline>
          Targeted
        </Button>
      </Button.Group>
    </Box>
  ));

  add('specified width', () => (
    <>
      <Tooltip id="test-tooltip-1" dark width="auto" content="Short">
        <Button aria-describedby="test-tooltip-1">Hover</Button>
      </Tooltip>

      <Tooltip id="test-tooltip-2" width="500px" content="Very long">
        <Button aria-describedby="test-tooltip-2">Hover</Button>
      </Tooltip>
    </>
  ));

  add('positioning', () => (
    <>
      <p>
        <small>
          Tooltips are positioned automatically based on the components position within the
          viewport.
        </small>
      </p>
      <p>
        <small>Scroll down and hover</small>
      </p>
      <div style={{ height: '400px' }} />
      <Button.Group>
        <Tooltip
          id="test-tooltip-1"
          content="Tooltips are positioned automatically based on the components position."
        >
          <Button aria-describedby="test-tooltip-1">Hover me</Button>
        </Tooltip>

        <Box textAlign="right">
          <Tooltip
            id="test-tooltip-2"
            content="Tooltips are positioned automatically based on the components position."
          >
            <Button aria-describedby="test-tooltip-2">Hover me</Button>
          </Tooltip>
        </Box>
      </Button.Group>
    </>
  ));

  add('styled with system props', () => (
    <>
      <Tooltip
        id="test-tooltip-1"
        content="Hello I am a Tooltip"
        padding="600"
        bg="white"
        boxShadow="300"
        color="purple.700"
        border="400"
      >
        <Button aria-describedby="test-tooltip-1">Hover</Button>
      </Tooltip>

      <Tooltip
        id="test-tooltip-2"
        content="Hello I am a Tooltip"
        bg="red.700"
        fontSize="600"
        lineHeight="600"
        fontWeight="semibold"
        p="700"
        width="30rem"
      >
        <Button aria-describedby="test-tooltip-2">Hover</Button>
      </Tooltip>
    </>
  ));

  add('within an absolute container', () => (
    <Box>
      <p>This page is meant to test positioning functionality</p>
      <Box height="2rem"></Box>
      <Box position="fixed" top="0" left="0" zIndex="overlay">
        <Box position="absolute" top="300px" left="200px">
          <Tooltip
            id="test-tooltip"
            content="Tooltips are positioned automatically based on the components position."
          >
            <Button aria-describedby="test-tooltip">Hover me</Button>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  ));

  add('around a block element', () => (
    <Box>
      <Tooltip
        id="test-tooltip"
        as="div"
        content="Tooltips are positioned automatically based on the components position."
      >
        <TextField id="textfield" aria-describedby="test-tooltip" label="A block level element" />
      </Tooltip>
    </Box>
  ));
});
