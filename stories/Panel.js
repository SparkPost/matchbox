import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { StoryContainer } from './helpers';

import { Panel, Action } from '../src';

storiesOf('Panel', module)
  .addDecorator((getStory) => (
    <StoryContainer>{ getStory() }</StoryContainer>
  ))
  .add('with a title', withInfo()(() => (
    <Panel title="Title" sectioned>This is a panel with a title</Panel>
  )))

  .add('highlighted with a title', withInfo()(() => (
      <Panel title="Title" accent sectioned>This is a highlighted panel with a title</Panel>
  )))

  .add('with multiple sections',
  withInfo()(() => (
      <Panel>
        <Panel.Section>This is a panel with sections</Panel.Section>
        <Panel.Section>This is a panel with sections</Panel.Section>
        <Panel.Section>This is a panel with sections</Panel.Section>
      </Panel>
  )))

  .add('with actions', withInfo()(() => {
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
            <h5>More Actions</h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet perspiciatis harum reprehenderit, odio temporibus culpa beatae iure!
          </Panel.Section>
        </Panel>
    );
  }));
