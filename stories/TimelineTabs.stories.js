import React from 'react';
import { TimelineTabs } from '@sparkpost/matchbox/components/TimelineTabs';
import { Tag } from '@sparkpost/matchbox/components/Tag';

export default {
  title: 'TimelineTabs',
};

export const Test = () => (
  <TimelineTabs>
    <TimelineTabs.Tab>
      <Tag>Test</Tag>
    </TimelineTabs.Tab>
    <TimelineTabs.Tab>
      <Tag>Test</Tag>
    </TimelineTabs.Tab>
    <TimelineTabs.Tab>
      <Tag>Test</Tag>
    </TimelineTabs.Tab>
    <TimelineTabs.Tab>
      <Tag>Test</Tag>
    </TimelineTabs.Tab>
    <TimelineTabs.Tab>
      <Tag>Test</Tag>
    </TimelineTabs.Tab>
  </TimelineTabs>
);
