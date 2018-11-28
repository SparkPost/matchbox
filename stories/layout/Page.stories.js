import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import StoryContainer from '../storyHelpers/StoryContainer';

import { Page, Panel, Button, TextField } from '@sparkpost/matchbox';
import { Save, ArrowDropDown, Search, Code } from '@sparkpost/matchbox-icons';
import TemplatesImage from '../storyHelpers/TemplatesImage';

export default storiesOf('Layout|Page', module)
  .addDecorator((getStory) => (
    <StoryContainer>{ getStory() }</StoryContainer>
  ))

  .add('basic page', withInfo({ propTablesExclude: [Panel] })(() => {
    const primaryAction = {
      content: 'Publish',
      onClick: action('Publish Clicked'),
      color: 'orange'
    };

    const secondaryActions = [
      {
        content: <span><Save /> Save</span>,
        onClick: action('Save Clicked')
      },
      {
        content: 'View Draft',
        onClick: action('Draft Clicked')
      },
      {
        content: 'Preview & Send',
        onClick: action('Preview Clicked')
      },
      {
        content: 'Not Visible',
        visible: false
      }
    ];
    const breadcrumbAction = {
      content: 'Templates',
      onClick: action('Templates Clicked')
    }
    return (
      <Page
        primaryAction={primaryAction}
        secondaryActions={secondaryActions}
        breadcrumbAction={breadcrumbAction}
        title='Template #3' >
        <Panel sectioned>Content</Panel>
      </Page>
    )
  }))

  .add('with an embedded empty state', withInfo()(() => {
    const primaryAction = {
      content: 'Create',
      onClick: action('Create Clicked'),
      color: 'orange'
    };
    return (
      <Page
        empty={{
          show: true,
          content: <p>Build, test, preview and send your transmissions.</p>,
          image: TemplatesImage,
          title: 'Manage your email templates',
          primaryAction: { content: 'Create Template', onClick: action('Create Template'), color: 'orange' },
          secondaryAction: { content: 'Learn More', onClick: action('Learn More') }
        }}
        primaryAction={primaryAction}
        title='Template #3'
      />
    )
  }))

  .add('with a subtitle and primary area', withInfo()(() => {
    return (
      <Page
        title='Template #3'
        subtitle='Subaccount 101'
        primaryArea={<Button>Primary</Button>}
      />
    )
  }))

  .add('with an icon, subtitle node, and primary area', withInfo()(() => {
    return (
      <Page
        title={<span><Code size={30} style={{ marginTop: '-0.1em' }} /> Template #3</span>}
        subtitle={<Button flat>Select Something <ArrowDropDown /></Button>}
        primaryArea={<div style={{ width: '200px' }}><TextField placeholder='Search...' prefix={<Search/>} /></div>}
      />
    )
  }));
