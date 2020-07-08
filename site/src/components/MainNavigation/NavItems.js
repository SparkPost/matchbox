import React from 'react';
import styled from 'styled-components';
import { listItem, link } from './styles';
import { Link } from 'gatsby';

const StyledListItem = styled('li')`
  ${listItem}
`;

const StyledLink = styled(Link)`
  ${link}
`;

function NavItems(props) {
  const list = props.items.filter(({ disabled }) => !disabled);

  return list.map(item => (
    <StyledListItem
      ml={['0', null, '800']}
      key={item.path}
      selected={item.selected}
    >
      <StyledLink
        as={Link}
        to={item.path}
        disabled={item.disabled}
        selected={item.selected}
      >
        {item.label}
      </StyledLink>
    </StyledListItem>
  ));
}

export default NavItems;
