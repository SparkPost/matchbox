import React from 'react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
// import StoryContainer from '../storyHelpers/StoryContainer';

import { Tabs, ThemeProvider, Panel } from '@sparkpost/matchbox';

addDecorator(storyFn => <ThemeProvider>{storyFn()}</ThemeProvider>);

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
    onClick: action('Domains Clicked'),
  },
  {
    content: 'Example with a component wrapper',
    onClick: action('Domains Clicked'),
    Component: props => <a {...props} href="#" />,
  },
];

const handleSelect = action('Tab Selected');

const Example = () => {
  const [i, seti] = React.useState(0);
  return <Tabs selected={i} onSelect={ind => seti(ind)} tabs={tabs} />;
};

export default {
  title: 'Navigation|Tabs',
};

export const ExampleTabs = withInfo({ source: false, propTables: [Tabs] })(() => <Example />);

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
    <Tabs selected={0} tabs={tabs} my={['400', null, '800', '100px']} />
    <Tabs fitted selected={0} tabs={tabs} mx={['400', null, '800', '200px']} />
  </>
));
