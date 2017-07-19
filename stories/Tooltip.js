import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { StoryContainer } from './helpers';

import { Tooltip, Button } from '../src';

storiesOf('Tooltip', module)
  .addDecorator((getStory) => (
    <StoryContainer>{ getStory() }</StoryContainer>
  ))
  .addWithInfo('Default',
  () => (
    <div>
      <Tooltip
        content='Messages an ISP or other remote domain accepted' >
        <Button>Accepted</Button>
      </Tooltip>
    </div>
  ))

  .addWithInfo('Dark & top',
  () => (
    <div>
      <Tooltip
        content='Messages an ISP or other remote domain accepted'
        dark position='top'>
        <Button>Accepted</Button>
      </Tooltip>
    </div>
  ));
