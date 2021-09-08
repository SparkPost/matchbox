import React from 'react';
import Tab, { TabProps } from './Tab';
import { ActionListActionProps } from '../ActionList';
import { onKey, onKeys } from '../../helpers/keyEvents';

type TabRefs = React.MutableRefObject<any>;

type UseTabConstructor = {
  tabMarkup: React.ReactNode[];
  tabActions?: ActionListActionProps[];
  focusContainerProps?: {
    onBlur: React.FocusEventHandler;
    onKeyDown: React.KeyboardEventHandler;
    ref: React.Ref<HTMLDivElement>;
  };
};

function useTabConstructor({
  tabs,
  fitted,
  selected = 0,
  handleClick,
  onSelect,
  keyboardActivation,
  disableResponsiveBehavior,
}: {
  tabs?: TabProps[];
  fitted?: boolean;
  selected?: number;
  handleClick?: (event: React.MouseEvent<HTMLAnchorElement>, index: number) => void;
  onSelect?: (index: number) => void;
  keyboardActivation?: 'auto' | 'manual';
  disableResponsiveBehavior: boolean;
}): UseTabConstructor {
  const [focused, setFocused] = React.useState(0);
  const focusContainerRef = React.useRef(null);
  const tabRefs = React.useRef({ current: new Array(tabs.length) });

  // Handles keydown events on the tab focus container
  const onFocusContainerKeyDown = (e: React.KeyboardEvent) => {
    const isWithin =
      focusContainerRef.current && focusContainerRef.current.contains(e.currentTarget);

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
  };

  function onFocusContainerBlur(e) {
    if (focusContainerRef.current && !focusContainerRef.current.contains(e.relatedTarget)) {
      setFocused(selected);
    }
  }

  // Preps array of tab item refs
  React.useEffect(() => {
    (tabRefs as TabRefs).current = new Array(tabs.length);
    return () => {
      (tabRefs as TabRefs).current = [];
    };
  }, [tabs]);

  // Focuses on tab items when focused index changes
  // Optionally calls onSelect
  React.useLayoutEffect(() => {
    // Does not continue when focus is reset, when moving focus outside the container
    if (focusContainerRef.current && !focusContainerRef.current.contains(document.activeElement)) {
      return;
    }

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
      ref={(n) => (tabRefs.current[i] = n)}
      key={i}
      index={i}
      fitted={fitted}
      selected={selected}
      {...tab}
      onClick={handleClick}
      tabIndex={focused === i ? 0 : -1}
    />
  ));

  // Constructs ActionList actions from tabs
  const tabActions = React.useMemo(() => {
    if (disableResponsiveBehavior) {
      return;
    }
    return tabs.map((tab, i) => {
      const { selected, ...rest } = tab;
      return { is: 'button', ...rest, onClick: (e) => handleClick(e, i), visible: i !== selected };
    });
  }, [selected, tabs]);

  return {
    tabMarkup,
    tabActions,
    focusContainerProps: {
      onBlur: onFocusContainerBlur,
      onKeyDown: onFocusContainerKeyDown,
      ref: focusContainerRef,
    },
  };
}

export default useTabConstructor;
