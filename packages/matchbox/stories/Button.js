import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { StoryContainer } from './helpers';

import { Button } from '../src';

const sizeLabel = 'Size';
const sizes = {
  default: 'default',
  small: 'small',
  large: 'large'
};
const sizeDefault = 'default';

export default storiesOf('Button', module)
  .addDecorator((getStory) => (
    <StoryContainer bg='white'>{ getStory() }</StoryContainer>
  ))

  .add('Sizing', withInfo()(() => (
    <div>
      <Button size='small'>Small Button</Button> &nbsp;
      <Button>Default Button</Button> &nbsp;
      <Button size='large'>Large Button</Button>
    </div>
  )))

  .add('Colors', withInfo()(() => (
    <div>
      <p>
        <Button >Button</Button> &nbsp;
        <Button disabled>Disabled</Button> &nbsp;
        <Button plain>Plain</Button> &nbsp;
        <Button plain disabled>Plain Disabled</Button>
      </p>
      <p>
        <Button color='red'>Button</Button> &nbsp;
        <Button color='red' disabled>Disabled</Button> &nbsp;
        <Button color='red' plain>Plain</Button> &nbsp;
        <Button color='red' plain disabled>Plain Disabled</Button>
      </p>
      <p>
        <Button color='orange'>Button</Button> &nbsp;
        <Button color='orange' disabled>Disabled</Button> &nbsp;
        <Button color='orange' plain>Plain</Button> &nbsp;
        <Button color='orange' plain disabled>Plain Disabled</Button>
      </p>
      <p>
        <Button color='blue'>Button</Button> &nbsp;
        <Button color='blue' disabled>Disabled</Button> &nbsp;
        <Button color='blue' plain>Plain</Button> &nbsp;
        <Button color='blue' plain disabled>Plain Disabled</Button>
      </p>
      <p>
        <Button color='navy'>Button</Button> &nbsp;
        <Button color='navy' disabled>Disabled</Button> &nbsp;
        <Button color='navy' plain>Plain</Button> &nbsp;
        <Button color='navy' plain disabled>Plain Disabled</Button>
      </p>
      <p>
        <Button color='purple'>Button</Button> &nbsp;
        <Button color='purple' disabled>Disabled</Button> &nbsp;
        <Button color='purple' plain>Plain</Button> &nbsp;
        <Button color='purple' plain disabled>Plain Disabled</Button>
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
