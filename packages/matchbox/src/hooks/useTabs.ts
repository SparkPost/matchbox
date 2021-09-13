import React from 'react';
import { TabProps } from '../components/Tabs';

/**
 * Reusable hook to be used with the Tabs component
 */

type UseTabsProps = {
  tabs?: TabProps[];
  initialSelected?: number;
};

function useTabs({ tabs = [], initialSelected = 0 }: UseTabsProps): {
  getTabsProps: <T extends HTMLElement>(userProps: {
    [k: string]: unknown;
  }) => {
    tabs?: TabProps[];
    selected?: number;
    onSelect: React.EffectCallback;
    [k: string]: unknown;
  };
  tabIndex: number;
  tabs: TabProps[];
  setTabIndex: React.Dispatch<React.SetStateAction<number>>;
} {
  const [tabIndex, setTabIndex] = React.useState<number>(initialSelected);

  const tabsWithOnClick = React.useMemo(() => {
    return tabs.map((tab, i) => ({ ...tab, onClick: () => setTabIndex(i) }));
  }, [tabs]);

  const onSelect = React.useCallback(
    (index) => {
      setTabIndex(index);
    },
    [tabs],
  );

  const getTabsProps = (userProps) => ({
    tabs: tabsWithOnClick,
    selected: tabIndex,
    onSelect,
    ...userProps,
  });

  return {
    getTabsProps,
    tabIndex,
    tabs,
    setTabIndex,
  };
}

export default useTabs;
