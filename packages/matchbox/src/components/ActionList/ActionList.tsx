import React from 'react';
import styled from 'styled-components';
import {
  margin,
  layout,
  compose,
  LayoutProps,
  MarginProps,
  maxHeight,
  MaxHeightProps,
} from 'styled-system';
import { groupByValues } from '../../helpers/array';
import Section from './Section';
import Action from './Action';
import { onKey } from '../../helpers/keyEvents';

export interface ActionListProps
  extends React.ComponentPropsWithRef<'div'>,
    LayoutProps,
    MarginProps,
    MaxHeightProps {
  children?: React.ReactNode;

  /**
   * @deprecated Use the ActionList.Action component instead
   */
  actions?: React.ComponentProps<typeof Action>[];

  /**
   * @deprecated Use the ActionList.Section component instead
   */
  sections?: React.ComponentProps<typeof Action>[][];

  /**
   * @deprecated Use the ActionList.Section component instead
   */
  groupByKey?: string;
  'aria-labelledby'?: string;
  'data-id'?: string;
}

const system = compose(margin, maxHeight, layout);

const Wrapper = styled.div<MaxHeightProps>`
  ${system}
  overflow-y: auto;
`;

const ActionList = React.forwardRef<HTMLDivElement, ActionListProps>(function ActionList(
  props,
  userRef,
) {
  const {
    actions = [],
    'aria-labelledby': labelledBy,
    className,
    children,
    'data-id': dataId,
    id,
    sections = [],
    maxHeight = 'none',
    onClick,
    groupByKey = 'section',
    ...rest
  } = props;

  // TODO Remove `actions` and `sections` support in favor of composable components
  let list = actions && actions.length ? groupByValues(actions, groupByKey) : [];
  if (sections && sections.length) {
    list = list.concat(sections);
  }

  const listMarkup = list.map((section, index) => <Section section={section} key={index} />);

  const wrapperRef = React.useRef(null);
  const [focusableItemList, setFocusableItemList] = React.useState([]);

  const [focusIndex, setFocusIndex] = React.useState(0);

  // Creates a list of focusable links or buttons inside the actionlist
  React.useEffect(() => {
    if (!!wrapperRef && wrapperRef.current) {
      setFocusableItemList(
        wrapperRef.current.querySelectorAll(
          '[role="menuitem"]:not(:disabled):not([aria-disabled="true"])',
        ),
      );
    }
  }, []);

  React.useLayoutEffect(() => {
    if (focusableItemList[focusIndex]) {
      // Honestly not sure why this doesn't work without a timeout
      setTimeout(() => {
        focusableItemList[focusIndex].focus();
      }, 10);
    }
  }, [focusIndex, focusableItemList]);

  function handleKeyDown(e: React.KeyboardEvent) {
    onKey('arrowDown', () => {
      // Stop arrow keys from scrolling the page
      e.preventDefault();

      if (focusIndex < focusableItemList.length - 1) {
        setFocusIndex(focusIndex + 1);
      } else {
        setFocusIndex(0);
      }
    })(e);

    onKey('arrowUp', () => {
      // Stop arrow keys from scrolling the page
      e.preventDefault();

      if (focusIndex <= 0) {
        setFocusIndex(focusableItemList.length - 1);
      } else {
        setFocusIndex(focusIndex - 1);
      }
    })(e);
  }

  function assignRefs(node) {
    wrapperRef.current = node;
    if (userRef) {
      (userRef as React.MutableRefObject<HTMLDivElement>).current = node;
    }
  }

  return (
    <Wrapper
      aria-labelledby={labelledBy}
      className={className}
      data-id={dataId}
      id={id}
      maxHeight={typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight}
      onClick={onClick}
      tabIndex={-1}
      role="menu"
      ref={assignRefs}
      onKeyDown={handleKeyDown}
      {...rest}
    >
      {listMarkup}
      {children}
    </Wrapper>
  );
}) as React.ForwardRefExoticComponent<ActionListProps> & {
  Section: typeof Section;
  Action: typeof Action;
};

ActionList.displayName = 'ActionList';

ActionList.Section = Section;
ActionList.Action = Action;
export default ActionList;
