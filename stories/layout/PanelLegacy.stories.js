import React from 'react';

import { Panel, Columns, Column } from '@sparkpost/matchbox';

export default {
  title: 'Layout/Legacy Panel',
};

export const WithATitle = () => (
  <Panel.LEGACY className="my-class" title="Title" sectioned>
    This is a panel with a title
  </Panel.LEGACY>
);

export const WithAnAccent = () => (
  <>
    <Panel.LEGACY mb={300} accent sectioned>
      This is a highlighted panel with a title
    </Panel.LEGACY>
    <Panel.LEGACY mb={300} accent="orange" sectioned>
      This is a highlighted panel with a title
    </Panel.LEGACY>
  </>
);

export const WithAFooter = () => (
  <>
    <Panel.LEGACY title="Title" accent sectioned>
      This is a panel
    </Panel.LEGACY>
    <Panel.LEGACY.Footer mb={400} left="Left aligned" right="Right aligned"></Panel.LEGACY.Footer>

    <Panel.LEGACY title="Title" accent sectioned>
      This is a panel
    </Panel.LEGACY>
    <Panel.LEGACY.Footer mb={400} left="Left aligned" right="Right aligned"></Panel.LEGACY.Footer>
  </>
);

export const WithMultipleSections = () => (
  <Panel.LEGACY>
    <Panel.LEGACY.Section>This is a panel with sections</Panel.LEGACY.Section>
    <Panel.LEGACY.Section className="test-class">
      This is a panel with sections
    </Panel.LEGACY.Section>
    <Panel.LEGACY.Section>This is a panel with sections</Panel.LEGACY.Section>
  </Panel.LEGACY>
);

export const WithActions = () => {
  const actions = [
    {
      content: 'Edit',
      onClick: () => console.log('Edit Clicked'),
      color: 'red',
    },
    {
      content: 'Delete',
      onClick: () => console.log('Delete Clicked'),
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
      onClick: () => console.log('Details Clicked'),
      color: 'red',
    },
    {
      content: 'Not Visible',
      visible: false,
    },
  ];
  return (
    <Panel.LEGACY actions={actions} accent="red" title="Panel with Actions">
      <Panel.LEGACY.Section actions={sectionActions}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet perspiciatis harum
          reprehenderit, odio temporibus culpa beatae iure!
        </p>
      </Panel.LEGACY.Section>
    </Panel.LEGACY>
  );
};

export const SystemProps = () => (
  <>
    <Panel.LEGACY mb="400">
      <p>This panel should have no padding</p>
    </Panel.LEGACY>

    <Panel.LEGACY sectioned mb="400">
      <p>This panel should default to 400 padding</p>
    </Panel.LEGACY>

    <Panel.LEGACY mb="400">
      <Panel.LEGACY.Section>
        <p>These sections should default to 400 padding</p>
      </Panel.LEGACY.Section>
      <Panel.LEGACY.Section>
        <p>These sections should default to 400 padding</p>
      </Panel.LEGACY.Section>
    </Panel.LEGACY>

    <Panel.LEGACY padding="200" mb="400">
      <Panel.LEGACY.Section>
        <p>This section should inherit 200 panel padding</p>
      </Panel.LEGACY.Section>
      <Panel.LEGACY.Section p="800">
        <p>This section should have 800 padding</p>
      </Panel.LEGACY.Section>
      <Panel.LEGACY.Section py="700">
        <p>This section should inherit 200 px but overried 700 py</p>
      </Panel.LEGACY.Section>
    </Panel.LEGACY>
  </>
);

export const AsCards = () => (
  <Columns>
    <Column>
      <Panel.LEGACY p="400" height="100%" borderTop="none">
        <Panel.LEGACY.Section>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet perspiciatis harum
          reprehenderit, odio temporibus culpa beatae iure!
        </Panel.LEGACY.Section>
        <Panel.LEGACY.Section>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet perspiciatis harum
          reprehenderit, odio temporibus culpa beatae iure!
        </Panel.LEGACY.Section>
        <Panel.LEGACY.Section>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet perspiciatis harum
          reprehenderit, odio temporibus culpa beatae iure!
        </Panel.LEGACY.Section>
      </Panel.LEGACY>
    </Column>
    <Column>
      <Panel.LEGACY height="100%" borderRight="none">
        <Panel.LEGACY.Section>Lorem Ipsum</Panel.LEGACY.Section>
        <Panel.LEGACY.Section>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Panel.LEGACY.Section>
      </Panel.LEGACY>
    </Column>
    <Column>
      <Panel.LEGACY height="50%" width="50%">
        <Panel.LEGACY.Section>
          Lprehenderit, odio temporibus culpa beatae iure!
        </Panel.LEGACY.Section>
      </Panel.LEGACY>
    </Column>
  </Columns>
);

export const ResonsiveSystemProps = () => (
  <>
    <Panel.LEGACY sectioned my={['200', '300', '600', '800']} mb="400">
      <p>Responsive MY</p>
    </Panel.LEGACY>

    <Panel.LEGACY p={['600', '200', '500', '800']}>
      <Panel.LEGACY.Section>
        <p>Responsive padding inherited</p>
      </Panel.LEGACY.Section>
      <Panel.LEGACY.Section p={['600', '600', '800', '200']}>
        <p>Responsive padding on section</p>
      </Panel.LEGACY.Section>
    </Panel.LEGACY>
  </>
);
