import React from 'react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { ThemeProvider, Popover, Button, Box, ActionList } from '@sparkpost/matchbox';

addDecorator(storyFn => <ThemeProvider>{storyFn()}</ThemeProvider>);

function ControlledPopover() {
  const [open, setOpen] = React.useState(false);
  const [count, setCount] = React.useState(0);

  function handleClose() {
    setOpen(false);
    setCount(count + 1);
  }

  return (
    <>
      <p>State: {open ? 'open' : 'closed'}</p>
      <p>Close Count: {count}</p>
      <br />
      <Popover
        id="test-popover"
        p="400"
        onClose={handleClose}
        open={open}
        trigger={
          <Button
            aria-expanded={open}
            aria-describedby="test-popover"
            onClick={() => setOpen(true)}
          >
            Open Me
          </Button>
        }
      >
        <p>I am controlled</p>
        <Button data-id="close-button" onClick={handleClose}>
          Close me
        </Button>
      </Popover>
    </>
  );
}

export default {
  title: 'Overlays|Popover',
};

export const UncontrolledOpenState = withInfo({ propTables: [Popover] })(() => (
  <Popover
    id="test-popover"
    p="400"
    width="30rem"
    trigger={
      <Button aria-describedby="test-popover" onClick={action('Trigger Click')}>
        Button
      </Button>
    }
  >
    Popover Content
  </Popover>
));

export const WithAnActionList = withInfo({ propTables: [Popover] })(() => (
  <Popover
    id="test-popover"
    trigger={<Button aria-describedby="test-popover">More Actions</Button>}
  >
    <ActionList
      actions={[
        { content: 'Edit', as: 'button' },
        { content: 'Delete', selected: true, as: 'button' },
        { content: 'Test', as: 'button' },
      ]}
      sections={[
        [
          { content: 'Sectioned1', as: 'button' },
          { content: 'Sectioned2', as: 'button' },
        ],
      ]}
    />
  </Popover>
));

export const Positioning = withInfo({ propTables: [Popover] })(() => (
  <>
    <Box display="flex">
      <Box flex="1">
        <Popover
          id="test-popover-1"
          p="200"
          trigger={<Button aria-describedby="test-popover-1">Default</Button>}
        >
          Bottom & Right
        </Popover>
      </Box>
      <Box flex="0">
        <Popover
          id="test-popover-2"
          p="200"
          bottom
          left
          trigger={<Button aria-describedby="test-popover-2">Bottom & Left</Button>}
        >
          Bottom & Left
        </Popover>
      </Box>
    </Box>
    <Box display="flex" mt="800">
      <Box flex="1">
        <Popover
          id="test-popover-3"
          p="200"
          top
          trigger={<Button aria-describedby="test-popover-3">Top & Right</Button>}
        >
          Top & Right
        </Popover>
      </Box>
      <Box flex="0">
        <Popover
          id="test-popover-4"
          p="200"
          top
          left
          trigger={<Button aria-describedby="test-popover-4">Top & Left</Button>}
        >
          Top & Left
        </Popover>
      </Box>
    </Box>
  </>
));

export const ControlledOpenState = withInfo({ source: false, propTables: [Popover] })(() => (
  <ControlledPopover />
));

export const SystemProps = withInfo({ propTables: [Popover] })(() => (
  <>
    <Popover
      id="test-popover"
      p={['300', null, null, '700']}
      width={['10rem', null, null, '30rem']}
      height={['10rem', null, null, '14rem']}
      trigger={
        <Button aria-describedby="test-popover" onClick={action('Trigger Click')}>
          Button
        </Button>
      }
    >
      Popover Content
    </Popover>
  </>
));
