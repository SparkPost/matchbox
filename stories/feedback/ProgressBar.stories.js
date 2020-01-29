import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import StoryContainer from '../storyHelpers/StoryContainer';

import { ProgressBar } from '@sparkpost/matchbox';

storiesOf('Feedback|ProgressBar', module)
  .addDecorator(getStory => <StoryContainer>{getStory()}</StoryContainer>)
  .add(
    'Default',
    withInfo()(() => (
      <div>
        <ProgressBar completed={54} color="purple" />
        <ProgressBar completed={82} size="small" />
      </div>
    )),
  );
