import React from 'react';
import { Link } from 'gatsby';
import { Text } from '@sparkpost/matchbox';
import { Link as LinkIcon } from '@sparkpost/matchbox-icons';
import { tokens } from '@sparkpost/design-tokens';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
  span {
    opacity: 0;
    color: ${tokens.color_blue_700};
    transition: 0.15s;
  }
  &:hover {
    text-decoration: none;
    span {
      opacity: 1;
    }
  }
`;

function toKebab(str) {
  if (!str) {
    return '';
  }
  return str.replace(/\s+/g, '-').toLowerCase();
}

function Heading(props) {
  const { as, children, ...rest } = props;

  if (!children) {
    return null;
  }

  // Gastby deploys break without this
  const [pathname, setPathname] = React.useState('');

  React.useEffect(() => {
    if (typeof window !== undefined) {
      setPathname(`${window.location.pathname}#${toKebab(children)}`);
    }
  }, [children]);

  return (
    <StyledLink to={pathname}>
      <Text {...rest} as={as} id={toKebab(children)} position="relative">
        {children}
        <span>
          {' '}
          <LinkIcon
            height="0.9em"
            width="0.9em"
            style={{ marginTop: '-0.1em' }}
          />
        </span>
      </Text>
    </StyledLink>
  );
}

export default Heading;
