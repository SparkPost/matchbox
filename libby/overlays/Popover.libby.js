import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { Popover, Button, Box, ActionList } from '@sparkpost/matchbox';

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

describe('Popover', () => {
  add('uncontrolled', () => (
    <Popover
      id="test-popover"
      p="400"
      width="30rem"
      trigger={<Button aria-describedby="test-popover">Button</Button>}
    >
      Popover Content
    </Popover>
  ));

  add('controlled', () => <ControlledPopover />);

  add('with an ActionList', () => (
    <Popover
      id="test-popover"
      trigger={<Button aria-describedby="test-popover">More Actions</Button>}
    >
      <ActionList>
        <ActionList.Action>Edit</ActionList.Action>
        <ActionList.Action>Publish</ActionList.Action>
        <ActionList.Action>Delete</ActionList.Action>
      </ActionList>
    </Popover>
  ));

  add('positioning', () => (
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

  add('works with system props', () => (
    <>
      <Popover
        id="test-popover"
        p={['300', null, null, '700']}
        width={['10rem', null, null, '30rem']}
        height={['10rem', null, null, '14rem']}
        trigger={<Button aria-describedby="test-popover">Button</Button>}
      >
        Popover Content
      </Popover>
    </>
  ));
});
