import React from 'react';

import { Tabs, Panel, useTabs } from '@sparkpost/matchbox';

const tabs = [
  {
    content: 'Details',
    onClick: () => console.log('Details Clicked'),
  },
  {
    content: 'More Details',
    onClick: () => console.log('More Details Clicked'),
  },
  {
    content: 'Example with long text',
    onClick: () => console.log('Example with long text clicked'),
  },
  {
    content: 'Example with a component wrapper',
    onClick: () => console.log('Example with component clicked'),
    Component: React.forwardRef((props, ref) => <a ref={ref} {...props} href="#" />),
  },
];

export default {
  title: 'Navigation/Tabs',
};

export const ExampleTabs = () => {
  const { getTabsProps } = useTabs({ tabs });
  return (
    <>
      <Tabs mb="800" {...getTabsProps()} keyboardActivation="manual" />
      <button>this is only here to test focus order</button>
    </>
  );
};

export const AutomaticKeyboardActivation = () => {
  const { getTabsProps } = useTabs({ tabs });
  return <Tabs mb="800" {...getTabsProps()} keyboardActivation="auto" />;
};

export const FittedTabs = () => {
  const { getTabsProps } = useTabs({ tabs });
  return <Tabs mb="800" {...getTabsProps()} fitted keyboardActivation="auto" />;
};

export const ExampleWithinPanel = () => {
  const { getTabsProps } = useTabs({ tabs });
  return (
    <>
      <Panel mb="400">
        <Tabs {...getTabsProps()} />
        <Panel.Section p="400">Example</Panel.Section>
      </Panel>
      <Panel>
        <Tabs fitted {...getTabsProps()} />
        <Panel.Section p="400">Example</Panel.Section>
      </Panel>
    </>
  );
};

export const SystemProps = () => {
  const { getTabsProps } = useTabs({ tabs });
  return (
    <>
      <Tabs borderBottom="none" {...getTabsProps()} my={['400', null, '800', '100px']} />
      <Tabs fitted {...getTabsProps()} mx={['400', null, '800', '200px']} />
    </>
  );
};

export const DisabledResponsiveBehavior = () => (
  <Tabs selected={0} disableResponsiveBehavior tabs={tabs} />
);
