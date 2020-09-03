import React from 'react';
import _ from 'lodash';
import { StyledListItem, StyledLink } from './styles';

import { ExpandableMenuItem } from '../ExpandableMenuItem';
import { Box, Inline } from '@sparkpost/matchbox';

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

function Deprecated() {
  return (
    <Box
      as="span"
      fontSize="200"
      lineHeight="200"
      bg="yellow.200"
      px="100"
      color="yellow.800"
      borderRadius="3px"
    >
      Deprecated
    </Box>
  );
}

function New() {
  return (
    <Box
      as="span"
      fontSize="200"
      lineHeight="0"
      bg="green.300"
      px="100"
      color="green.900"
      borderRadius="3px"
    >
      New
    </Box>
  );
}

function List(props) {
  const { items } = props;

  return (
    <Box as="ul" mb="600" p="0">
      {items.map(item => (
        <StyledListItem key={item.path} selected={item.selected}>
          <Inline>
            <StyledLink to={item.path} selected={item.selected}>
              <span>{item.label}</span>
            </StyledLink>
            {item.tag === 'deprecated' && <Deprecated />}
            {item.tag === 'new' && <New />}
          </Inline>
        </StyledListItem>
      ))}
    </Box>
  );
}

function SideNavigation(props) {
  const { navItems = [] } = props;

  const rootItems = navItems.filter(({ section }) => !section);
  const sectionedItems = navItems.filter(({ section }) => !!section);
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
      pr="200"
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
