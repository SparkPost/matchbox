import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';
import { StoryContainer } from './helpers';

import { TextField } from '../src';

export default storiesOf('TextField', module).addDecorator(withKnobs)

  .add('Default', () => (
    <StoryContainer bg='white'>
      <TextField
        id='id'
        label='Name'
        placeholder='Leslie Knope'
      />
    </StoryContainer>
  ))

  .add('with an error', () => (
    <StoryContainer bg='white'>
      <TextField
        id='id'
        label='Name'
        error='You forgot your name!'
      />
    </StoryContainer>
  ));;
