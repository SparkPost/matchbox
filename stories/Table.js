import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react';
import { StoryContainer } from './helpers';

storiesOf('Table', module)
  .add('Default', () => (
    <table></table>
  ));
