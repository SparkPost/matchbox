import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { StoryContainer } from './helpers';

import { Radio, UnstyledLink } from '../src';

export default storiesOf('Radio', module)
  .addDecorator((getStory) => (
    <StoryContainer bg='white'>{ getStory() }</StoryContainer>
  ))

  .add('Default', withInfo()(() => (
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
  )))

  .add('With JSX in Label', withInfo()(() => (
    <Radio
      id='id'
      label={<span>One radio <UnstyledLink>please</UnstyledLink></span>}
     />
  )))

  .add('Disabled', withInfo()(() => (
    <Radio
      id='id'
      label='Check Me'
      disabled
     />
  )))

  .add('With help text', withInfo()(() => (
    <Radio
      id='id'
      label='Check Me'
      helpText='Check this box'
     />
  )));
