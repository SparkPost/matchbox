import React from 'react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { ThemeProvider, Page, Panel, Button, TextField } from '@sparkpost/matchbox';
import { Save, ArrowDropDown, Search, Code } from '@sparkpost/matchbox-icons';
import TemplatesImage from '../storyHelpers/TemplatesImage';

addDecorator(storyFn => <ThemeProvider>{storyFn()}</ThemeProvider>);

export default {
  title: 'Layout|Page',
};

const infoOptions = { propTables: [Page] };

const primaryAction = {
  content: 'Publish',
  onClick: action('Publish Clicked'),
  color: 'orange',
};

const secondaryActions = [
  {
    content: (
      <span>
        <Save /> Save
      </span>
    ),
    onClick: action('Save Clicked'),
  },
  {
    content: 'View Draft',
    onClick: action('Draft Clicked'),
  },
  {
    content: 'Preview & Send',
    onClick: action('Preview Clicked'),
  },
  {
    content: 'Not Visible',
    visible: false,
  },
];
const breadcrumbAction = {
  content: 'Templates',
  onClick: action('Templates Clicked'),
};

export const BasicExample = withInfo(infoOptions)(() => (
  <Page
    primaryAction={primaryAction}
    secondaryActions={secondaryActions}
    breadcrumbAction={breadcrumbAction}
    title="Template #3"
    subtitle="Published"
  >
    <Panel sectioned>Content</Panel>
  </Page>
));

export const EmbeddedEmptyState = withInfo(infoOptions)(() => (
  <Page
    empty={{
      show: true,
      content: <p>Build, test, preview and send your transmissions.</p>,
      image: TemplatesImage,
      title: 'Manage your email templates',
      primaryAction: {
        content: 'Create Template',
        onClick: action('Create Template'),
        color: 'orange',
      },
      secondaryAction: { content: 'Learn More', onClick: action('Learn More') },
    }}
  />
));

export const PrimaryArea = withInfo(infoOptions)(() => (
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

export const SubtitleNodeAndPrimaryArea = withInfo(infoOptions)(() => (
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
));
