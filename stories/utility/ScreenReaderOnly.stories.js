import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import StoryContainer from '../storyHelpers/StoryContainer';
import { ScreenReaderOnly } from '@sparkpost/matchbox';

storiesOf('Utility|ScreenReaderOnly', module)
  .addDecorator(getStory => <StoryContainer>{getStory()}</StoryContainer>)
  .add(
    'basic example',
    withInfo(
      'This component hides content from sighted users, exposing it only to screen reader users.',
    )(() => (
      <p>
        I am content that is available to all users...
        <ScreenReaderOnly>
          ...and I am content that is only available to screen reader users.
        </ScreenReaderOnly>
      </p>
    )),
  );
