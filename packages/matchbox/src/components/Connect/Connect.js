import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';
import styled from 'styled-components';

const FocusBox = styled(Box)`
  *:focus {
    position: relative;
    z-index: 1;
  }
`;

function Connect(props) {
  const { left, right, children } = props;

  const leftMarkup = left ? (
    <FocusBox flex="0 0 auto" mr="-1px">
      {left}
    </FocusBox>
  ) : null;

  const rightMarkup = right ? (
    <FocusBox flex="0 0 auto" ml="-1px">
      {right}
    </FocusBox>
  ) : null;

  return (
    <Box display="flex">
      {leftMarkup}
      <FocusBox flex="1">{children}</FocusBox>
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
