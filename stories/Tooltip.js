import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { StoryContainer } from './helpers';

import { Button, withPositioning } from '../src';
import { Tooltip } from '../src/components/Tooltip';

storiesOf('Tooltip', module)
  .addDecorator((getStory) => (
    <StoryContainer>{ getStory() }</StoryContainer>
  ))
  .add('Default',
  withInfo()(() => (
    <Button.Group>
      <Tooltip
        content='Messages an ISP or other remote domain accepted' >
        <Button onClick={action('click')}>Accepted</Button>
      </Tooltip>
      <Button>Targeted</Button>
    </Button.Group>
  )))

  .add('Dark & top',
  withInfo()(() => (
    <div>
      <Tooltip
        content='Messages an ISP or other remote domain accepted'
        dark top>
        <Button>Accepted</Button>
      </Tooltip>
    </div>
  )))

  .add('Left with horizontal offset',
  withInfo()(() => (
    <div style={{ textAlign: 'center' }}>
      <Tooltip
        content='Messages an ISP or other remote domain accepted'
        left horizontalOffset='-10px'>
        Hover
      </Tooltip>
    </div>
  )))

  .add('Positioned Automatically',
  withInfo('Tooltips are positioned automatically based on the components position. use forcePosition to disable this behavior.')(() => (
    <div>
      <p><small>Tooltips are positioned automatically based on the components position.</small></p>
      <p><small>Scroll down and hover</small></p>
      <div style={{height:'400px'}}/>
      <Tooltip
        content='Messages an ISP or other remote domain accepted'>
        <Button>Hover</Button>
      </Tooltip>
    </div>
  )));
