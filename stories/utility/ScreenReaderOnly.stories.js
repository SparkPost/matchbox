import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import StoryContainer from '../storyHelpers/StoryContainer';
import { ScreenReaderOnly } from '@sparkpost/matchbox';

storiesOf('Utility|ScreenReaderOnly', module)
  .addDecorator(getStory => <StoryContainer>{getStory()}</StoryContainer>)
  .add(
    'Basic example',
    withInfo()(() => (
      <p>
        I am content that is available to all users...
        <ScreenReaderOnly id="example-id">
          ...and I am content that is only available to screen reader users.
        </ScreenReaderOnly>
      </p>
    )),
  )
  .add(
    'As a div',
    withInfo()(() => (
      <ScreenReaderOnly as="div">
        <h2>I am a block-level element that must be inside another block-level element</h2>
      </ScreenReaderOnly>
    )),
  );
