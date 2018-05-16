import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import StoryContainer from '../storyHelpers/StoryContainer';

import { EmptyState } from '@sparkpost/matchbox';
import TemplatesImage from '../storyHelpers/TemplatesImage';

storiesOf('Layout|Empty State', module)
  .addDecorator((getStory) => (
    <StoryContainer>{ getStory() }</StoryContainer>
  ))
  .add('basic empty state', withInfo()(() => (
    <EmptyState
      title='Manage your email templates'
      image={TemplatesImage}
      primaryAction={{ content: 'Create Template', onClick: action('Create Template'), color: 'orange' }}
      secondaryAction={{ content: 'Learn More', onClick: action('Learn More') }}>
      <p>Build, test, preview and send your transmissions.</p>
    </EmptyState>
  )));
