import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { StoryContainer } from './helpers';

import { Popover, Datepicker, Button, TextField, ActionList } from '../src';

export default storiesOf('Popover', module)
  .addDecorator((getStory) => (
    <StoryContainer>{ getStory() }</StoryContainer>
  ))
  .add('With Datepicker', withInfo()(() => (
    <Button.Group>
      <Popover
        sectioned
        trigger={<Button onClick={action('Trigger Click')}>Button</Button>}
        onClose={action('Close')}
        style={{ width: '400px' }}>
        <Datepicker />
      </Popover>
      <Button>Button</Button>
    </Button.Group>
  )))
  .add('With Positioning and Wrapper', withInfo()(() => (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <Popover sectioned left top
        wrapper='div'
        trigger={<TextField/>}>
        <small>Top & Left</small>
      </Popover>
    </div>
  )))

  .add('with an ActionList', withInfo()(() => (
    <Popover
      open={true}
      trigger={<Button>More Actions</Button>}
      style={{ width: '200px' }}>
      <ActionList
        actions={[
          { content: 'Edit' },
          { content: 'Delete', selected: true },
          { content: 'Test' }
        ]}
        sections={[
          { actions: [
              { content: 'Sectioned1' },
              { content: 'Sectioned2' }
            ] }
        ]}
      />
    </Popover>
  )))
