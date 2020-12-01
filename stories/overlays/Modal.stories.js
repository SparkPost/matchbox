import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { Modal, useModal, Panel, Button, Box, Tabs } from '@sparkpost/matchbox';

const PORTAL_ID = 'modal-portal';

export default {
  title: 'Overlays|Modal',
};

export const Open = withInfo()(() => (
  <Modal p={800} showCloseButton open portalId={PORTAL_ID}>
    <Modal.Header showCloseButton>Modal Title</Modal.Header>
    <Modal.Content>Modal Content</Modal.Content>
    <Modal.Footer>
      <Button>Primary Button</Button>
      <Button>Secondary Button</Button>
      <Button>Tertiary Button</Button>
    </Modal.Footer>
  </Modal>
));

export const ConfigurableButtons = withInfo()(() => (
  <Modal p={800} showCloseButton open portalId={PORTAL_ID}>
    <Modal.Header showCloseButton>Modal Title</Modal.Header>
    <Modal.Content>Modal Content</Modal.Content>
    <Modal.Footer>
      <Button color="red" variant="filled">
        Primary Button
      </Button>
      <Button color="blue" variant="text">
        Secondary Button
      </Button>
      <Button color="gray" variant="text">
        Tertiary Button
      </Button>
    </Modal.Footer>
  </Modal>
));

export const TallModal = () => (
  <Modal p={800} showCloseButton open portalId={PORTAL_ID}>
    <Modal.Header showCloseButton>Modal Title</Modal.Header>
    <Modal.Content>
      <Box p="300" height="2000px" bg="blue.300">
        Tall Modal Content
      </Box>
    </Modal.Content>
    <Modal.Footer>
      <Button>Primary Button</Button>
      <Button>Secondary Button</Button>
      <Button>Tertiary Button</Button>
    </Modal.Footer>
  </Modal>
);

export const TallModalWithoutHeightRestriction = () => (
  <Modal p={800} showCloseButton open portalId={PORTAL_ID}>
    <Modal.Header showCloseButton>Modal Title</Modal.Header>
    <Modal.Content restrictHeight={false}>
      <Box p="300" height="2000px" bg="blue.300">
        Tall Modal Content
      </Box>
    </Modal.Content>
    <Modal.Footer>
      <Button>Primary Button</Button>
      <Button>Secondary Button</Button>
      <Button>Tertiary Button</Button>
    </Modal.Footer>
  </Modal>
);

export const ToggleExample = () => {
  const modal = useModal();

  return (
    <>
      <Button {...modal.getActivatorProps()} data-id="open-modal">
        Open Modal
      </Button>

      <Modal {...modal.getModalProps()}>
        <Modal.Header showCloseButton>Modal Title</Modal.Header>
        <Modal.Content>Modal Content</Modal.Content>
        <Modal.Footer>
          <Button>Primary Button</Button>
          <Button>Secondary Button</Button>
          <Button>Tertiary Button</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export const LEGACY = withInfo()(() => (
  <Modal.LEGACY open portalId={PORTAL_ID}>
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
));

export const SystemProps = withInfo()(() => (
  <Modal p={800} showCloseButton open portalId={PORTAL_ID}>
    <Modal.Header showCloseButton>Modal Title</Modal.Header>
    <Modal.Content padding="0">
      <Tabs tabs={[{ content: 'tab' }, { content: 'tab' }]} fitted />
      <Box bg="blue.300" p="300">
        Modal Content
      </Box>
    </Modal.Content>
    <Modal.Footer>
      <Button>Primary Button</Button>
      <Button>Secondary Button</Button>
      <Button>Tertiary Button</Button>
    </Modal.Footer>
  </Modal>
));
