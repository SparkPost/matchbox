import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import StoryContainer from '../storyHelpers/StoryContainer';

import { Tooltip, Button } from '@sparkpost/matchbox';

storiesOf('Overlays|Tooltip', module)
  .addDecorator((getStory) => (
    <StoryContainer>{ getStory() }</StoryContainer>
  ))
  .add('Default Style', withInfo({
    propTablesExclude: [Button, Button.Group]
  })(() => (
    <Button.Group>
      <Tooltip
        content='Messages an ISP or other remote domain accepted' >
        <Button onClick={action('click')}>Accepted</Button>
      </Tooltip>
      <Button disabled>Targeted</Button>
    </Button.Group>
  )))

  .add('Dark & top', withInfo({
    propTablesExclude: [Button, Button.Group]
  })(() => (
    <div style={{ marginTop: 100 }}>
      <Tooltip
        content='Messages an ISP or other remote domain accepted'
        dark top>
        <Button>Accepted</Button>
      </Tooltip>
    </div>
  )))

  .add('Positioned Automatically', withInfo({
    propTablesExclude: [Button, Button.Group],
    text: 'Tooltips are positioned automatically based on the components position. Use forcePosition to disable this behavior.'
  })(() => (
    <div>
      <p><small>Tooltips are positioned automatically based on the components position.</small></p>
      <p><small>Scroll down and hover</small></p>
      <div style={{height:'400px'}}/>
      <Tooltip
        content='Messages an ISP or other remote domain accepted'>
        <Button>Hover</Button>
      </Tooltip>
    </div>
  )))

  .add('With Specified Width', withInfo({
    propTablesExclude: [Button, Button.Group],
    text: 'Tooltips are positioned automatically based on the components position. Use forcePosition to disable this behavior.'
  })(() => (
    <div>
      <Tooltip width='auto' content='Short'>
        <Button>Hover</Button>
      </Tooltip>

      <Tooltip width='500px' content='Very long'>
        <Button>Hover</Button>
      </Tooltip>
    </div>
  )));
