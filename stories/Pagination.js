import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { StoryContainer } from './helpers';

import { Pagination } from '../src';

export default storiesOf('Pagination', module)
  .add('Default', () => (
    <StoryContainer>
      <Pagination
        pages={4}
        pageRange={4}
        onChange={action('Page Changed')}
      />

      <Pagination
        pages={13}
        pageRange={7}
        initialIndex={4}
        onChange={action('Page Changed')}
      />
    </StoryContainer>
  ));
