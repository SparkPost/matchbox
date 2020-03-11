import React from 'react';
import PropTypes from 'prop-types';
import { margin } from 'styled-system';
import { createPropTypes } from '@styled-system/prop-types';
import styled from 'styled-components';

import Next from './Next';
import Previous from './Previous';

const StyledPager = styled('div')`
  ${margin}
  display: inline-block;
`;

function Pager(props) {
  const { children, ...rest } = props;

  return <StyledPager {...rest}>{children}</StyledPager>;
}

Pager.propTypes = {
  children: PropTypes.node,
  ...createPropTypes(margin.propNames),
};

Pager.Next = Next;
Pager.Previous = Previous;
Pager.displayName = 'Pager';

export default Pager;
