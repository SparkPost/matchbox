import React from 'react';
import { TimelineTabs } from '@sparkpost/matchbox/components/TimelineTabs';
import { describe, add } from '@sparkpost/libby-react';

describe('TimelineTabs', () => {
  add('renders correctly', () => (
    <TimelineTabs>
      <TimelineTabs.Tab>Test</TimelineTabs.Tab>
      <TimelineTabs.Tab>Test</TimelineTabs.Tab>
      <TimelineTabs.Tab>Test</TimelineTabs.Tab>
      <TimelineTabs.Tab>Test</TimelineTabs.Tab>
      <TimelineTabs.Tab>Test</TimelineTabs.Tab>
    </TimelineTabs>
  ));
});
