import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react';
import { grayBg, StoryContainer } from './helpers';
import { withKnobs } from '@storybook/addon-knobs';

import { Panel } from '../src';

storiesOf('Panel', module)
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
