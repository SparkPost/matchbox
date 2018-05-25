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
      <div style={{ display: 'inline-block', marginRight: 150 }}>
        <Popover
        open
        trigger={<Button style={{ marginBottom: 250 }}>Actions</Button>}
        style={{ width: '200px' }}>
          <ActionList
            actions={[
              { content: 'Action1' },
              { content: 'Action2' }
            ]}
          />
        </Popover>
      </div>

      <div style={{ display: 'inline-block', marginRight: 150 }}>
        <Popover
        open
        trigger={<Button style={{ marginBottom: 250 }}>Sections</Button>}
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
      </div>

      <div style={{ display: 'inline-block', marginRight: 150 }}>
        <Popover
        open
        trigger={<Button style={{ marginBottom: 250 }}>Actions with Sections</Button>}
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

      <div style={{ display: 'inline-block', marginRight: 150 }}>
        <Popover
        open
        trigger={<Button style={{ marginBottom: 250 }}>Actions with Group By Key</Button>}
        style={{ width: '200px' }}>
          <ActionList
            groupByKey='group'
            actions={[
              { content: 'Action1', group: 1 },
              { content: 'Action2', group: 2 }
            ]}
          />
        </Popover>
      </div>
    </div>
  )));
