import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { margin } from 'styled-system';
import { createPropTypes } from '@styled-system/prop-types';
import { pick } from '../../helpers/props';
import { onKey, onKeys } from '../../helpers/keyEvents';
import Tab from './Tab';

const Container = styled.div`
  ${margin}
`;

const TimelineTabs = React.forwardRef(function TimelineTabs(props, userRef) {
  const { children, id, initialIndex, ...rest } = props;
  const systemProps = pick(rest, margin.propNames);

  const tabs = React.Children.toArray(children);
  const tabRefs = React.useRef({ current: [] });
  const focusRef = React.useRef();

  const [selectedIndex, setSelectedIndex] = React.useState(initialIndex ?? 0);

  // Preps array of tab item refs
  React.useEffect(() => {
    tabRefs.current = new Array(tabs.length);
    return () => {
      tabRefs.current = [];
    };
  }, [tabs, children]);

  const onFocusContainerKeyDown = e => {
    const isWithin = focusRef.current && focusRef.current.contains(e.currentTarget);

    if (!isWithin) {
      return;
    }

    onKey('arrowDown', () => {
      e.preventDefault();
      if (selectedIndex === tabs.length - 1) {
        setSelectedIndex(0);
      } else {
        setSelectedIndex(selectedIndex + 1);
      }
    })(e);

    onKey('arrowUp', () => {
      e.preventDefault();
      if (selectedIndex === 0) {
        setSelectedIndex(tabs.length - 1);
      } else {
        setSelectedIndex(selectedIndex - 1);
      }
    })(e);

    onKeys(['home', 'pageDown'], () => {
      e.preventDefault();
      setSelectedIndex(0);
    })(e);

    onKeys(['end', 'pageUp'], () => {
      e.preventDefault();
      setSelectedIndex(tabs.length - 1);
    })(e);
  };

  // Focuses on tab items when focused index changes
  // Optionally calls onSelect
  React.useLayoutEffect(() => {
    // Does not continue when focus is reset, when moving focus outside the container
    if (focusRef.current && !focusRef.current.contains(document.activeElement)) {
      return;
    }

    if (tabRefs.current[selectedIndex]) {
      tabRefs.current[selectedIndex].focus();
    }
  }, [selectedIndex]);

  const constructedItems = React.useMemo(() => {
    return tabs.map((tab, i) => ({
      ...tab,
      ref: n => (tabRefs.current[i] = n),
      props: {
        ...tab.props,
        handleParentSelect: () => setSelectedIndex(i),
        selected: selectedIndex === i,
      },
    }));
  }, [tabs, selectedIndex]);

  return (
    <Container ref={userRef} data-id={rest['data-id']} id={id} {...systemProps}>
      <div
        role="tablist"
        aria-orientation="vertical"
        ref={focusRef}
        onKeyDown={onFocusContainerKeyDown}
      >
        {constructedItems}
      </div>
    </Container>
  );
});

TimelineTabs.Tab = Tab;

TimelineTabs.propTypes = {
  id: PropTypes.string,
  'data-id': PropTypes.string,
  initialIndex: PropTypes.number,
  ...createPropTypes(margin.propNames),
};

export default TimelineTabs;
