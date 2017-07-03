import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { StoryContainer } from './helpers';

import { Panel, Action } from '../src';

storiesOf('Panel', module)
  .addDecorator((getStory) => (
    <StoryContainer>{ getStory() }</StoryContainer>
  ))
  .addWithInfo('with a title', () => (
    <Panel title="Title" sectioned>This is a panel with a title</Panel>
  ))

  .addWithInfo('highlighted with a title', () => (
      <Panel title="Title" accent sectioned>This is a highlighted panel with a title</Panel>
  ))

  .addWithInfo('with multiple sections',
  () => (
      <Panel>
        <Panel.Section>This is a panel with sections</Panel.Section>
        <Panel.Section>This is a panel with sections</Panel.Section>
        <Panel.Section>This is a panel with sections</Panel.Section>
      </Panel>
  ))

  .addWithInfo('with actions', () => {
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
    const sectionActions = [
      {
        content: 'View Details',
        onClick: action('Details Clicked')
      }
    ];
    return (
        <Panel
          actions={actions}
          accent
          title='Panel with Actions'>
          <Panel.Section
            actions={sectionActions} >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet perspiciatis harum reprehenderit, odio temporibus culpa beatae iure!
          </Panel.Section>
        </Panel>
    );
  });
