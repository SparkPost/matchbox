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
  .add('within a Popover', withInfo()(() => (
    <div>
      <Popover
        open
        trigger={<Button style={{ marginRight: 150, marginBottom: 250 }}>Actions</Button>}
        style={{ width: '200px' }}>
        <ActionList
          actions={[
            { content: 'Action1' },
            { content: 'Action2' }
          ]}
        />
      </Popover>

      <Popover
        open
        trigger={<Button style={{ marginRight: 150, marginBottom: 250 }}>Sections</Button>}
        style={{ width: '200px' }}>
        <ActionList
          sections={[
            [
              { content: 'Sectioned1' },
              { content: 'Sectioned2' }
            ],
            [
              { content: 'Sectioned3' },
              { content: 'Sectioned4' }
            ]
          ]}
        />
      </Popover>

      <Popover
        open
        trigger={<Button style={{ marginRight: 150, marginBottom: 250 }}>Actions with Sections</Button>}
        style={{ width: '200px' }}>
        <ActionList
          actions={[
            { content: 'Action1' },
            { content: 'Action2' }
          ]}
          sections={[
            [
              { content: 'Sectioned1' },
              { content: 'Sectioned2' }
            ]
          ]}
        />
      </Popover>
    </div>
  )));
