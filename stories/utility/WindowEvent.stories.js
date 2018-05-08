import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import StoryContainer from '../storyHelpers/StoryContainer';
import { WindowEvent } from '@sparkpost/matchbox';

storiesOf('Utility|WindowEvent', module)
  .addDecorator((getStory) => (
    <StoryContainer>{ getStory() }</StoryContainer>
  ))
  .add('basic window event', withInfo(
    'This component does not render anything, but hit your keyboard and watch the action logger. This component handles event binding for you.'
  )(() => (
    <WindowEvent event='keydown' handler={action('Keydown')} />
  )));
