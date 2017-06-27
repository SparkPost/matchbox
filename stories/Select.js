import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { StoryContainer } from './helpers';

import { Select } from '../src';

const options = ['Foo', 'Bar', 'Baz'];
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
      label='Name'
      placeholder='Leslie Knope'
      defaultValue='_placeholder'
      options={options2}
    />
  ))

  .addWithInfo('with an error', () => (
    <Select
      id='id'
      label='Name'
      options={options2}
      error='Your forgot to select'
    />
  ));
