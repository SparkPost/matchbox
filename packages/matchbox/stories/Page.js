import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { StoryContainer } from './helpers';

import { Page, Panel } from '../src';

export default storiesOf('Page', module)
  .addDecorator((getStory) => (
    <StoryContainer>{ getStory() }</StoryContainer>
  ))

  .add('with all props', withInfo()(() => {
    const primaryAction = {
      content: 'Publish',
      onClick: action('Publish Clicked'),
      color: 'orange'
    };

    const secondaryActions = [
      {
        content: 'Save',
        onClick: action('Save Clicked')
      },
      {
        content: 'View Draft',
        onClick: action('Draft Clicked')
      },
      {
        content: 'Preview & Send',
        onClick: action('Preview Clicked')
      }
    ];
    const breadcrumbAction = {
      content: 'Templates',
      onClick: action('Templates Clicked')
    }
    return (
      <Page
        primaryAction={primaryAction}
        secondaryActions={secondaryActions}
        breadcrumbAction={breadcrumbAction}
        title='Template #3' >
        <Panel sectioned>Content</Panel>
      </Page>
    )
  }))

  .add('with an empty state', withInfo()(() => {
    const primaryAction = {
        content: 'Create',
        onClick: action('Create Clicked'),
        color: 'orange'
      };
    return (
      <Page
        empty={{
          show: true,
          title: 'Empty State Title',
          content: <p>Empty State Content</p>
        }}
        primaryAction={primaryAction}
        title='Template #3'
      />
    )
  }));
