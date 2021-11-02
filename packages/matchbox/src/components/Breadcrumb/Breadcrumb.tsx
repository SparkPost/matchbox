import React from 'react';
import { Box } from '../Box';
import { pick } from '../../helpers/props';
import styled from 'styled-components';
import { margin, MarginProps } from 'styled-system';
import Link from './Link';

const Wrapper = styled(Box)`
  ${margin}
`;

export type BreadcrumbProps = MarginProps & {
  children?: React.ReactNode;
};

const Breadcrumb = React.forwardRef<HTMLDivElement, BreadcrumbProps>(function Breadcrumb(
  props: BreadcrumbProps,
  userRef,
) {
  const { children, ...rest } = props;
  const systemProps = pick(rest, margin.propNames);

  return (
    <Wrapper ref={userRef} {...systemProps}>
      {children}
    </Wrapper>
  );
}) as React.ForwardRefExoticComponent<BreadcrumbProps> & {
  Link: typeof Link;
};

Breadcrumb.displayName = 'Breadcrumb';

Breadcrumb.Link = Link;

export default Breadcrumb;
