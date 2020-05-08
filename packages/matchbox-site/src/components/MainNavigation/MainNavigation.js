import React from 'react';
import { Link } from 'gatsby';
import { listItem, link } from './style';
import styled from 'styled-components';

import { Box } from '@sparkpost/matchbox';

const StyledListItem = styled('li')`
  ${listItem}
`;

const StyledLink = styled(Link)`
  ${link}
`;

function MainNavigation(props) {
  const navItems = React.useMemo(() => {
    const list = props.navItems.filter(({ disabled }) => !disabled);

    return list.map(item => (
      <StyledListItem key={item.path} selected={item.selected}>
        <StyledLink to={item.path} disabled={item.disabled}>
          {item.label}
        </StyledLink>
      </StyledListItem>
    ));
  }, [props.navItems]);

  return (
    <nav>
      <Box
        as="ul"
        display="flex"
        justifyContent="flex-end"
        padding="0"
        margin="0"
      >
        {navItems}
      </Box>
    </nav>
  );
}

export default MainNavigation;
