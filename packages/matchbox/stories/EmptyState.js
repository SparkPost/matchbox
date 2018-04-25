import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { StoryContainer } from './helpers';

import { EmptyState, Panel } from '../src';

storiesOf('Empty State', module)
  .addDecorator((getStory) => (
    <StoryContainer>{ getStory() }</StoryContainer>
  ))
  .add('Default Empty State',
  withInfo()(() => (
    <EmptyState
      title='Manage your email templates'
      image='Generic'
      primaryAction={{ content: 'Create Template', onClick: action('Create Template') }}
      secondaryAction={{ content: 'Learn More', onClick: action('Learn More') }}>
      <p>Build, test, preview and send your transmissions.</p>
    </EmptyState>
  )));
