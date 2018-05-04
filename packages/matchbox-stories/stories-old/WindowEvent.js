import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { StoryContainer } from './helpers';

import { WindowEvent } from '../src';

storiesOf('Window Event', module)
  .addDecorator((getStory) => (
    <StoryContainer>{ getStory() }</StoryContainer>
  ))
  .add('Default Window Event',
  withInfo()(() => (
    <span>
      This component does not render anything, but hit your keyboard and watch the action logger.
      <WindowEvent event='keydown' handler={action('Keydown')} />
    </span>
  )));
