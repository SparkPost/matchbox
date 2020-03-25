import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { UnstyledLink } from '../UnstyledLink';
import { deprecate } from '../../helpers/propTypes';
import { margin } from 'styled-system';
import { createPropTypes } from '@styled-system/prop-types';
import { wrapperStyles, tabStyles } from './styles';
import { pick } from '@styled-system/props';

// TODO Replace this when styled-components supports shouldForwardProps
// See: https://github.com/styled-components/styled-components/commit/e02109e626ed117b76f220d0b9b926129655262d
// Or when UnstyledLink is updated to use system props
function LinkWrapper({ selected, fitted, ...props }) {
  return <UnstyledLink {...props} />;
}

const StyledTab = styled(LinkWrapper)`
  ${tabStyles}
`;

const StyledTabs = styled('div')`
  ${margin}
  ${wrapperStyles}
`;

function Tab(props) {
  const { index, content, selected, fitted, ...rest } = props;

  function handleClick(event) {
    const { index, onClick } = props;
    onClick(event, index);
  }

  return (
    <StyledTab
      // Ensures focusability
      // Overwriting component does not guarantee focusability
      component={rest.component || rest.Component || 'button'}
      selected={selected === index}
      fitted={fitted}
      {...rest}
      onClick={handleClick}
      type="button"
    >
      {content}
    </StyledTab>
  );
}

Tab.displayName = 'Tab';

function Tabs(props) {
  const { tabs, selected, onSelect, fitted, ...rest } = props;

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
    <StyledTabs {...pick(rest)}>
      {tabs.map((tab, i) => (
        <Tab key={i} index={i} fitted={fitted} selected={selected} {...tab} onClick={handleClick} />
      ))}
    </StyledTabs>
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
  onSelect: PropTypes.func,
  ...createPropTypes(margin.propNames),
};

export default Tabs;
