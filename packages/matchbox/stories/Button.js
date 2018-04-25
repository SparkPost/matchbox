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
  .add('Default', withInfo()(() => (
    <div>
      <Button size='small'>Cancel</Button> &nbsp;

      <Button>Cancel</Button> &nbsp;

      <Button size='large'>Cancel</Button> &nbsp;

      <Button disabled>Cancel</Button> &nbsp;
    </div>
  )))

  .add('Primary', withInfo()(() => (
    <div>
      <Button primary size='small'>Add a domain</Button> &nbsp;

      <Button primary>Add a domain</Button> &nbsp;

      <Button primary size='large'>Add a domain</Button> &nbsp;

      <Button primary disabled>Add a domain</Button> &nbsp;
    </div>
  )))

  .add('Plain', withInfo()(() => (
    <div>
      <Button plain size='small'>Verify</Button> &nbsp;

      <Button plain>Verify</Button> &nbsp;

      <Button plain size='large'>Verify</Button> &nbsp;

      <Button plain disabled>Verify</Button> &nbsp;
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
