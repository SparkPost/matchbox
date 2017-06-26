import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react';
import { whiteBg, StoryContainer } from './helpers';

import { Button } from '../src';

const sizeLabel = 'Size';
const sizes = {
  default: 'default',
  small: 'small',
  large: 'large'
};
const sizeDefault = 'default';

export default storiesOf('Button', module)

  .add('Default', () => (
    <StoryContainer bg='white'>
      <p>Sizing</p>
      <Button size='small'>Cancel</Button> &nbsp;
      <Button>Cancel</Button> &nbsp;
      <Button size='large'>Cancel</Button>

      <p>Disabled</p>
      <Button disabled>Cancel</Button> &nbsp;
    </StoryContainer>
  ))

  .add('Primary', () => (
    <StoryContainer bg='white'>
      <p>Sizing</p>
      <Button primary size='small'>Add a domain</Button> &nbsp;
      <Button primary>Add a domain</Button> &nbsp;
      <Button primary size='large'>Add a domain</Button>

      <p>Disabled</p>
      <Button primary disabled>Add a domain</Button> &nbsp;
    </StoryContainer>
  ))

  .add('Plain', () => (
    <StoryContainer bg='white'>
      <p>Sizing</p>
      <Button plain size='small'>Verify</Button> &nbsp;
      <Button plain>Verify</Button> &nbsp;
      <Button plain size='large'>Verify</Button>

      <p>Disabled</p>
      <Button plain disabled>Verify</Button> &nbsp;
    </StoryContainer>
  ))

  .add('Destructive', () => (
    <StoryContainer bg='white'>
      <p>Sizing</p>
      <Button destructive size='small'>Delete domain</Button> &nbsp;
      <Button destructive>Delete domain</Button> &nbsp;
      <Button destructive size='large'>Delete domain</Button>

      <p>Disabled</p>
      <Button destructive disabled>Delete domain</Button> &nbsp;
    </StoryContainer>
  ))

  .add('Outline', () => (
    <StoryContainer bg='white'>
      <p>Sizing</p>
      <Button outline size='small'>Manage IPs</Button> &nbsp;
      <Button outline>Manage IPs</Button> &nbsp;
      <Button outline size='large'>Manage IPs</Button>

      <p>Disabled</p>
      <Button outline disabled>Manage IPs</Button> &nbsp;
    </StoryContainer>
  ));
