import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import StoryContainer from '../storyHelpers/StoryContainer';

import { ProgressBar } from '@sparkpost/matchbox';

export default storiesOf('Feedback|ProgressBar', module)
  .addDecorator((getStory) => (
    <StoryContainer>{ getStory() }</StoryContainer>
  ))
  .add('Default', withInfo()(() => (
    <ProgressBar completed={54} />
  )))
  .add('Sizes', withInfo()(() => (
    <div>
      <ProgressBar completed={54} size='small' />
      <ProgressBar completed={54} />
      <ProgressBar completed={54} size='large' />
    </div>
  )))
  .add('Colors', withInfo()(() => (
    <div>
      <ProgressBar completed={54} color='red' />
      <ProgressBar completed={54} color='orange' />
      <ProgressBar completed={54} color='yellow' />
      <ProgressBar completed={54} color='blue' />
      <ProgressBar completed={54} color='navy' />
      <ProgressBar completed={54} color='purple' />
    </div>
  )));
