import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { StoryContainer } from './helpers';

import { Pagination } from '../src';

export default storiesOf('Pagination', module)
  .addDecorator((getStory) => (
    <StoryContainer>{ getStory() }</StoryContainer>
  ))

  .addWithInfo('with initial index', () => (
    <Pagination
      pages={4}
      pageRange={4}
      initialIndex={3}
      onChange={action('Page Changed')}
    />
  ))

  .addWithInfo('with lots of pages', () => (
    <Pagination
      pages={13}
      pageRange={7}
      onChange={action('Page Changed')}
      marginsHidden
    />
  ));
