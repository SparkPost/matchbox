import React from 'react';
// import { withInfo } from '@storybook/addon-info';
// import { action } from '@storybook/addon-actions';
import { Panel } from '@sparkpost/matchbox';

export default {
  title: 'Layout|Panel',
};

export const WithAHeader = () => (
  <Panel>
    <Panel.Header>Title</Panel.Header>
    <Panel.Section>Section Content</Panel.Section>
  </Panel>
);

export const WithAccent = () => (
  <Panel accent>
    <Panel.Section>This is a highlighted panel with a title</Panel.Section>
  </Panel>
);

export const WithSections = () => (
  <Panel>
    <Panel.Section>Section Content</Panel.Section>
    <Panel.Section>Section Content</Panel.Section>
    <Panel.Section>Section Content</Panel.Section>
  </Panel>
);

export const WithActions = () => (
  <Panel accent="red">
    <Panel.Header>
      <Panel.Action>Action</Panel.Action>
      <Panel.Action>Action</Panel.Action>
      Header
    </Panel.Header>
    <Panel.Section>
      <Panel.Action>View Details</Panel.Action>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet perspiciatis harum
      reprehenderit, odio temporibus culpa beatae iure!
    </Panel.Section>
  </Panel>
);

export const HeaderWithBorder = () => (
  <Panel accent="red">
    <Panel.Header borderBottom>
      <Panel.Action>Action</Panel.Action>
      <Panel.Action>Action</Panel.Action>
      Header
    </Panel.Header>
    <Panel.Section>
      <Panel.Action>View Details</Panel.Action>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet perspiciatis harum
      reprehenderit, odio temporibus culpa beatae iure!
    </Panel.Section>
  </Panel>
);
