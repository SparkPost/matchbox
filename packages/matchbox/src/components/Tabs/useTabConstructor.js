import React from 'react';
import Tab from './Tab';
import { onKey, onKeys } from '../../helpers/keyEvents';

function useTabConstructor({
  tabs,
  fitted,
  selected = 0,
  handleClick,
  onSelect,
  keyboardActivation,
  disableResponsiveBehavior,
}) {
  const [focused, setFocused] = React.useState(0);
  const focusContainerRef = React.useRef({});
  const tabRefs = React.useRef({ current: [{}] });

  // Handles keydown events on the tab focus container
  const onFocusContainerKeyDown = React.useCallback(
    e => {
      const isWithin = focusContainerRef.current && focusContainerRef.current.contains(e.target);

      if (!isWithin) {
        return;
      }

      onKey('arrowRight', () => {
        e.preventDefault();
        if (focused === tabs.length - 1) {
          setFocused(0);
        } else {
          setFocused(focused + 1);
        }
      })(e);

      onKey('arrowLeft', () => {
        e.preventDefault();
        if (focused === 0) {
          setFocused(tabs.length - 1);
        } else {
          setFocused(focused - 1);
        }
      })(e);

      onKeys(['home', 'pageDown'], () => {
        e.preventDefault();
        setFocused(0);
      })(e);

      onKeys(['end', 'pageUp'], () => {
        e.preventDefault();
        setFocused(tabs.length - 1);
      })(e);
    },
    [tabs, focusContainerRef.current, focused],
  );

  // Preps array of tab item refs
  React.useEffect(() => {
    tabRefs.current = new Array(tabs.length);
  }, [tabs]);

  // Focuses on tab items when focused index changes
  // Optionally calls onSelect
  React.useEffect(() => {
    if (tabRefs.current[focused]) {
      tabRefs.current[focused].focus();
      if (keyboardActivation === 'auto' && onSelect) {
        onSelect(focused);
      }
    }
  }, [focused]);

  // Constructs Tabs with refs
  const tabMarkup = tabs.map((tab, i) => (
    <Tab
      ref={n => (tabRefs.current[i] = n)}
      key={i}
      index={i}
      fitted={fitted}
      selected={selected}
      {...tab}
      onClick={handleClick}
      tabIndex={focused === i || selected === i ? '0' : '-1'}
    />
  ));

  // Constructs ActionList actions from tabs
  const tabActions = React.useMemo(() => {
    if (disableResponsiveBehavior) {
      return;
    }
    return tabs.map((tab, i) => {
      return { is: 'button', ...tab, onClick: e => handleClick(e, i), visible: i !== selected };
    });
  }, [selected, tabs]);

  return {
    tabMarkup,
    tabActions,
    onFocusContainerKeyDown,
    focusContainerRef,
  };
}

export default useTabConstructor;
