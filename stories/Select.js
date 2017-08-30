import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { StoryContainer } from './helpers';

import { Select } from '../src';

const options = ['Foo', 2, 'Bar'];
const options2 = [
  {
    value: '1',
    label: 'One',
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
  .addWithInfo('Default', () => (
    <Select
      id='id'
      label='Select an option'
      placeholder='Leslie Knope'
      defaultValue='_placeholder'
      options={options2}
    />
  ))

  .addWithInfo('with strings or numbers', () => (
    <Select
      id='id'
      label='Select an option'
      placeholder='Leslie Knope'
      defaultValue='_placeholder'
      options={options}
    />
  ))

  .addWithInfo('with an error', () => (
    <Select
      id='id'
      label='Select an option'
      options={options2}
      error='Your forgot to select'
    />
  ))

  .addWithInfo('disabled', () => (
    <Select
      id='id'
      label='Select an option'
      options={options2}
      disabled
    />
  ))

  .addWithInfo('with help text', () => (
    <Select
      id='id'
      label='Select an option'
      options={options2}
      helpText="Remember to select something"
    />
  ));
