import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react';
import { StoryContainer } from './helpers';

import { Pagination } from '../src';

const pages = [
  {
    page: 1,
    selected: false,
    onSelect: action('Select')
  },
  {
    page: 2,
    selected: true,
    onSelect: action('Select')
  },
  {
    page: 3,
    selected: false,
    onSelect: action('Select')
  }
];

export default storiesOf('Pagination', module)
  .add('with a title', () => (
    <StoryContainer>
      <Pagination
        hasPrevious={true}
        hasNext={true}
      />

      <Pagination
        pages={pages}
        hasPrevious={true}
        hasNext={true}
      />
    </StoryContainer>
  ));
