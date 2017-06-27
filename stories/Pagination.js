import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react';
import { StoryContainer } from './helpers';

import { Pagination } from '../src';

export default storiesOf('Pagination', module)
  .add('with a title', () => (
    <StoryContainer>

      <Pagination
        pages={4}
        pageRange={5}
        initialIndex={2}
        onChange={(selected) => {
          console.log(selected, ' in story')
          action('sdf')
        }}
      />

      <Pagination
        pages={11}
        pageRange={5}
        initialIndex={3}
        onChange={(selected) => {
          console.log(selected, ' in story')
          action('sdf')
        }}
      />
    </StoryContainer>
  ));
