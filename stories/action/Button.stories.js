import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withSmartKnobs } from 'storybook-addon-smart-knobs'
import StoryContainer from '../storyHelpers/StoryContainer';

import { Button } from '@sparkpost/matchbox';

import { withKnobs, text } from '@storybook/addon-knobs';

export default storiesOf('Action|Button', module)
  .addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)
  .addDecorator((getStory) => (
    <StoryContainer bg='white'>{ getStory() }</StoryContainer>
  ))

  .add('Sizing', withInfo()(() => (
    <Button>Click Me</Button>
  )))

  .add('Colors', withInfo()(() => (
    <div>
      <p>
        <Button >Button</Button> &nbsp;
        <Button disabled>Disabled</Button> &nbsp;
        <Button flat>Flat</Button> &nbsp;
        <Button flat disabled>Flat Disabled</Button>
      </p>
      <p>
        <Button color='red'>Button</Button> &nbsp;
        <Button color='red' disabled>Disabled</Button> &nbsp;
        <Button color='red' flat>Flat</Button> &nbsp;
        <Button color='red' flat disabled>Flat Disabled</Button>
      </p>
      <p>
        <Button color='orange'>Button</Button> &nbsp;
        <Button color='orange' disabled>Disabled</Button> &nbsp;
        <Button color='orange' flat>Flat</Button> &nbsp;
        <Button color='orange' flat disabled>Flat Disabled</Button>
      </p>
      <p>
        <Button color='blue'>Button</Button> &nbsp;
        <Button color='blue' disabled>Disabled</Button> &nbsp;
        <Button color='blue' flat>Flat</Button> &nbsp;
        <Button color='blue' flat disabled>Flat Disabled</Button>
      </p>
      <p>
        <Button color='navy'>Button</Button> &nbsp;
        <Button color='navy' disabled>Disabled</Button> &nbsp;
        <Button color='navy' flat>Flat</Button> &nbsp;
        <Button color='navy' flat disabled>Flat Disabled</Button>
      </p>
      <p>
        <Button color='purple'>Button</Button> &nbsp;
        <Button color='purple' disabled>Disabled</Button> &nbsp;
        <Button color='purple' flat>Flat</Button> &nbsp;
        <Button color='purple' flat disabled>Flat Disabled</Button>
      </p>
    </div>
  )))

  .add('Destructive', withInfo()(() => (
    <div>
      <Button destructive size='small'>Delete domain</Button> &nbsp;
      <Button destructive>Delete domain</Button> &nbsp;
      <Button destructive size='large'>Delete domain</Button> &nbsp;
      <Button destructive disabled>Delete domain</Button> &nbsp;
    </div>
  )))

  .add('Outline', withInfo()(() => (
    <div>
      <Button outline size='small'>Manage IPs</Button> &nbsp;
      <Button outline>Manage IPs</Button> &nbsp;
      <Button outline size='large'>Manage IPs</Button> &nbsp;
      <Button outline disabled>Manage IPs</Button> &nbsp;
    </div>
  )))

  .add('External', withInfo()(() => (
      <Button to='http://google.com'>Google</Button>
  )))

  .add('Group', withInfo()(() => (
      <Button.Group>
        <Button>Linear</Button>
        <Button>Log</Button>
        <Button disabled>Sq Rt</Button>
      </Button.Group>
  )));
