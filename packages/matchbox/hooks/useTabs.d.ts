export default useTabs;
/**
 * Reusable hook to be used with the Tabs component
 */
declare function useTabs({ tabs, initialSelected }: {
    tabs?: any[];
    initialSelected?: number;
}): {
    getTabsProps: (userProps: any) => any;
    tabIndex: any;
    tabs: any[];
    setTabIndex: any;
};
