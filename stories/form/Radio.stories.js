import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import StoryContainer from '../storyHelpers/StoryContainer';
import { Radio, UnstyledLink } from '@sparkpost/matchbox';

storiesOf('Form|Radio', module)
  .addDecorator((getStory) => (
    <StoryContainer bg='white'>{ getStory() }</StoryContainer>
  ))

  .add('Basic Radio Group', withInfo()(() => (
    <Radio.Group label='This is a radio group'>
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
    <Radio.Group>
      <Radio
        id='id'
        label='Check Me'
        disabled
       />
       <Radio
         id='id'
         label='Check Me'
         checked
         disabled
        />
     </Radio.Group>
  )))

  .add('With help text', withInfo()(() => (
    <Radio
      id='id'
      label='Check Me'
      helpText='Check this box'
     />
  )));
