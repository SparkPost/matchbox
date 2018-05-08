import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import StoryContainer from '../storyHelpers/StoryContainer';

import { ActionList, Popover, Button, TextField, Panel } from '@sparkpost/matchbox';

storiesOf('Action|ActionList', module)
  .addDecorator((getStory) => (
    <StoryContainer>{ getStory() }</StoryContainer>
  ))
  .add('within a Popover',
  withInfo()(() => (
    <Popover
      open
      trigger={<Button style={{ marginBottom: 250 }}>More Actions</Button>}
      style={{ width: '200px' }}>
      <ActionList
        actions={[
          { content: 'Edit' },
          { content: 'Delete', selected: true },
          { content: 'Test' }
        ]}
        sections={[
          [
            { content: 'Sectioned1' },
            { content: 'Sectioned2' }
          ]
        ]}
      />
    </Popover>
  )));
