import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { StoryContainer } from './helpers';

import { Popover, Datepicker, Button, TextField } from '../src';

export default storiesOf('Popover', module)
  .addDecorator((getStory) => (
    <StoryContainer>{ getStory() }</StoryContainer>
  ))
  .addWithInfo('With Datepicker', () => (
      <div>
        <Popover
          trigger={<TextField onClick={action('Trigger Click')} value={new Date}/>}
          style={{ width: '400px' }}>
          <Datepicker />
        </Popover>
      </div>
    ));
