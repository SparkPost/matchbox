import React from 'react';

/**
 * Reusable hook to be used with the Tabs component
 */
function useTabs({ tabs = [], initialSelected = 0 }) {
  const [tabIndex, setTabIndex] = React.useState(initialSelected);

  const tabsWithOnClick = React.useMemo(() => {
    return tabs.map((tab, i) => ({ ...tab, onClick: () => setTabIndex(i) }));
  }, [tabs]);

  const onSelect = React.useCallback(
    index => {
      setTabIndex(index);
    },
    [tabs],
  );

  const getTabsProps = userProps => ({
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
