import React from 'react';
import styled from 'styled-components';
import { margin, MarginProps } from 'styled-system';
import { pick } from '../../helpers/props';
import Tab from './Tab';
import useTabConstructor from './useTabConstructor';

const Container = styled.div`
  ${margin}
`;

export type TimelineTabsProps = {
  children?: React.ReactNode;
  id?: string;
  initialIndex?: number;
} & MarginProps;

const TimelineTabs = React.forwardRef<HTMLDivElement, TimelineTabsProps>(function TimelineTabs(
  props,
  userRef,
) {
  const { children, id, initialIndex, ...rest } = props;
  const systemProps = pick(rest, margin.propNames);

  const tabs = React.Children.toArray(children);
  const { tabs: constructedItems, focusContainerProps } = useTabConstructor({ initialIndex, tabs });

  return (
    <Container ref={userRef} data-id={rest['data-id']} id={id} {...systemProps}>
      <div role="tablist" aria-orientation="vertical" {...focusContainerProps}>
        {constructedItems}
      </div>
    </Container>
  );
}) as React.ForwardRefExoticComponent<TimelineTabsProps> & {
  Tab: typeof Tab;
};

TimelineTabs.Tab = Tab;
export default TimelineTabs;
