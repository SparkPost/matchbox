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
        <ProgressBar mb={800} completed={54} />
        <ProgressBar completed={82} size="small" />
      </div>
    )),
  );
