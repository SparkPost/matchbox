import React from 'react';
import _ from 'lodash';
import { StyledListItem, StyledLink } from './styles';

import { ExpandableMenuItem } from '../ExpandableMenuItem';
import { Box } from '@sparkpost/matchbox';

function Section(props) {
  const { value, navItems } = props;

  const section = navItems.filter(({ section }) => section === value);

  const isActiveSection = section.some(item => {
    return item.selected;
  });

  return (
    <ExpandableMenuItem
      key={value}
      value={value}
      defaultExpanded={isActiveSection}
      firstRoute={section[0].path}
    >
      <List items={section} />
    </ExpandableMenuItem>
  );
}

function List(props) {
  const { items } = props;

  return (
    <Box as="ul" mb="600" p="0">
      {items.map(item => (
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

function SideNavigation(props) {
  const { navItems = [] } = props;

  const onlyActive = navItems.filter(({ disabled }) => !disabled);
  const rootItems = onlyActive.filter(({ section }) => !section);
  const sectionedItems = onlyActive.filter(({ section }) => !!section);
  const sections = _.uniq(
    sectionedItems.map(({ section }) => section || 'rootList')
  );

  function renderSection(key) {
    return <Section key={key} value={key} navItems={navItems} />;
  }

  return (
    <Box
      height="100vh"
      pt="400"
      position="sticky"
      top="0"
      overflow="scroll"
      as="nav"
    >
      <Box pb="600">
        <List items={rootItems} />
        {sections.map(renderSection)}
      </Box>
    </Box>
  );
}

export default SideNavigation;
