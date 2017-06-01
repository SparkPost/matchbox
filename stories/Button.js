import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';
import { whiteBg, StoryContainer } from './helpers';

import { Button } from '../src';

const sizeLabel = 'Size';
const sizes = {
  default: 'default',
  small: 'small',
  large: 'large'
};
const sizeDefault = 'default';

export default storiesOf('Button', module).addDecorator(withKnobs)

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

  .add('Knobs', () => (
    <StoryContainer bg='white'>
      <Button
        size={select(sizeLabel, sizes, sizeDefault)}
        primary={boolean('Primary', false)}
        plain={boolean('Plain', false)}
        destructive={boolean('Destructive', false)}
        disabled={boolean('Disabled', false)}
        >
        Button
      </Button>
      <p>Play with props in the Knobs tab on the right</p>
    </StoryContainer>
  ));
