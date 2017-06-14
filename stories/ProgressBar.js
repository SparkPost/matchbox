import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';
import { StoryContainer } from './helpers';

import { ProgressBar } from '../src';

export default storiesOf('ProgressBar', module).addDecorator(withKnobs)

  .add('Default', () => (
    <StoryContainer bg='white'>
      <ProgressBar completed='80%' />
      <ProgressBar completed='50%' />
      <ProgressBar completed='20%' />
    </StoryContainer>
  ));
