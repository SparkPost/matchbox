import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { Tabs, Panel } from '@sparkpost/matchbox';

const tabs = [
  {
    content: 'Details',
    onClick: action('Details Clicked'),
  },
  {
    content: 'More Details',
    onClick: action('More Details Clicked'),
  },
  {
    content: 'Example with long text',
    onClick: action('Example with long text clicked'),
  },
  {
    content: 'Example with a component wrapper',
    onClick: action('Example with component clicked'),
    Component: React.forwardRef((props, ref) => <a ref={ref} {...props} href="#" />),
  },
];

const handleSelect = action('Tab Selected');

const Example = () => {
  const [i, seti] = React.useState(0);
  return (
    <Tabs
      mb="800"
      selected={i}
      onSelect={ind => seti(ind)}
      tabs={tabs}
      keyboardActivation="manual"
    />
  );
};

export default {
  title: 'Navigation|Tabs',
};

export const ExampleTabs = withInfo({ source: false, propTables: [Tabs] })(() => (
  <>
    <Example />
    <button>this is only here to test focus order</button>
  </>
));

export const DefaultTabs = withInfo()(() => (
  <Tabs selected={0} connectBelow={false} onSelect={handleSelect} tabs={tabs} />
));

export const FittedTabs = withInfo()(() => (
  <Tabs fitted selected={0} onSelect={handleSelect} tabs={tabs} />
));

export const ExampleWithinPanel = withInfo()(() => (
  <>
    <Panel mb="400">
      <Tabs selected={0} onSelect={handleSelect} tabs={tabs} />
      <Panel.Section p="400">Example</Panel.Section>
    </Panel>
    <Panel>
      <Tabs fitted selected={0} onSelect={handleSelect} tabs={tabs} />
      <Panel.Section p="400">Example</Panel.Section>
    </Panel>
  </>
));

export const SystemProps = withInfo()(() => (
  <>
    <Tabs selected={0} borderBottom="none" tabs={tabs} my={['400', null, '800', '100px']} />
    <Tabs fitted selected={0} tabs={tabs} mx={['400', null, '800', '200px']} />
  </>
));

export const DisabledResponsiveBehavior = withInfo()(() => (
  <Tabs selected={0} disableResponsiveBehavior onSelect={handleSelect} tabs={tabs} />
));
