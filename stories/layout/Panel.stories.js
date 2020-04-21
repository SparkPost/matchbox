import React from 'react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from '@sparkpost/matchbox/components/ThemeProvider';

import { Panel } from '@sparkpost/matchbox';

addDecorator(storyFn => <ThemeProvider>{storyFn()}</ThemeProvider>);

export default {
  title: 'Layout|Panel',
};

export const WithATitle = withInfo()(() => (
  <Panel className="my-class" title="Title" sectioned>
    This is a panel with a title
  </Panel>
));

export const WithAnAccent = withInfo()(() => (
  <>
    <Panel mb={300} accent sectioned>
      This is a highlighted panel with a title
    </Panel>
    <Panel mb={300} accent="orange" sectioned>
      This is a highlighted panel with a title
    </Panel>
  </>
));

export const WithAFooter = withInfo()(() => (
  <>
    <Panel title="Title" accent sectioned>
      This is a panel
    </Panel>
    <Panel.Footer mb={400} left="Left aligned" right="Right aligned"></Panel.Footer>

    <Panel title="Title" accent sectioned>
      This is a panel
    </Panel>
    <Panel.Footer mb={400} left="Left aligned" right="Right aligned"></Panel.Footer>
  </>
));

export const WithMultipleSections = withInfo()(() => (
  <Panel>
    <Panel.Section>This is a panel with sections</Panel.Section>
    <Panel.Section>This is a panel with sections</Panel.Section>
    <Panel.Section>This is a panel with sections</Panel.Section>
  </Panel>
));

export const WithActions = withInfo()(() => {
  const actions = [
    {
      content: 'Edit',
      onClick: action('Edit Clicked'),
      color: 'red',
    },
    {
      content: 'Delete',
      onClick: action('Delete Clicked'),
      color: 'red',
    },
    {
      content: 'Not Visible',
      visible: false,
    },
  ];
  const sectionActions = [
    {
      content: 'View Details',
      onClick: action('Details Clicked'),
      color: 'red',
    },
    {
      content: 'Not Visible',
      visible: false,
    },
  ];
  return (
    <Panel actions={actions} accent="red" title="Panel with Actions">
      <Panel.Section actions={sectionActions}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet perspiciatis harum
          reprehenderit, odio temporibus culpa beatae iure!
        </p>
      </Panel.Section>
    </Panel>
  );
});

export const SystemProps = withInfo()(() => (
  <>
    <Panel mb="400">
      <p>This panel should have no padding</p>
    </Panel>

    <Panel sectioned mb="400">
      <p>This panel should default to 400 padding</p>
    </Panel>

    <Panel mb="400">
      <Panel.Section>
        <p>These sections should default to 400 padding</p>
      </Panel.Section>
      <Panel.Section>
        <p>These sections should default to 400 padding</p>
      </Panel.Section>
    </Panel>

    <Panel padding="200" mb="400">
      <Panel.Section>
        <p>This section should inherit 200 panel padding</p>
      </Panel.Section>
      <Panel.Section p="800">
        <p>This section should have 800 padding</p>
      </Panel.Section>
      <Panel.Section py="700">
        <p>This section should inherit 200 px but overried 700 py</p>
      </Panel.Section>
    </Panel>
  </>
));

export const ResonsiveSystemProps = withInfo()(() => (
  <>
    <Panel sectioned my={['200', '300', '600', '800']} mb="400">
      <p>Responsive MY</p>
    </Panel>

    <Panel p={['600', '200', '500', '800']}>
      <Panel.Section>
        <p>Responsive padding inherited</p>
      </Panel.Section>
      <Panel.Section p={['600', '600', '800', '200']}>
        <p>Responsive padding on section</p>
      </Panel.Section>
    </Panel>
  </>
));
