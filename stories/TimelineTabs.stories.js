import React from 'react';
import { TimelineTabs } from '@sparkpost/matchbox/components/TimelineTabs';
import { Tag } from '@sparkpost/matchbox/components/Tag';

export default {
  title: 'TimelineTabs',
};

export const Test = () => (
  <>
    <TimelineTabs>
      <TimelineTabs.Tab>
        <Tag>Tab 1</Tag>
      </TimelineTabs.Tab>
      <TimelineTabs.Tab>
        <Tag>Tab 2</Tag>
      </TimelineTabs.Tab>
      <TimelineTabs.Tab>
        <Tag>Tab 3</Tag>
      </TimelineTabs.Tab>
      <TimelineTabs.Tab>
        <Tag>Tab 4</Tag>
      </TimelineTabs.Tab>
      <TimelineTabs.Tab>
        <Tag>Tab 5</Tag>
      </TimelineTabs.Tab>
    </TimelineTabs>
    <button>end focus test</button>
  </>
);
