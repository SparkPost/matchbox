import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';
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

export default storiesOf('Select', module).addDecorator(withKnobs)

  .add('Default', () => (
    <StoryContainer bg='white'>
      <Select
        id='id'
        label='Name'
        placeholder='Leslie Knope'
        options={options}
      />
    </StoryContainer>
  ));
