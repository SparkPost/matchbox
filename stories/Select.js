import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react';
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

  .add('Default', () => (
    <StoryContainer bg='white'>
      <Select
        id='id'
        label='Name'
        placeholder='Leslie Knope'
        defaultValue='_placeholder'
        options={options2}
      />

      <Select
        id='id'
        label='Name'
        labelHidden
        placeholder='Leslie Knope'
        defaultValue='_placeholder'
        options={options2}
      />
    </StoryContainer>
  ))

  .add('with an error', () => (
    <StoryContainer bg='white'>
      <Select
        id='id'
        label='Name'
        options={options2}
        error='Your forgot to select'
      />
    </StoryContainer>
  ));
