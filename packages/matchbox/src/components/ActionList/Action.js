import React from 'react';
import PropTypes from 'prop-types';
import { CheckBox } from '@sparkpost/matchbox-icons';
import { deprecate } from '../../helpers/propTypes';
import { Box } from '../Box';
import { HelpText } from '../HelpText';
import { StyledLink } from './styles';

const Action = React.forwardRef(function Action(props, userRef) {
  const { content, children, disabled, helpText, is = 'link', selected, ...action } = props;

  const linkContent = React.useMemo(() => {
    return (
      <Box as="span" alignItems="flex-start" display="flex">
        <Box as="span" flex="1" fontSize="400" lineHeight="300">
          {content || children}
        </Box>
        {selected && (
          <Box as="span" color="blue.700">
            <CheckBox size={20} />
          </Box>
        )}
        {helpText && <HelpText>{helpText}</HelpText>}
      </Box>
    );
  }, [content, selected, helpText]);

  return (
    <StyledLink
      as={is === 'button' ? 'button' : null}
      type={is === 'button' ? 'button' : null}
      disabled={disabled}
      isType={is}
      ref={userRef}
      role="menuitem"
      tabIndex="-1"
      {...action}
    >
      {linkContent}
    </StyledLink>
  );
});

Action.displayName = 'ActionList.Action';
Action.propTypes = {
  content: PropTypes.node,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  /**
   * Same as hover styles.
   * Can be used for wrappers that manage focus within the menu, eg downshift
   */
  highlighted: PropTypes.bool,
  is: PropTypes.oneOf(['link', 'button']),
  selected: deprecate(PropTypes.bool, 'Use the checkbox component instead'),
  helpText: PropTypes.string,
};

export default Action;
