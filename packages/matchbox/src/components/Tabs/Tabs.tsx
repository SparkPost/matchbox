import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MoreHoriz } from '@sparkpost/matchbox-icons';
import { margin, borderBottom } from 'styled-system';
import { createPropTypes } from '@styled-system/prop-types';
import { pick } from '@styled-system/props';
import { ActionList } from '../ActionList';
import { Box } from '../Box';
import { Button } from '../Button';
import { Popover } from '../Popover';
import { ScreenReaderOnly } from '../ScreenReaderOnly';
import { deprecate } from '../../helpers/propTypes';
import useTabConstructor from './useTabConstructor';
import Tab, { TabProps } from './Tab';
import { containerStyles, overflowTabs } from './styles';
import { useResizeObserver } from '../../hooks';

import { getPositionFor } from '../../helpers/geometry';

const OverflowTabContainer = styled('div')`
  ${overflowTabs}
`;

const Container = styled('div')`
  ${margin}
  ${borderBottom}
  ${containerStyles}
`;

export type TabsProps = {
  disableResponsiveBehavior?: boolean;
  keyboardActivation?: 'auto' | 'manual';
  tabs?: TabProps[];
  selected: number;
  onSelect?: (index: number) => void;
  fitted?: boolean;
};

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(function Tabs(props, userRef) {
  const {
    disableResponsiveBehavior,
    keyboardActivation = 'auto',
    tabs,
    selected,
    onSelect,
    fitted,
    ...rest
  } = props;
  const [isOverflowing, setIsOverflowing] = React.useState(false);
  const [popoverOpen, setPopoverOpen] = React.useState(false);

  const wrapperRef = React.useRef();
  const overflowRef = React.useRef();

  const [resizeRef, { contentRect }] = useResizeObserver();

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>, index: number) {
    const { onClick } = tabs[index];

    if (onClick) {
      onClick(event, index);
    }

    if (onSelect && selected !== index) {
      onSelect(index);
    }

    if (isOverflowing) {
      setPopoverOpen(false);
    }
  }

  React.useLayoutEffect(() => {
    if (!disableResponsiveBehavior) {
      const wrapperPosition = getPositionFor(wrapperRef.current);
      const overflowPosition = getPositionFor(overflowRef.current);

      // Compares tab container width with its position relative to a measurement pixel
      if (wrapperPosition.width < overflowPosition.left - wrapperPosition.left) {
        setIsOverflowing(true);
      } else {
        setIsOverflowing(false);
      }
    }
  }, [wrapperRef, overflowRef, contentRect, tabs]);

  // Constructs the tabs, their props and handles tab keyboard navigation
  const { tabMarkup, tabActions, focusContainerProps } = useTabConstructor({
    tabs,
    fitted,
    handleClick,
    selected,
    onSelect,
    keyboardActivation,
    disableResponsiveBehavior,
  });

  const assignWrapperRefs = (node) => {
    if (wrapperRef) {
      wrapperRef.current = node;
    }
    if (userRef) {
      (userRef as React.MutableRefObject<HTMLDivElement>).current = node;
    }
    if (resizeRef) {
      resizeRef(node);
    }
  };

  return (
    <Container borderBottom="400" {...pick(rest)} ref={assignWrapperRefs} tabIndex="-1">
      <Box aria-hidden={isOverflowing}>
        <OverflowTabContainer
          aria-orientation="horizontal"
          isOverflowing={isOverflowing}
          role="tablist"
        >
          <Box
            position="absolute"
            left="0"
            top="0"
            right="0"
            display="flex"
            {...focusContainerProps}
          >
            {tabMarkup}
            {/* Measurement pixel used to detect content overflow */}
            <Box display="inline-block" width="1px" height="1px" ref={overflowRef} />
          </Box>
        </OverflowTabContainer>
      </Box>
      {isOverflowing && !disableResponsiveBehavior && (
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box flex="0">
            <Tab index={selected} selected={selected} {...tabs[selected]} />
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
                  variant="text"
                  onClick={() => setPopoverOpen(!popoverOpen)}
                >
                  <MoreHoriz size={20} />
                  <ScreenReaderOnly>More Options</ScreenReaderOnly>
                </Button>
              }
            >
              <ActionList>
                {tabActions.map((action, i) => (
                  <ActionList.Action key={i} {...action} />
                ))}
              </ActionList>
            </Popover>
          </Box>
        </Box>
      )}
    </Container>
  );
});

Tabs.displayName = 'Tabs';
Tabs.propTypes = {
  disableResponsiveBehavior: PropTypes.bool,
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
  keyboardActivation: PropTypes.oneOf(['auto', 'manual']),
  /**
   * Index of selected tab
   */
  selected: PropTypes.number.isRequired,
  onSelect: PropTypes.func,
  ...createPropTypes(margin.propNames),
  ...createPropTypes(borderBottom.propNames),
};

export default Tabs;
