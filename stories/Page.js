import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { StoryContainer } from './helpers';

import { Page, Panel } from '../src';

export default storiesOf('Page', module)
  .addDecorator((getStory) => (
    <StoryContainer>{ getStory() }</StoryContainer>
  ))

  .addWithInfo('with all props', () => {
    const primaryAction = {
        content: 'Publish',
        onClick: action('Publish Clicked')
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
  })

  .addWithInfo('with an empty state', () => {
    const primaryAction = {
        content: 'Create',
        onClick: action('Create Clicked')
      };
    return (
      <Page
        empty={{
          test: 1 == true,
          title: 'Empty State Title',
          content: <p>Empty State Content</p>
        }}
        primaryAction={primaryAction}
        title='Template #3'
      />
    )
  });
