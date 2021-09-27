import React from 'react';
import { margin, MarginProps } from 'styled-system';
import { pick } from '../../helpers/props';
import styled from 'styled-components';

import Next from './Next';
import Previous from './Previous';

const StyledPager = styled('div')`
  ${margin}
  display: inline-block;
`;

export type PagerProps = MarginProps & {
  'data-id'?: string;
  children?: React.ReactNode;
  id?: string;
};

function Pager(props: PagerProps): JSX.Element {
  const { children, id, 'data-id': dataId, ...rest } = props;
  const systemProps = pick(rest, margin.propNames);

  return (
    <StyledPager id={id} data-id={dataId} {...systemProps}>
      {children}
    </StyledPager>
  );
}

Pager.Next = Next;
Pager.Previous = Previous;
Pager.displayName = 'Pager';

export default Pager;
