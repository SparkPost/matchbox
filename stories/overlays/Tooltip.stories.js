import React from 'react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { ThemeProvider, Tooltip, Button, Box, TextField } from '@sparkpost/matchbox';

addDecorator(storyFn => <ThemeProvider>{storyFn()}</ThemeProvider>);

export default {
  title: 'Overlays|Tooltip',
};

export const DefaultStyle = withInfo({ propTables: [Tooltip] })(() => (
  <Box position="relative">
    <Button.Group>
      <Tooltip id="test-tooltip" content="Hellow I am a Tooltip">
        <Button aria-describedby="test-tooltip" onClick={action('click')}>
          Accepted
        </Button>
      </Tooltip>
      <Button disabled>Targeted</Button>
    </Button.Group>
  </Box>
));

export const SpecifiedWidth = withInfo({ propTables: [Tooltip] })(() => (
  <div>
    <Tooltip id="test-tooltip-1" dark width="auto" content="Short">
      <Button aria-describedby="test-tooltip-1">Hover</Button>
    </Tooltip>

    <Tooltip id="test-tooltip-2" width="500px" content="Very long">
      <Button aria-describedby="test-tooltip-2">Hover</Button>
    </Tooltip>
  </div>
));

export const Positioning = withInfo({ propTables: [Tooltip] })(() => (
  <div>
    <p>
      <small>
        Tooltips are positioned automatically based on the components position within the viewport.
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
  </div>
));

export const StyledWithSystemProps = withInfo({ propTables: [Tooltip] })(() => (
  <div>
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
  </div>
));

export const WithinAbsoluteContainer = withInfo({ propTables: [Tooltip] })(() => (
  <Box>
    <p>This story is meant to test positioning functionality</p>
    <Box height="20rem"></Box>
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

export const AroundABlockElement = withInfo({ propTables: [Tooltip] })(() => (
  <Box>
    <Tooltip
      id="test-tooltip"
      as="div"
      content="Tooltips are positioned automatically based on the components position."
    >
      <TextField aria-describedby="test-tooltip" label="A block level element" />
    </Tooltip>
  </Box>
));
