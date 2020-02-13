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
  return str.replace(/\s+/g, '-').toLowerCase();
}

function Heading(props) {
  if (!props.children) {
    return null;
  }

  // Gastby deploys break without this
  const [pathname, setPathname] = React.useState('');

  React.useEffect(() => {
    if (typeof window !== undefined) {
      setPathname(`${window.location.pathname}#${toKebab(props.children)}`);
    }
  }, [props.children]);

  return (
    <StyledLink to={pathname}>
      <Text as={props.as} id={toKebab(props.children)} position="relative">
        {props.children}
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
