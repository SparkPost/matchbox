import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import StoryContainer from '../storyHelpers/StoryContainer';

import { Pagination } from '@sparkpost/matchbox';

storiesOf('Navigation|Pagination', module)
  .addDecorator((getStory) => (
    <StoryContainer>{ getStory() }</StoryContainer>
  ))

  .add('with no margins', withInfo()(() => (
    <Pagination
      pages={8}
      pageRange={3}
      marginsHidden
      onChange={action('Page Changed')}
    />
  )))

  .add('with lots of pages and flat buttons', withInfo()(() => (
    <Pagination
      flat
      pages={30}
      pageRange={7}
      selectedColor='navy'
      onChange={action('Page Changed')}
    />
  )));
