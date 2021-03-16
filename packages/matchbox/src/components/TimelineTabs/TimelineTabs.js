import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { margin } from 'styled-system';
import { createPropTypes } from '@styled-system/prop-types';
import { pick } from '../../helpers/props';
import Tab from './Tab';
import useTabConstructor from './useTabConstructor';

const Container = styled.div`
  ${margin}
`;

const TimelineTabs = React.forwardRef(function TimelineTabs(props, userRef) {
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
});

TimelineTabs.Tab = Tab;

TimelineTabs.propTypes = {
  id: PropTypes.string,
  'data-id': PropTypes.string,
  initialIndex: PropTypes.number,
  ...createPropTypes(margin.propNames),
};

export default TimelineTabs;
