import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { Tabs, Panel, useTabs } from '@sparkpost/matchbox';

const TestComponent = React.forwardRef<HTMLAnchorElement, unknown>(function TestComponent(
  props,
  ref,
) {
  return <a ref={ref} {...props} href="#" />;
});

const tabs = [
  {
    content: 'Tab 1',
  },
  {
    content: 'Tab 2',
  },
  {
    content: 'Tab 3',
  },
  {
    content: 'Tab 4 with a lot of content',
    as: TestComponent,
  },
];

describe('Visual Regression', () => {
  add('Tabs', () => {
    const { getTabsProps } = useTabs({ tabs });
    return (
      <>
        <Panel mb="400">
          <Tabs {...getTabsProps()} />
          <Panel.Section p="400">Content</Panel.Section>
        </Panel>
        <Panel>
          <Tabs fitted {...getTabsProps()} />
          <Panel.Section p="400">Content</Panel.Section>
        </Panel>
      </>
    );
  });
});
