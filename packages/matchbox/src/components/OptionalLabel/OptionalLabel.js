import React from 'react';
import styled from 'styled-components';
import { Box } from '../Box';

const StyledBox = styled(Box)`
  float: right;
`;

function OptionalLabel() {
  return (
    <StyledBox as="span" fontSize="200" fontWeight="light" lineHeight="200" m="0" color="gray.700">
      Optional
    </StyledBox>
  );
}

OptionalLabel.displayName = 'OptionalLabel';

export default OptionalLabel;
