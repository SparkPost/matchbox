import React from 'react';
import { Link } from 'gatsby';
import { Text } from '@sparkpost/matchbox';
import { tokens } from '@sparkpost/design-tokens';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
  span {
    opacity: 0;
    color: ${tokens.color_gray_400};
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
      <Text as={props.as} id={toKebab(props.children)}>
        {props.children}
        <span> #</span>
      </Text>
    </StyledLink>
  );
}

export default Heading;
