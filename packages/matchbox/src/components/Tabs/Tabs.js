import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { tokens } from '@sparkpost/design-tokens';
import { UnstyledLink } from '../UnstyledLink';
import { Box } from '../Box';
import { deprecate } from '../../helpers/propTypes';
import { buttonReset } from '../../styles/helpers';

const StyledTab = styled(Box)`
  ${buttonReset}
  ${'' /* Not a token, equivalent to 20px to enqure 10rem of spacing between text */}
  padding: 0 1.25rem;
  line-height: 3.75rem;

  &:after {
    display: block;
    position: absolute;
    content: '';
    bottom: -1px;
    left: 0;
    right: 0;
    height: ${tokens.spacing_100};
    transition: ${tokens.motionDuration_fast} ${tokens.motionEase_in_out};
  }

  ${({ isSelected }) => `
    color: ${isSelected ? tokens.color_blue_700 : tokens.color_gray_700};
    
    &:after {
      background: ${isSelected ? tokens.color_blue_700 : 'transparent'};
    }

    &:hover {
      ${!isSelected ? `color: ${tokens.color_gray_900};` : ''};
      &:after {
        ${!isSelected ? `background: ${tokens.color_gray_400};` : ''}
      }
    }
  `}
`;

function Tab(props) {
  const { index, content, selected, fitted, ...rest } = props;

  function handleClick(event) {
    const { index, onClick } = props;
    onClick(event, index);
  }

  return (
    <StyledTab
      as={UnstyledLink}
      component="button" // Ensures focusability
      position="relative"
      flex={fitted ? '1' : '0'}
      isSelected={selected === index}
      fontSize="200"
      fontWeight="medium"
      {...rest}
      onClick={handleClick}
    >
      {content}
    </StyledTab>
  );
}

Tab.displayName = 'Tab';

function Tabs(props) {
  const { tabs, selected, onSelect, connectBelow, fitted } = props;

  function handleClick(event, index) {
    const { onClick } = tabs[index];

    if (onClick) {
      onClick(event, index);
    }

    if (onSelect && selected !== index) {
      onSelect(index, selected);
    }
  }

  // const tabsClasses = classnames(
  //   styles.Tabs,
  //   fitted && styles.fitted
  // );

  return (
    <Box display="flex" borderBottom="400" mb={connectBelow ? '0' : '400'}>
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
