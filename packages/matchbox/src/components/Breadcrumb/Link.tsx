import React from 'react';
import { Box } from '../Box';
import { UnstyledLink, UnstyledLinkProps } from '../UnstyledLink';
import { ChevronRight } from '@sparkpost/matchbox-icons';
import css from '@styled-system/css';
import styled from 'styled-components';

export type BreadcrumbLinkProps = Pick<UnstyledLinkProps, 'to'> & {
  children?: React.ReactNode;
  active?: boolean;
  lastLink?: boolean;
};

const StyledLink = styled(UnstyledLink)`
  text-decoration: none;
  ${css({
    color: 'gray.900',
  })}
  &:hover {
    ${css({
      color: 'blue.700',
    })}
  }
`;

const Link = React.forwardRef<HTMLAnchorElement, BreadcrumbLinkProps>(function Link(
  props: BreadcrumbLinkProps,
  userRef,
) {
  const { to, active = false, lastLink = false, children } = props;
  return (
    <Box display="inline-flex" alignItems="flex-end">
      <StyledLink
        to={to}
        fontSize="200"
        lineHeight="200"
        fontWeight={active ? 'semibold' : 'regular'}
        ref={userRef}
      >
        {children}
      </StyledLink>
      {!lastLink && (
        <Box px="100">
          <ChevronRight size="18" />
        </Box>
      )}
    </Box>
  );
});

Link.displayName = 'Breadcrumb.Link';

export default Link;
