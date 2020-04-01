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
        p="400"
        onClose={handleClose}
        open={open}
        trigger={<Button onClick={() => setOpen(true)}>Open Me</Button>}
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
    p="400"
    width="30rem"
    trigger={<Button onClick={action('Trigger Click')}>Button</Button>}
  >
    Popover Content
  </Popover>
));

export const WithAnActionList = withInfo({ propTables: [Popover] })(() => (
  <Popover trigger={<Button>More Actions</Button>}>
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
        <Popover p="200" trigger={<Button>Default</Button>}>
          Bottom & Right
        </Popover>
      </Box>
      <Box flex="0">
        <Popover p="200" bottom left trigger={<Button>Bottom & Left</Button>}>
          Bottom & Left
        </Popover>
      </Box>
    </Box>
    <Box display="flex" mt="800">
      <Box flex="1">
        <Popover p="200" top trigger={<Button>Top & Right</Button>}>
          Top & Right
        </Popover>
      </Box>
      <Box flex="0">
        <Popover p="200" top left trigger={<Button>Top & Left</Button>}>
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
      p={['300', null, null, '700']}
      width={['10rem', null, null, '30rem']}
      height={['10rem', null, null, '14rem']}
      trigger={<Button onClick={action('Trigger Click')}>Button</Button>}
    >
      Popover Content
    </Popover>
  </>
));
