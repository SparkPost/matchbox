import React from 'react';
import _ from 'lodash';
import { StyledListItem, StyledLink } from './styles';
import { findDOMNode } from 'react-dom';

import { ExpandableMenuItem } from '../ExpandableMenuItem';
import { Box, WindowEvent } from '@sparkpost/matchbox';

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

function getRectFor(node) {
  const rect = findDOMNode(node);

  if (!rect) {
    return {};
  }

  return rect.getBoundingClientRect();
}

function SideNavigation(props) {
  const { navItems = [] } = props;

  const ref = React.useRef();
  const [fixed, setFixed] = React.useState(false);
  const [position, setPosition] = React.useState({});

  const onlyActive = navItems.filter(({ disabled }) => !disabled);
  const rootItems = onlyActive.filter(({ section }) => !section);
  const sectionedItems = onlyActive.filter(({ section }) => !!section);
  const sections = _.uniq(
    sectionedItems.map(({ section }) => section || 'rootList')
  );

  function renderSection(key) {
    return <Section key={key} value={key} navItems={navItems} />;
  }

  React.useEffect(function() {
    setPosition(getRectFor(ref.current));
  }, []);

  function onScroll() {
    let { scrollY } = window;

    if (scrollY >= position.top) {
      setFixed(true);
    }

    if (scrollY <= position.top) {
      setFixed(false);
    }
  }

  return (
    <Box
      height="100vh"
      pt="400"
      position={fixed ? 'fixed' : 'relative'}
      top="0"
      overflow="scroll"
      ref={ref}
      as="nav"
    >
      <WindowEvent event="scroll" handler={onScroll} />
      <Box pb="600">
        <List items={rootItems} />
        {sections.map(renderSection)}
      </Box>
    </Box>
  );
}

export default SideNavigation;
