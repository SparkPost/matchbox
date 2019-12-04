import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import StoryContainer from '../storyHelpers/StoryContainer';

import { Toggle } from '@sparkpost/matchbox';

export default storiesOf('Action|Toggle', module)
  .addDecorator((getStory) => (
    <StoryContainer bg='white'>{getStory()}</StoryContainer>
  ))

  .add('basic toggle', withInfo()(() => (
    <Toggle id='id' />
  )))

  .add('disabled toggle', withInfo()(() => (
    <Toggle id='id' disabled />
  )))

  .add('compact toggle', withInfo()(() => (
    <Toggle id='id' compact />
  )))

  .add('compact and disabled toggle', withInfo()(() => (
    <Toggle id='id' checked compact disabled />
  )));
