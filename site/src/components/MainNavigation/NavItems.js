import React from 'react';
import styled from 'styled-components';
import { listItem, link } from './styles';
import { Link } from 'gatsby';

import { Box } from '@sparkpost/matchbox';

const StyledListItem = styled(Box)`
  ${listItem}
`;

const StyledLink = styled(Link)`
  ${link}
`;

function NavItems(props) {
  return props.items.map((item, i) => (
    <Box display="block" key={i}>
      <StyledListItem
        as="li"
        ml={['0', null, '600']}
        key={item.path}
        selected={item.selected}
      >
        <StyledLink as={Link} to={item.path} selected={item.selected}>
          {item.label}
        </StyledLink>
      </StyledListItem>
    </Box>
  ));
}

export default NavItems;
