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
      <Button.Group>
        <Popover
          sectioned
          trigger={<Button onClick={action('Trigger Click')} value={new Date}>Button</Button>}
          style={{ width: '400px' }}>
          <Datepicker />
        </Popover>
        <Button>Test</Button>
      </Button.Group>
    ));
