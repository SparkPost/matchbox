import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
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

const tabs = [
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
];

storiesOf('Tabs', module)
  .addDecorator((getStory) => (
    <StoryContainer>{ getStory() }</StoryContainer>
  ))
  .add('Default',
  withInfo()(() => (
      <Tabs selected={0} connectBelow={false} tabs={tabs}/>
  )))

  .add('with other components',
  withInfo()(() => (
    <div>
      <Page
        secondaryActions={secondaryActions}
        breadcrumbAction={breadcrumbAction}
        title='Webhook #2'
      />
      <Tabs selected={0} color='red' tabs={tabs} />
      <Panel sectioned>A panel</Panel>
    </div>
  )))

  .add('Colors', withInfo()(() => (
    <div>
      <Tabs connectBelow={false} selected={0} color='purple' tabs={tabs} />
      <Tabs connectBelow={false} selected={0} color='navy' tabs={tabs} />
      <Tabs connectBelow={false} selected={0} color='blue' tabs={tabs} />
      <Tabs connectBelow={false} selected={0} color='orange' tabs={tabs} />
      <Tabs connectBelow={false} selected={0} color='red' tabs={tabs} />
    </div>
  )));
