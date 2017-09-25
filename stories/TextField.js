import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { StoryContainer } from './helpers';

import { TextField, Button, Select, Icon, Tooltip } from '../src';

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
  ))

  .addWithInfo('disabled', () => (
    <TextField
      id='id'
      label='Template ID'
      value='template-12'
      disabled
    />
  ))

  .addWithInfo('with help text', () => (
      <TextField
        id='id'
        label='Template ID'
        helpText='A unique ID for your template.'
      />
  ))

  .addWithInfo('with connected components', () => (
      <TextField
        id='id'
        label='Date Range'
        value='July 21, 2017 - July 28, 2017'
        connectLeft={<Tooltip content='Hey'><Button>Injection Time</Button></Tooltip>}
        connectRight={<Select options={
          ['Last 24 Hours', 'Last Week']
        }/>}
      />
  ))

  .addWithInfo('with prefix and suffix', () => (
      <TextField
        id='id'
        prefix='$'
        suffix={<Icon name='Renew' />}
      />
  ));
