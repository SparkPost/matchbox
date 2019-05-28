import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import StoryContainer from '../storyHelpers/StoryContainer';

import { Slider } from '@sparkpost/matchbox';


export default storiesOf('Form|Slider', module)
  .addDecorator((getStory) => (
    <StoryContainer bg='white'>{ getStory() }</StoryContainer>
  ))

  .add('basic slider', withInfo({})(() => {
    return (
      <Slider defaultValue={50} />
    )
  }))
  .add('disabled slider', withInfo({})(() => {
    return (
      <Slider disabled value={75} />
    )
  }));
