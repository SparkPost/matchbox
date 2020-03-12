import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';
import { tokens } from '@sparkpost/design-tokens';
import styled from 'styled-components';

const FocusHandler = styled(Box)`
  &:focus-within {
    position: relative;
    z-index: ${tokens.zIndex_default};
  }
`;

function Connect(props) {
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
Connect.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node,
  children: PropTypes.node,
};

export default Connect;
