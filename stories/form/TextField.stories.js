import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { Autorenew, Search } from '@sparkpost/matchbox-icons';
import StoryContainer from '../storyHelpers/StoryContainer';
import { TextField, Button, Select, Tooltip } from '@sparkpost/matchbox';

export default storiesOf('Form|TextField', module)
  .addDecorator((getStory) => (
    <StoryContainer bg='white'>{ getStory() }</StoryContainer>
  ))
  .add('Basic TextField', withInfo()(() => (
    <TextField
      id='id'
      label='Name'
      placeholder='Leslie Knope'
    />
  )))

  .add('with an error', withInfo()(() => (
    <TextField
      id='id'
      label='Name'
      error='You forgot your name!'
    />
  )))

  .add('with the error in label', withInfo()(() => (
    <TextField
      id='id'
      label='Name'
      errorInLabel
      error='You forgot my name!'
    />
  )))

  .add('multiline', withInfo()(() => (
    <TextField
      id='id'
      label='Your Message'
      multiline
    />
  )))

  .add('disabled', withInfo()(() => (
    <TextField
      id='id'
      label='Template ID'
      value='template-12'
      disabled
    />
  )))

  .add('with help text', withInfo()(() => (
      <TextField
        id='id'
        label='Template ID'
        helpText='A unique ID for your template.'
      />
  )))

  .add('with connected components', withInfo()(() => (
      <TextField
        id='id'
        label='Date Range'
        value='July 21, 2017 - July 28, 2017'
        connectLeft={<Tooltip content='Hey'><Button>Injection Time</Button></Tooltip>}
        connectRight={<Select options={
          ['Last 24 Hours', 'Last Week']
        }/>}
      />
  )))

  .add('with prefix and suffix', withInfo()(() => (
      <TextField
        id='id'
        prefix='$'
        suffix={<Autorenew />}
        suffixClassname='test'
        style={{ textAlign: 'right' }}
      />
  )))

  .add('with connected component and suffix', withInfo()(() => (
      <TextField
        id='id'
        label='Date Range'
        value='July 21, 2017 - July 28, 2017'
        connectLeft={<Select options={
          ['Last 24 Hours', 'Last Week']
        }/>}
        suffix={<Search />}
      />
  )));
