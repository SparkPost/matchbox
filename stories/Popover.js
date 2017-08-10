import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { StoryContainer } from './helpers';

import { Popover, Button, TextField } from '../src';

export default storiesOf('Popover', module)
  .addDecorator((getStory) => (
    <StoryContainer>{ getStory() }</StoryContainer>
  ))
  .addWithInfo('Default', () => {
    const trigger = () => <Button>Trigger</Button>;

    return (
      <div>
        <Popover
          trigger={<Button onClick={action('Trigger Click')}>Trigger</Button>}
          sectioned
          style={{ width: '400px' }}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit unde eius eligendi, quod sed maxime quis nam error suscipit.</p>
          <Button primary>Yup</Button>
        </Popover>
        <br/><br/><br/><br/><br/><br/>
        <Popover
          trigger={<TextField onClick={action('Trigger Click')} />}
          sectioned
          style={{ width: '400px' }}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit unde eius eligendi, quod sed maxime quis nam error suscipit.</p>
          <Button primary>Yup</Button>
        </Popover>
      </div>
    );
  });
