import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { StoryContainer } from './helpers';

import { Button, withPositioning } from '../src';
import { Tooltip } from '../src/components/Tooltip/Tooltip';
import ConnectedTooltip from '../src/components/Tooltip/Tooltip';


storiesOf('Tooltip', module)
  .addDecorator((getStory) => (
    <StoryContainer>{ getStory() }</StoryContainer>
  ))
  .addWithInfo('Default',
  () => (
    <Button.Group>
      <Tooltip
        content='Messages an ISP or other remote domain accepted' >
        <Button>Accepted</Button>
      </Tooltip>
      <Button>Targeted</Button>
    </Button.Group>
  ))

  .addWithInfo('Dark & top',
  () => (
    <div>
      <Tooltip
        content='Messages an ISP or other remote domain accepted'
        dark top>
        <Button>Accepted</Button>
      </Tooltip>
    </div>
  ))

  .addWithInfo('Left with horizontal offset',
  () => (
    <div style={{ textAlign: 'center' }}>
      <Tooltip
        content='Messages an ISP or other remote domain accepted'
        left horizontalOffset='-10px'>
        Hover
      </Tooltip>
    </div>
  ))

  .addWithInfo('Positioned Automatically',
  'Tooltips are positioned automatically based on the components position. use forcePosition to disable this behavior.',
  () => (
    <div>
      <small>scroll down</small>
      <div style={{height:'600px'}}/>
      <ConnectedTooltip
        content='Messages an ISP or other remote domain accepted'>
        <Button>Accepted</Button>
      </ConnectedTooltip>
    </div>
  ));
