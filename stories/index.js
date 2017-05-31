import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import backgrounds from 'react-storybook-addon-backgrounds';
import { bgColors, StoryContainer } from './helpers';

import Welcome from './Welcome';
import { Panel } from '../src';
import ButtonStories from './Button';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <StoryContainer><Welcome showApp={linkTo('Panel')}/></StoryContainer>
  ));

storiesOf('Panel', module).addDecorator(backgrounds(bgColors))
  .add('with a title', () => (
    <StoryContainer>
      <Panel title="Title" sectioned>This is a panel with a title</Panel>
    </StoryContainer>
  ))
  .add('highlighted with a title', () => (
    <StoryContainer>
      <Panel title="Title" accent sectioned>This is a highlighted panel with a title</Panel>
    </StoryContainer>
  ))
  .add('with multiple sections', () => (
    <StoryContainer>
      <Panel>
        <Panel.Section>This is a panel with sections</Panel.Section>
        <Panel.Section>This is a panel with sections</Panel.Section>
        <Panel.Section>This is a panel with sections</Panel.Section>
      </Panel>
    </StoryContainer>
  ));
