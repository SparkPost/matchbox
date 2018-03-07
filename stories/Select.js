import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { StoryContainer } from './helpers';

import { Select } from '../src';

const options = ['Foo', 2, 'Bar'];
const options2 = [
  {
    value: 1,
    label: 'One',
    pass: 'through'
  },
  {
    value: '2',
    label: 'Two',
  }
];

export default storiesOf('Select', module)
  .addDecorator((getStory) => (
    <StoryContainer bg='white'>{ getStory() }</StoryContainer>
  ))
  .add('Default', withInfo()(() => (
    <Select
      id='id'
      label='Select an option'
      placeholder='Leslie Knope'
      defaultValue=''
      options={options2}
    />
  )))

  .add('with strings or numbers', withInfo()(() => (
    <Select
      id='id'
      label='Select an option'
      placeholder='Leslie Knope'
      options={options}
    />
  )))

  .add('with an error', withInfo()(() => (
    <Select
      id='id'
      label='Select an option'
      options={options2}
      error='Your forgot to select'
    />
  )))

  .add('disabled', withInfo()(() => (
    <Select
      id='id'
      label='Select an option'
      options={options2}
      disabled
    />
  )))

  .add('required', withInfo()(() => (
    <Select
      id='id'
      label='Select an option'
      options={options2}
      required
    />
  )))

  .add('with help text', withInfo()(() => (
    <Select
      id='id'
      label='Select an option'
      options={options2}
      helpText="Remember to select something"
    />
  )))

  .add('with custom value for placeholder', withInfo()(() => (
    <Select
      placeholderValue="NONE"
      placeholder='Select one'
      defaultValue="NONE"
      options={options2}
    />
  )));
