import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import StoryContainer from '../storyHelpers/StoryContainer';

import { Pagination } from '@sparkpost/matchbox';

export default storiesOf('Navigation|Pagination', module)
  .addDecorator((getStory) => (
    <StoryContainer>{getStory()}</StoryContainer>
  ))

  .add('with no margins', withInfo()(() => (
    <div data-id="pagination-no-margin">
      <Pagination
        pages={8}
        pageRange={3}
        marginsHidden
        onChange={action('Page Changed')}
      />
    </div>
  )))

  .add('with lots of pages and flat buttons', withInfo()(() => (
    <div data-id="pagination-flat">
      <Pagination
        flat
        pages={30}
        pageRange={3}
        selectedColor='navy'
        onChange={action('Page Changed')}
      />
    </div>
  )));
