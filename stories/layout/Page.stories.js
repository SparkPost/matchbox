import React from 'react';

import { Page, Panel, Button, TextField } from '@sparkpost/matchbox';
import { Save, ArrowDropDown, Search, Code } from '@sparkpost/matchbox-icons';

export default {
  title: 'Layout/Page',
};

const primaryAction = {
  content: 'Publish',
  onClick: () => console.log('Publish Clicked'),
  color: 'orange',
};

const secondaryActions = [
  {
    content: (
      <span>
        <Save /> Save
      </span>
    ),
    onClick: () => console.log('Save Clicked'),
    is: 'button',
  },
  {
    content: 'View Draft',
    onClick: () => console.log('Draft Clicked'),
    is: 'button',
  },
  {
    content: 'Preview & Send',
    onClick: () => console.log('Preview Clicked'),
    is: 'button',
  },
  {
    content: 'Not Visible',
    visible: false,
  },
];
const breadcrumbAction = {
  content: 'Templates',
  onClick: () => console.log('Templates Clicked'),
};

export const BasicExample = () => (
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
);

export const WithOnlyOneSecondaryAction = () => (
  <Page
    primaryAction={primaryAction}
    secondaryActions={[
      {
        content: 'Save',
        onClick: () => console.log('Save Clicked'),
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
);

export const WithColoredActions = () => (
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
);

export const PrimaryArea = () => (
  <Page
    title="Signals"
    subtitle="Health Score for test.com"
    primaryArea={
      <Button color="red" outline>
        Primary
      </Button>
    }
  />
);

export const SubtitleNodeAndPrimaryArea = () => (
  <Page
    title={
      <span>
        <Code size={30} style={{ marginTop: '-0.1em' }} /> Template #3
      </span>
    }
    subtitle={
      <Button flat>
        Select Something <ArrowDropDown />
      </Button>
    }
    primaryArea={
      <div style={{ width: '200px' }}>
        <TextField placeholder="Search..." prefix={<Search />} />
      </div>
    }
  />
);
