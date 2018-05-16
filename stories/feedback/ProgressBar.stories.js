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
    <ProgressBar completed={54} color='red' />
  )));
