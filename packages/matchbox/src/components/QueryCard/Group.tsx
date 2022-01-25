import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  & > div:not(:first-child) {
    margin-top: -1px;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }

  & > div:first-child {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

type QueryCardGroupProps = {
  children?: React.ReactNode;
};

const Group = React.forwardRef<HTMLDivElement, QueryCardGroupProps>(function QueryCard(
  props,
  userRef,
) {
  return <StyledWrapper ref={userRef}>{props.children}</StyledWrapper>;
});

Group.displayName = 'QueryCard.Group';
export default Group;
