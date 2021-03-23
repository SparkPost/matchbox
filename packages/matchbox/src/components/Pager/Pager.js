import React from 'react';
import PropTypes from 'prop-types';
import { margin } from 'styled-system';
import { createPropTypes } from '@styled-system/prop-types';
import { pick } from '../../helpers/props';
import styled from 'styled-components';

import Next from './Next';
import Previous from './Previous';

const StyledPager = styled('div')`
  ${margin}
  display: inline-block;
`;

function Pager(props) {
  const { children, id, 'data-id': dataId, ...rest } = props;
  const systemProps = pick(rest, margin.propNames);

  return (
    <StyledPager id={id} data-id={dataId} {...systemProps}>
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
