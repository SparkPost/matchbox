import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { Page, Panel, Button } from '@sparkpost/matchbox';
import { Save } from '@sparkpost/matchbox-icons';

const primaryAction = {
  content: 'Publish',
  color: 'orange',
};

const secondaryActions = [
  {
    content: (
      <span>
        <Save /> Save
      </span>
    ),
    is: 'button',
  },
  {
    content: 'View Draft',
    is: 'button',
  },
  {
    content: 'Preview & Send',
    is: 'button',
  },
  {
    content: 'Not Visible',
    visible: false,
  },
];

const breadcrumbAction = {
  content: 'Templates',
};

describe('Page', () => {
  add('basic usage', () => (
    <Page
      primaryAction={primaryAction}
      secondaryActions={secondaryActions}
      breadcrumbAction={breadcrumbAction}
      title="Template #3"
      subtitle="Published"
    >
      <Panel>
        <Panel.Section>Content</Panel.Section>
      </Panel>
    </Page>
  ));

  add('with a single secondary action', () => (
    <Page
      primaryAction={primaryAction}
      secondaryActions={[
        {
          content: 'Save',
        },
      ]}
      breadcrumbAction={breadcrumbAction}
      title="Template #3"
      subtitle="Published"
    >
      <Panel>
        <Panel.Section>Content</Panel.Section>
      </Panel>
    </Page>
  ));

  add('with action with color', () => (
    <Page
      primaryAction={{
        content: 'This should be red',
        color: 'red',
      }}
      title="Template #3"
      subtitle="Published"
    >
      <Panel>
        <Panel.Section>Content</Panel.Section>
      </Panel>
    </Page>
  ));

  add('embedded empty state', () => (
    <Page
      empty={{
        show: true,
        content: <p>Build, test, preview and send your transmissions.</p>,
        title: 'Manage your email templates',
        primaryAction: {
          content: 'Create Template',
          color: 'orange',
        },
        secondaryAction: { content: 'Learn More' },
      }}
    />
  ));

  add('JSX in primary area', () => (
    <Page
      title="Signals"
      subtitle="Health Score for test.com"
      primaryArea={
        <Button color="red" outline>
          Primary
        </Button>
      }
    />
  ));
});
