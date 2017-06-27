import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { StoryContainer } from './helpers';

import { TextField } from '../src';

export default storiesOf('TextField', module)
  .addDecorator((getStory) => (
    <StoryContainer bg='white'>{ getStory() }</StoryContainer>
  ))
  .addWithInfo('Default', () => (
    <TextField
      id='id'
      label='Name'
      placeholder='Leslie Knope'
    />
  ))

  .addWithInfo('with an error', () => (
    <TextField
      id='id'
      label='Name'
      error='You forgot your name!'
    />
  ))

  .addWithInfo('multiline', () => (
    <TextField
      id='id'
      label='Your Message'
      multiline
    />
  ));
