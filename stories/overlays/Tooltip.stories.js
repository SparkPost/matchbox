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
      <Tooltip content="Hellow I am a Tooltip">
        <Button onClick={action('click')}>Accepted</Button>
      </Tooltip>
      <Button disabled>Targeted</Button>
    </Button.Group>
  </Box>
));

export const SpecifiedWidth = withInfo({ propTables: [Tooltip] })(() => (
  <div>
    <Tooltip dark width="auto" content="Short">
      <Button>Hover</Button>
    </Tooltip>

    <Tooltip width="500px" content="Very long">
      <Button>Hover</Button>
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
      <Tooltip content="Tooltips are positioned automatically based on the components position.">
        <Button>Hover me</Button>
      </Tooltip>

      <Box textAlign="right">
        <Tooltip content="Tooltips are positioned automatically based on the components position.">
          <Button>Hover me</Button>
        </Tooltip>
      </Box>
    </Button.Group>
  </div>
));

export const StyledWithSystemProps = withInfo({ propTables: [Tooltip] })(() => (
  <div>
    <Tooltip
      content="Hello I am a Tooltip"
      padding="600"
      bg="white"
      boxShadow="300"
      color="purple.700"
      border="400"
    >
      <Button>Hover</Button>
    </Tooltip>

    <Tooltip
      content="Hello I am a Tooltip"
      bg="red.700"
      fontSize="600"
      lineHeight="600"
      fontWeight="semibold"
      p="700"
      width="30rem"
    >
      <Button>Hover</Button>
    </Tooltip>
  </div>
));

export const WithinAbsoluteContainer = withInfo({ propTables: [Tooltip] })(() => (
  <Box>
    <p>This story is meant to test positioning functionality</p>
    <Box height="20rem"></Box>
    <Box position="fixed" top="0" left="0" zIndex="10000">
      <Box position="absolute" top="300px" left="200px">
        <Tooltip content="Tooltips are positioned automatically based on the components position.">
          <Button>Hover me</Button>
        </Tooltip>
      </Box>
    </Box>
  </Box>
));

export const AroundABlockElement = withInfo({ propTables: [Tooltip] })(() => (
  <Box>
    <Tooltip
      as="div"
      content="Tooltips are positioned automatically based on the components position."
    >
      <TextField label="A block level element" />
    </Tooltip>
  </Box>
));
