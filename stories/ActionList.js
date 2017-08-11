import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { StoryContainer } from './helpers';

import { ActionList, Popover, Button } from '../src';

storiesOf('ActionList', module)
  .addDecorator((getStory) => (
    <StoryContainer>{ getStory() }</StoryContainer>
  ))
  .addWithInfo('within a Popover',
  () => (
    <Popover
      open={true}
      trigger={<Button>More Actions</Button>}
      style={{ width: '200px' }}>
      <ActionList
        actions={[
          {
            content: 'Edit'
          },
          {
            content: 'Delete'
          },
          {
            content: 'Details'
          },
          {
            content: 'Test'
          }
        ]}
        sections={[
          {
            actions: [
              {
                content: 'Sectioned1'
              },
              {
                content: 'Sectioned2'
              }
            ]
          }
        ]}/>
    </Popover>
  ));
