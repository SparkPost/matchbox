import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import StoryContainer from '../storyHelpers/StoryContainer';

import { Pager } from '@sparkpost/matchbox';

storiesOf('Navigation|Pager', module)
  .addDecorator((getStory) => (
    <StoryContainer>{ getStory() }</StoryContainer>
  ))

  .add('basic pager', withInfo()(() => (
    <Pager>
      <Pager.Previous onClick={action('Previous Page')} />
      <Pager.Next onClick={action('Next Page')} />
    </Pager>
  )))

  .add('with disabled buttons', withInfo()(() => (
    <Pager>
      <Pager.Previous disabled onClick={action('Previous Page')} />
      <Pager.Next disabled onClick={action('Next Page')} />
    </Pager>
  )));
