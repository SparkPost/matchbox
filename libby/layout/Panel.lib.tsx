import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { Button, Panel, Columns, Column } from '@sparkpost/matchbox';

describe('Panel', () => {
  add('basic usage', () => (
    <Panel data-id="my-panel">
      <Panel.Header>Title</Panel.Header>
      <Panel.Section>Section Content</Panel.Section>
    </Panel>
  ));

  add('subheader', () => (
    <Panel data-id="my-panel">
      <Panel.SubHeader>Details and Definition</Panel.SubHeader>
      <Panel.Section>Section Content</Panel.Section>
    </Panel>
  ));

  add('inverted appearance', () => (
    <Panel data-id="my-panel" appearance="inverted">
      <Panel.Header>Header</Panel.Header>
      <Panel.Section>Section Content</Panel.Section>
      <Panel.SubHeader>SubHeader</Panel.SubHeader>
      <Panel.Section>Section two</Panel.Section>
    </Panel>
  ));

  add('inverted appearance by section', () => (
    <Panel data-id="my-panel">
      <Panel.Header>Header</Panel.Header>
      <Panel.Section>Section Content</Panel.Section>
      <Panel.Header appearance="inverted">Header</Panel.Header>
      <Panel.Section appearance="inverted">Section two</Panel.Section>
      <Panel.SubHeader appearance="inverted">SubHeader</Panel.SubHeader>
      <Panel.Section appearance="inverted">Section three</Panel.Section>
    </Panel>
  ));

  add('accent', () => (
    <Panel accent>
      <Panel.Section>This is a highlighted panel with a title</Panel.Section>
    </Panel>
  ));

  add('sections', () => (
    <Panel>
      <Panel.Section>Section Content</Panel.Section>
      <Panel.Section>Section Content</Panel.Section>
      <Panel.Section>
        <Button fullWidth>test</Button>
      </Panel.Section>
    </Panel>
  ));

  add('actions', () => (
    <Panel accent="gray">
      <Panel.Header>
        <Panel.Action>Action</Panel.Action>
        <Panel.Action color="red">Action</Panel.Action>
        Header Header Header Header Header Header
      </Panel.Header>
      <Panel.Section>
        <Panel.Action>View Details</Panel.Action>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet perspiciatis harum
        reprehenderit, odio temporibus culpa beatae iure!
      </Panel.Section>
    </Panel>
  ));

  add('header with border', () => (
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

  add('system props (padding)', () => (
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
        <Panel.Header borderBottom>
          This Header section should inherit 200 panel padding
        </Panel.Header>
        <Panel.Section p="800">
          <p>This section should have 800 padding</p>
        </Panel.Section>
        <Panel.Section py="700">
          <p>This section should inherit 200 px but overried 700 py</p>
        </Panel.Section>
      </Panel>
    </>
  ));

  add('system props (layout and border)', () => (
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
});
