import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { StoryContainer } from './helpers';

import { ProgressBar } from '../src';

export default storiesOf('ProgressBar', module)
  .addDecorator((getStory) => (
    <StoryContainer>{ getStory() }</StoryContainer>
  ))
  .add('Default', withInfo()(() => (
    <ProgressBar completed={54} color='red' />
  )));
