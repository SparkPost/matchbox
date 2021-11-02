import React from 'react';
import { Box } from '../Box';
import { UnstyledLink, UnstyledLinkProps } from '../UnstyledLink';
import { ChevronRight } from '@sparkpost/matchbox-icons';
import css from '@styled-system/css';
import styled from 'styled-components';

export type BreadcrumbLinkProps = Pick<UnstyledLinkProps, 'to'> & {
  children?: React.ReactNode;
  active?: boolean;
};

const StyledChevron = styled.div`
  ${css({
    px: '100',
  })}
`;

const LinkWrapper = styled(Box)`
  &:last-of-type {
    ${StyledChevron} {
      display: none;
    }
  }
`;

const StyledLink = styled(UnstyledLink)`
  text-decoration: none;
  ${css({
    color: 'gray.900',
  })}
  &:visited {
    ${css({
      color: 'gray.900',
    })}
  }
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
  const { to, active = false, children } = props;
  return (
    <LinkWrapper display="inline-flex" alignItems="flex-end">
      <StyledLink
        to={to}
        fontSize="200"
        lineHeight="200"
        fontWeight={active ? 'semibold' : 'regular'}
        ref={userRef}
      >
        {children}
      </StyledLink>
      <StyledChevron>
        <ChevronRight size="18" />
      </StyledChevron>
    </LinkWrapper>
  );
});

Link.displayName = 'Breadcrumb.Link';

export default Link;
