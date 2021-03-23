import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { Tabs, Panel, useTabs } from '@sparkpost/matchbox';

const tabs = [
  {
    content: 'Details',
  },
  {
    content: 'More Details',
  },
  {
    content: 'Example with long text',
  },
  {
    content: 'Example with an `as` wrapper',
    as: React.forwardRef((props, ref) => <a ref={ref} {...props} href="#" />),
  },
];

const dynamicTabs = [
  {
    content: 'Details Dynamic',
  },
  {
    content: 'More Details Dynamic ',
  },
  {
    content: 'Example with long text Dynamic',
  },
  {
    content: 'Example with a component wrapper Dynamic',
    Component: React.forwardRef((props, ref) => <a ref={ref} {...props} href="#" />),
  },
];

describe('Tabs', () => {
  add('basic usage, manual keyboard activation', () => {
    const { getTabsProps } = useTabs({ tabs });
    return (
      <>
        <Tabs mb="800" {...getTabsProps()} keyboardActivation="manual" />
        <button>this is only here to test focus order</button>
      </>
    );
  });

  add('automatic keyboard activation', () => {
    const { getTabsProps } = useTabs({ tabs });
    return <Tabs mb="800" {...getTabsProps()} keyboardActivation="auto" />;
  });

  add('fitted', () => {
    const { getTabsProps } = useTabs({ tabs });
    return <Tabs mb="800" {...getTabsProps()} fitted keyboardActivation="auto" />;
  });

  add('example within Panel', () => {
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
  });

  add('system props', () => {
    const { getTabsProps } = useTabs({ tabs });
    return (
      <>
        <Tabs borderBottom="none" {...getTabsProps()} my={['400', null, '800', '100px']} />
        <Tabs fitted {...getTabsProps()} mx={['400', null, '800', '200px']} />
      </>
    );
  });

  add('dynamic tabs', () => {
    const { getTabsProps } = useTabs({ tabs });
    const [tabsProps, setTabsProps] = React.useState(getTabsProps);

    React.useEffect(() => {
      const timer = setTimeout(() => {
        setTabsProps({
          ...tabsProps,
          tabs: dynamicTabs,
        });
      }, 3000);
      return () => clearTimeout(timer);
    }, []);

    return (
      <>
        <Tabs mb="800" {...tabsProps} keyboardActivation="manual" />
      </>
    );
  });

  add('disabled responsive behavior', () => (
    <Tabs selected={0} disableResponsiveBehavior tabs={tabs} />
  ));
});
