import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Welcome from './Welcome';
import { Foo } from '../src';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

  storiesOf('Foo', module)
    .add('with no props', () => (
      <Foo />
    ));
