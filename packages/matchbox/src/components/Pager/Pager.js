import React from 'react';
import Next from './Next';
import Previous from './Previous';
import { margin } from 'styled-system';
import styled from 'styled-components';

import { Box } from '../Box';

const StyledPager = styled(Box)`
  ${margin}
`;

function Pager(props) {
  const { children } = props;

  return (
    <StyledPager display="inline-block" mb={400}>
      {children}
    </StyledPager>
  );
}

Pager.Next = Next;
Pager.Previous = Previous;
Pager.displayName = 'Pager';

export default Pager;
