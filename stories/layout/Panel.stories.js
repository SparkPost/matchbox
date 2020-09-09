import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { Button, Panel, Columns, Column } from '@sparkpost/matchbox';

export default {
  title: 'Layout|Panel',
};

export const WithAHeader = withInfo()(() => (
  <Panel data-id="my-panel">
    <Panel.Header>Title</Panel.Header>
    <Panel.Section>Section Content</Panel.Section>
  </Panel>
));

export const WithAccent = withInfo()(() => (
  <Panel accent>
    <Panel.Section>This is a highlighted panel with a title</Panel.Section>
  </Panel>
));

export const WithSections = withInfo()(() => (
  <Panel>
    <Panel.Section>Section Content</Panel.Section>
    <Panel.Section>Section Content</Panel.Section>
    <Panel.Section>
      <Button fullWidth>test</Button>
    </Panel.Section>
  </Panel>
));

export const WithActions = withInfo()(() => (
  <Panel accent="gray">
    <Panel.Header>
      <Panel.Action>Action</Panel.Action>
      <Panel.Action>Action</Panel.Action>
      Header Header Header Header Header Header
    </Panel.Header>
    <Panel.Section>
      <Panel.Action>View Details</Panel.Action>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet perspiciatis harum
      reprehenderit, odio temporibus culpa beatae iure!
    </Panel.Section>
  </Panel>
));

export const HeaderWithBorder = withInfo()(() => (
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
));

export const MarginAndPaddingSystemProps = withInfo()(() => (
  <>
    <Panel mb="500">
      <p>This panel should have no padding</p>
    </Panel>

    <Panel mb="500">
      <Panel.Section>
        <p>This panel should default to 400 padding</p>
      </Panel.Section>
    </Panel>

    <Panel mb="500" padding="300">
      <Panel.Section>
        <p>These sections should have 300 padding</p>
      </Panel.Section>
      <Panel.Section>
        <p>These sections should have 300 padding</p>
      </Panel.Section>
    </Panel>

    <Panel padding="200">
      <Panel.Header borderBottom>This Header section should inherit 200 panel padding</Panel.Header>
      <Panel.Section p="800">
        <p>This section should have 800 padding</p>
      </Panel.Section>
      <Panel.Section py="700">
        <p>This section should inherit 200 px but overried 700 py</p>
      </Panel.Section>
    </Panel>
  </>
));

export const borderWidthAndHeightProps = withInfo()(() => (
  <Columns>
    <Column>
      <Panel p="400" height="100%" borderTop="none">
        <Panel.Section>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet perspiciatis harum
          reprehenderit, odio temporibus culpa beatae iure!
        </Panel.Section>
        <Panel.Section>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet perspiciatis harum
          reprehenderit, odio temporibus culpa beatae iure!
        </Panel.Section>
        <Panel.Section>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet perspiciatis harum
          reprehenderit, odio temporibus culpa beatae iure!
        </Panel.Section>
      </Panel>
    </Column>
    <Column>
      <Panel height="100%" borderRight="none">
        <Panel.Section>Lorem Ipsum</Panel.Section>
        <Panel.Section>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Panel.Section>
      </Panel>
    </Column>
    <Column>
      <Panel height="50%" width="50%">
        <Panel.Section>Lprehenderit, odio temporibus culpa beatae iure!</Panel.Section>
      </Panel>
    </Column>
  </Columns>
));
