import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MoreHoriz } from '@sparkpost/matchbox-icons';
import { ActionList } from '../ActionList';
import { UnstyledLink } from '../UnstyledLink';
import { Box } from '../Box';
import { Button } from '../Button';
import { Popover } from '../Popover';
import { ScreenReaderOnly } from '../ScreenReaderOnly';
import { deprecate } from '../../helpers/propTypes';
import { margin } from 'styled-system';
import { createPropTypes } from '@styled-system/prop-types';
import { containerStyles, overflowTabs, tabStyles } from './styles';
import { pick } from '@styled-system/props';
import { getPositionFor, useWindowSize } from '../../helpers/geometry';

// TODO Replace this when styled-components supports shouldForwardProps
// See: https://github.com/styled-components/styled-components/commit/e02109e626ed117b76f220d0b9b926129655262d
// Or when UnstyledLink is updated to use system props
function LinkWrapper(props) {
  const { selected, fitted, ...rest } = props;
  return <UnstyledLink {...rest} />;
}

const StyledTab = styled(LinkWrapper)`
  ${tabStyles}
`;

const OverflowTabContainer = styled('div')`
  ${overflowTabs}
`;

const Container = styled('div')`
  ${margin}
  ${containerStyles}
`;

function Tab(props) {
  const { index, content, selected, fitted, component, Component, ...rest } = props;

  function handleClick(event) {
    const { index, onClick } = props;
    onClick(event, index);
  }

  // Buttons ensure focusability
  // Links will be focusable with an href
  // TODO deprecate `Component`
  const wrapper = component || Component || 'button';

  return (
    <StyledTab
      aria-selected={selected === index}
      component={wrapper}
      selected={selected === index}
      fitted={fitted}
      {...rest}
      onClick={handleClick}
      role="tab"
      type="button"
    >
      {content}
    </StyledTab>
  );
}

Tab.displayName = 'Tab';

function Tabs(props) {
  const { tabs, selected, onSelect, fitted, ...rest } = props;
  const [isOverflowing, setIsOverflowing] = React.useState(false);
  const [popoverOpen, setPopoverOpen] = React.useState(false);

  const wrapperRef = React.useRef();
  const overflowRef = React.useRef();
  const windowSize = useWindowSize();

  function handleClick(event, index) {
    const { onClick } = tabs[index];

    if (onClick) {
      onClick(event, index);
    }

    if (onSelect && selected !== index) {
      onSelect(index, selected);
    }

    if (isOverflowing) {
      setPopoverOpen(false);
    }
  }

  React.useLayoutEffect(() => {
    const wrapperPosition = getPositionFor(wrapperRef.current);
    const overflowPosition = getPositionFor(overflowRef.current);

    // Compares tab container width with its position relative to a measurement pixel
    if (wrapperPosition.width < overflowPosition.left - wrapperPosition.left) {
      setIsOverflowing(true);
    } else {
      setIsOverflowing(false);
    }
  }, [wrapperRef, overflowRef, windowSize]);

  const selectedTab = tabs[selected];

  // Constructs ActionList actions from tabs
  const tabActions = React.useMemo(() => {
    return tabs.map((tab, i) => {
      return { is: 'button', ...tab, onClick: e => handleClick(e, i), visible: i !== selected };
    });
  }, [selected, tabs, isOverflowing]);

  return (
    <Container {...pick(rest)} ref={wrapperRef}>
      <Box aria-hidden={isOverflowing} overflow="hidden">
        <OverflowTabContainer
          aria-orientation="horizontal"
          isOverflowing={isOverflowing}
          role="tablist"
        >
          {tabs.map((tab, i) => (
            <Tab
              key={i}
              index={i}
              fitted={fitted}
              selected={selected}
              {...tab}
              onClick={handleClick}
            />
          ))}
          {/* Measurement pixel used to detect content overflow */}
          <Box display="inline-block" width="1px" height="1px" ref={overflowRef} />
        </OverflowTabContainer>
      </Box>
      {isOverflowing && (
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box flex="0">
            <Tab index={0} selected={0} {...selectedTab} />
          </Box>

          <Box flex="0">
            <Popover
              id="tab-options"
              left
              bottom
              open={popoverOpen}
              onClose={() => setPopoverOpen(false)}
              trigger={
                <Button
                  aria-controls="tab-options"
                  aria-expanded={popoverOpen}
                  data-id="tab-options-button"
                  flat
                  onClick={() => setPopoverOpen(true)}
                >
                  <MoreHoriz size={20} />
                  <ScreenReaderOnly>More Options</ScreenReaderOnly>
                </Button>
              }
            >
              <ActionList actions={tabActions} />
            </Popover>
          </Box>
        </Box>
      )}
    </Container>
  );
}

Tabs.displayName = 'Tabs';
Tabs.propTypes = {
  /**
   * Tab Content
   * Actions that build the tabs. Most button and unstyled link props will work in here.
   * e.g. { content: 'Label', onClick: callback() }
   */
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.node.isRequired,
    }),
  ),

  /**
   * Tab Color
   */
  color: deprecate(
    PropTypes.oneOf(['orange', 'blue', 'navy', 'purple', 'red']),
    'Tab color is no longer configurable',
  ),
  /**
   * Index of selected tab
   */
  selected: PropTypes.number.isRequired,
  onSelect: PropTypes.func,
  ...createPropTypes(margin.propNames),
};

export default Tabs;
