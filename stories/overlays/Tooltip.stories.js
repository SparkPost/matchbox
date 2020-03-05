import React from 'react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { ThemeProvider, Tooltip, Button, Box } from '@sparkpost/matchbox';

addDecorator(storyFn => <ThemeProvider>{storyFn()}</ThemeProvider>);

export default {
  title: 'Overlays|Tooltip',
};

export const DefaultStyle = withInfo({ propTables: [Tooltip] })(() => (
  <Button.Group>
    <Tooltip content="Hellow I am a Tooltip">
      <Button onClick={action('click')}>Accepted</Button>
    </Tooltip>
    <Button disabled>Targeted</Button>
  </Button.Group>
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
    <Tooltip content="Tooltips are positioned automatically based on the components position.">
      <Button>Hover me</Button>
    </Tooltip>

    <Box textAlign="right">
      <Tooltip content="Tooltips are positioned automatically based on the components position.">
        <Button>Hover me</Button>
      </Tooltip>
    </Box>
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
