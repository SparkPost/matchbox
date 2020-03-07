import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { UnstyledLink } from '../UnstyledLink';
import { Box } from '../Box';
import { deprecate } from '../../helpers/propTypes';
import { tabStyles } from './styles';

// TODO Replace this when styled-components supports shouldForwardProps
// See: https://github.com/styled-components/styled-components/commit/e02109e626ed117b76f220d0b9b926129655262d
// Or when UnstyledLink is updated to use system props
function LinkWrapper({ selected, fitted, ...props }) {
  return <UnstyledLink {...props} />;
}

const StyledTab = styled(LinkWrapper)`
  ${tabStyles}
`;

function Tab(props) {
  const { index, content, selected, fitted, ...rest } = props;

  function handleClick(event) {
    const { index, onClick } = props;
    onClick(event, index);
  }

  return (
    <StyledTab
      component="button" // Ensures focusability
      selected={selected === index}
      fitted={fitted}
      {...rest}
      onClick={handleClick}
    >
      {content}
    </StyledTab>
  );
}

Tab.displayName = 'Tab';

function Tabs(props) {
  const { tabs, selected, onSelect, fitted } = props;

  function handleClick(event, index) {
    const { onClick } = tabs[index];

    if (onClick) {
      onClick(event, index);
    }

    if (onSelect && selected !== index) {
      onSelect(index, selected);
    }
  }

  return (
    <Box display="flex" borderBottom="400">
      {tabs.map((tab, i) => (
        <Tab key={i} index={i} fitted={fitted} selected={selected} {...tab} onClick={handleClick} />
      ))}
    </Box>
  );
}

Tabs.displayName = 'Tabs';
Tabs.propTypes = {
  /**
   * Tab Content
   * Actions that build the tabs. Most button and unstyled link props will work in here.
   * e.g. { content: 'Label', onClick: callback() }
   */
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.node.isRequired,
    }),
  ),

  /**
   * Tab Color
   */
  color: deprecate(
    PropTypes.oneOf(['orange', 'blue', 'navy', 'purple', 'red']),
    'Tab color is no longer configurable',
  ),
  /**
   * Index of selected tab
   */
  selected: PropTypes.number.isRequired,
  /**
   * Connects this component with component underneath it. Works well with Panels.
   */
  connectBelow: deprecate(PropTypes.bool, 'Deprecated in favor of margin system props'),

  onSelect: PropTypes.func,
};

export default Tabs;
