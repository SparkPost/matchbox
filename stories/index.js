import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react';
import { StoryContainer } from './helpers';

import Welcome from './Welcome';
import { Panel, TextField, Button } from '../src';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Panel')}/>
  ))

  .add('demo', () => (
    <StoryContainer>
      <Panel accent title='Yo'>
        <Panel.Section>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat saepe voluptate earum vitae tenetur minima optio veritatis modi ullam enim. Fugiat atque, commodi natus deserunt vel obcaecati cum maxime dolores.
        </Panel.Section>
        <Panel.Section>
          <Button primary size='large' onClick={action('hey')}>
            Submit
          </Button>
        </Panel.Section>
      </Panel>
    </StoryContainer>
  ));
