import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import StoryContainer from '../storyHelpers/StoryContainer';
import { Portal } from '@sparkpost/matchbox';

storiesOf('Utility|Portal', module)
  .addDecorator((getStory) => (
    <StoryContainer>{ getStory() }</StoryContainer>
  ))
  .add('basic portal', withInfo(
    'This component creates a react portal at the provided container element id, or appends to document body if not provided.'
  )(() => (
    <Portal>
      <div style={{ position: 'fixed', top: 10, left: 30 }}>Portal Content</div>
    </Portal>
  )));
