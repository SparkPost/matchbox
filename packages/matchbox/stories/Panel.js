import React, { Fragment } from 'react';
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

  .add('with an accent', withInfo()(() => (
    <Fragment>
      <Panel accent sectioned>This is a highlighted panel with a title</Panel>
      <Panel accent='navy' sectioned>This is a highlighted panel with a title</Panel>
    </Fragment>
  )))

  .add('with a footer', withInfo()(() => (
    <Fragment>
      <Panel title="Title" accent sectioned>This is a panel</Panel>
      <Panel.Footer left='Left aligned' right='Right aligned'></Panel.Footer>
    </Fragment>
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
        onClick: action('Edit Clicked'),
        color: 'red'
      },
      {
        content: 'Delete',
        onClick: action('Delete Clicked'),
        color: 'red'
      },
    ];
    const sectionActions = [
      {
        content: 'View Details',
        onClick: action('Details Clicked'),
        color: 'red'
      }
    ];
    return (
        <Panel
          actions={actions}
          accent='red'
          title='Panel with Actions'>
          <Panel.Section
            actions={sectionActions} >
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet perspiciatis harum reprehenderit, odio temporibus culpa beatae iure!</p>
          </Panel.Section>
        </Panel>
    );
  }));
