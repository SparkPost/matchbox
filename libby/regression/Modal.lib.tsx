import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { Modal, Button, useModal, Panel, Box } from '@sparkpost/matchbox';

describe('Visual Regression', () => {
  add('Modal', () => {
    const modal = useModal();
    return (
      <>
        <Button {...modal.getActivatorProps()} data-id="open-modal">
          Open Modal
        </Button>

        <Modal {...modal.getModalProps()}>
          <div id="this-is-here-to-test-composition">
            <Modal.Header showCloseButton>Modal Title</Modal.Header>
            <Modal.Content p="800">Modal Content</Modal.Content>
            <Modal.Footer>
              <Button>Primary Button</Button>
              <Button>Secondary Button</Button>
              <Button>Tertiary Button</Button>
            </Modal.Footer>
          </div>
        </Modal>
      </>
    );
  });
  add('Legacy Modal', () => {
    return (
      <Modal.LEGACY open portalId="portal">
        <Panel.LEGACY title="Delete Template" sectioned>
          <p>Are you sure you want to delete your template?</p>

          <Box mt="500">
            <Button mr="300" color="blue">
              Delete
            </Button>

            <Button color="blue" outline>
              Cancel
            </Button>
          </Box>
        </Panel.LEGACY>
      </Modal.LEGACY>
    );
  });
});
