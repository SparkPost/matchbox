# Tabs

```js
import { Tabs, useTabs } from '@sparkpost/matchbox';

function Example() {
  const {
    getTabsProps, // Provides required tab props, onSelect, selected, and constructed tabs with onClick handlers
    tabIndex, // The selected tab index
    tabs, // The constructed tabs with onClick handlers
    setTabIndex, // Function to programatically set tab index
  } = useTabs({
    tabs, // Your tabs array
    initialSelected, // Sets initial selected tab
  });

  return (
    <>
      <Tabs
        {...getTabProps()}
        // When set to 'auto', automatically activates tabs when using focus keyboard navigation
        // When set to 'manual', tab activation requires using space or enter keys after focusing
        keyboardActivation="manual"
        // Stretches the tabs to span the full width
        fitted
        // System prop to manually overwrite border
        borderBottom="none"
        // System prop to manually set margins
        m="500"
      />
    </>
  );
}
```
