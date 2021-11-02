import React from 'react';
import { Box } from '../Box';
import { getChild } from '../../helpers/children';
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
  const links = getChild('Breadcrumb.Link', children);

  const isLastChild = (index, length) => {
    return index == length - 1;
  };

  const linksMarkup = links.map((link, index) => {
    return {
      ...link,
      props: {
        ...link.props,
        lastLink: isLastChild(index, links.length),
      },
    };
  });

  return (
    <Wrapper ref={userRef} {...systemProps}>
      {linksMarkup}
    </Wrapper>
  );
}) as React.ForwardRefExoticComponent<BreadcrumbProps> & {
  Link: typeof Link;
};

Breadcrumb.displayName = 'Breadcrumb';

Breadcrumb.Link = Link;

export default Breadcrumb;
