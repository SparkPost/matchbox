import React from 'react';
import PropTypes from 'prop-types';
import { margin } from 'styled-system';
import { createPropTypes } from '@styled-system/prop-types';
import styled from 'styled-components';

import Next from './Next';
import Previous from './Previous';
import { Box } from '../Box';

const StyledPager = styled(Box)`
  ${margin}
`;

function Pager(props) {
  const { children, ...rest } = props;

  return (
    <StyledPager {...rest} display="inline-block">
      {children}
    </StyledPager>
  );
}

Pager.propTypes = {
  children: PropTypes.node,
  ...createPropTypes(margin.propNames),
};

Pager.Next = Next;
Pager.Previous = Previous;
Pager.displayName = 'Pager';

export default Pager;
