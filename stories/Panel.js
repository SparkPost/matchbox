import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react';
import { grayBg, StoryContainer } from './helpers';
import { withKnobs } from '@storybook/addon-knobs';

import { Panel, Action } from '../src';

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
  ))

  .add('with actions', () => {
    const actions = [
      {
        content: 'Edit',
        onClick: action('Edit Clicked')
      },
      {
        content: 'Delete',
        onClick: action('Delete Clicked')
      },
    ];
    return (
      <StoryContainer>
        <Panel actions={actions} sectioned accent title='Panel with Actions'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet perspiciatis harum reprehenderit, odio temporibus culpa beatae iure!
        </Panel>
      </StoryContainer>
    );
  });
