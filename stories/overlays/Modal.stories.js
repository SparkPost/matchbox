import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Modal, Panel, Button, Box } from '@sparkpost/matchbox';

const PORTAL_ID = 'modal-portal';

storiesOf('Overlays|Modal', module)
  .add('Open', () => {
    return (
      <Modal open portalId={PORTAL_ID}>
        <Modal.Header showCloseButton>Modal Title</Modal.Header>
        <Modal.Content>Modal Content</Modal.Content>
        <Modal.Footer>
          <Button>Primary Button</Button>
          <Button>Secondary Button</Button>
          <Button>Tertiary Button</Button>
        </Modal.Footer>
      </Modal>
    );
  })
  .add('LEGACY', () => {
    return (
      <Modal.LEGACY open portalId={PORTAL_ID}>
        <Panel title="Delete Template" sectioned>
          <p>Are you sure you want to delete your template?</p>

          <Box mt="500">
            <Button mr="300" color="blue">
              Delete
            </Button>

            <Button color="blue" outline>
              Cancel
            </Button>
          </Box>
        </Panel>
      </Modal.LEGACY>
    );
  })
  .add(
    'Toggle Example',
    withInfo({
      source: false,
      propTables: [Modal],
      propTablesExclude: [ModalDemo],
    })(() => {
      return <ModalDemo />;
    }),
  );

function ModalDemo() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <>
      <button onClick={handleToggle} data-id="open-modal">
        Open Modal
      </button>

      <Modal open={isOpen} onClose={handleToggle} showCloseButton={true} portalId={PORTAL_ID}>
        <Modal.Header showCloseButton>Delete Template</Modal.Header>
        <Modal.Content>
          <p>Are you sure you want to delete your template?</p>
        </Modal.Content>
        <Modal.Footer>
          <Button>Delete</Button>
          <Button>Cancel</Button>
          <Button>Tertiary Button</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
