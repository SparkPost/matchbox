import React from 'react';
import { Box } from '../Box';
import { tokens } from '@sparkpost/design-tokens';
import styled from 'styled-components';

const FocusHandler = styled(Box)`
  &:focus-within {
    position: relative;
    z-index: ${tokens.zIndex_default};
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
    <FocusHandler flex="0 0 auto" mr="-1px">
      {left}
    </FocusHandler>
  ) : null;

  const rightMarkup = right ? (
    <FocusHandler flex="0 0 auto" ml="-1px">
      {right}
    </FocusHandler>
  ) : null;

  return (
    <Box display="flex">
      {leftMarkup}
      <FocusHandler flex="1">{children}</FocusHandler>
      {rightMarkup}
    </Box>
  );
}

Connect.displayName = 'Connect';
export default Connect;
