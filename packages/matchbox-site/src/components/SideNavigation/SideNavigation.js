import React from 'react';
import _ from 'lodash';
import { StyledListItem, StyledLink } from './styles';

import { Box } from '@sparkpost/matchbox';

function SideNavigation(props) {
  const { navItems = [] } = props;
  const onlyActive = navItems.filter(({ disabled }) => !disabled);
  const rootItems = onlyActive.filter(({ section }) => !section);
  const sectionedItems = onlyActive.filter(({ section }) => !!section);
  const sections = _.uniq(
    sectionedItems.map(({ section }) => section || 'rootList')
  );

  function renderList(list) {
    return (
      <Box as="ul" mb="600" p="0">
        {list.map(item => (
          <StyledListItem key={item.path} selected={item.selected}>
            <StyledLink
              to={item.path}
              disabled={item.disabled}
              selected={item.selected}
            >
              {item.label}
            </StyledLink>
          </StyledListItem>
        ))}
      </Box>
    );
  }

  function renderSection(key) {
    const section = navItems.filter(({ section }) => section === key);
    return (
      <div key={key}>
        <Box mt="700" mb="300" fontSize="300" fontWeight="500" color="gray.500">
          {key}
        </Box>
        {renderList(section)}
      </div>
    );
  }

  return (
    <nav>
      {renderList(rootItems)}
      {sections.map(renderSection)}
    </nav>
  );
}

export default SideNavigation;
