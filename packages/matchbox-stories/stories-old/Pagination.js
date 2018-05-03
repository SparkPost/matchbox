import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { StoryContainer } from './helpers';

import { Pagination } from '../src';

export default storiesOf('Pagination', module)
  .addDecorator((getStory) => (
    <StoryContainer>{ getStory() }</StoryContainer>
  ))

  .add('with initial index', withInfo()(() => (
    <Pagination
      pages={4}
      pageRange={4}
      initialIndex={3}
      onChange={action('Page Changed')}
    />
  )))

  .add('with lots of pages', withInfo()(() => (
    <Pagination
      pages={30}
      pageRange={7}
      selectedColor='navy'
      onChange={action('Page Changed')}
    />
  )));
