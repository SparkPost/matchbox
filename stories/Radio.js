import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { StoryContainer } from './helpers';

import { Radio } from '../src';

export default storiesOf('Radio', module)
  .addDecorator((getStory) => (
    <StoryContainer bg='white'>{ getStory() }</StoryContainer>
  ))

  .addWithInfo('Default', () => (
    <Radio.Group>
      <Radio
        id='id'
        label='Option 1'
        name='group'
       />
     <Radio
       id='id2'
       label='Option 2'
       name='group'
      />
      <Radio
        id='id3'
        label='Option 3'
        name='group'
       />
    </Radio.Group>
  ))

  .addWithInfo('Disabled', () => (
    <Radio
      id='id'
      label='Check Me'
      disabled
     />
  ))

  .addWithInfo('With help text', () => (
    <Radio
      id='id'
      label='Check Me'
      helpText='Check this box'
     />
  ));
