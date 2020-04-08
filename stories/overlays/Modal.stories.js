import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import StoryContainer from '../storyHelpers/StoryContainer';
import { Modal, Panel, Button, Box } from '@sparkpost/matchbox';

const PORTAL_ID = 'modal-portal';

storiesOf('Overlays|Modal', module)
  .addDecorator(getStory => <StoryContainer>{getStory()}</StoryContainer>)

  .add('Open', () => {
    return (
      <Modal open portalId={PORTAL_ID}>
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
      </Modal>
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
        <Panel title="Delete Template" sectioned>
          <p>Are you sure you want to delete your template?</p>

          <Box mt="500">
            <Button mr="300" color="blue" onClick={handleToggle} data-id="delete-button">
              Delete
            </Button>

            <Button color="blue" outline onClick={handleToggle} data-id="cancel-button">
              Cancel
            </Button>
          </Box>
        </Panel>
      </Modal>
    </>
  );
}
