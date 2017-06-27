import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { StoryContainer } from './helpers';

import { ProgressBar } from '../src';

export default storiesOf('ProgressBar', module)

  .add('Default', () => (
    <StoryContainer bg='white'>
      <ProgressBar completed='100' />
      <ProgressBar completed='66' />
      <ProgressBar completed='33' />
      <ProgressBar />
    </StoryContainer>
  ));
