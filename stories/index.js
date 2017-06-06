import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react';
import { StoryContainer } from './helpers';
import { withKnobs } from '@storybook/addon-knobs';

import Welcome from './Welcome';
import { Panel, TextField, Button } from '../src';

storiesOf('Welcome', module).addDecorator(withKnobs)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Panel')}/>
  ))

  .add('demo', () => (
    <StoryContainer>
      <Panel accent title='Yo'>
        <Panel.Section>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <form action=''>
            <TextField
              label='Name'
              placeholder='Leslie'
              error='knope is requried'
            />
          </form>

        </Panel.Section>
        <Panel.Section>
          <Button primary size='large'>Submit</Button>
          <Button size='small'>Cancel</Button>
        </Panel.Section>
      </Panel>

    </StoryContainer>
  ));
