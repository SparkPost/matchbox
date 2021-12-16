import React from 'react';
import { Box } from '../Box';
import { tokens } from '@sparkpost/design-tokens';
import styled from 'styled-components';

// $zIncrement is here to ensure the middle element appears
// above side elements until it side elements are focused
const FocusHandler = styled(Box)<{ $zIncrement: number }>`
  z-index: ${(props) => tokens.zIndex_default + props.$zIncrement};
  &:focus-within {
    position: relative;
    z-index: ${tokens.zIndex_default + 2};
  }
`;

export type ConnectProps = {
  children?: React.ReactNode;
  left?: React.ReactNode;
  right?: React.ReactNode;
};

function Connect(props: ConnectProps): JSX.Element {
  const { left, right, children } = props;

  const leftMarkup = left ? (
    <FocusHandler flex="0 0 auto" mr="-1px" $zIncrement={0}>
      {left}
    </FocusHandler>
  ) : null;

  const rightMarkup = right ? (
    <FocusHandler flex="0 0 auto" ml="-1px" $zIncrement={0}>
      {right}
    </FocusHandler>
  ) : null;

  return (
    <Box display="flex">
      {leftMarkup}
      <FocusHandler flex="1" $zIncrement={1}>
        {children}
      </FocusHandler>
      {rightMarkup}
    </Box>
  );
}

Connect.displayName = 'Connect';
export default Connect;
