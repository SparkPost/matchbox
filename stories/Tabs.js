import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { StoryContainer } from './helpers';

import { Tabs, Page, Panel } from '../src';

const secondaryActions = [
  {
    content: 'Save',
    onClick: action('Save Clicked')
  },
  {
    content: 'Delete',
    onClick: action('Delete Clicked')
  }
];

const breadcrumbAction = {
  content: 'Webhooks',
  onClick: action('Webhooks Clicked')
}

storiesOf('Tabs', module)
  .addDecorator((getStory) => (
    <StoryContainer>{ getStory() }</StoryContainer>
  ))
  .addWithInfo('Default',
  () => (
    <div>
      <Page
        secondaryActions={secondaryActions}
        breadcrumbAction={breadcrumbAction}
        title='Webhook #2'
      />
      <Tabs selected={0} tabs={[
        {
          content: 'Edit',
          onClick: action('Edit Clicked')
        },
        {
          content: 'Test',
          onClick: action('Test Clicked')
        },
        {
          content: 'Batch Status History',
          onClick: action('History Clicked')
        },
      ]}>
      </Tabs>
      <Panel sectioned>A panel</Panel>
    </div>
  ));
