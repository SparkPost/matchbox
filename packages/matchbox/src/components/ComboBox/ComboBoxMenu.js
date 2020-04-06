import React from 'react';
import PropTypes from 'prop-types';
import { tokens } from '@sparkpost/design-tokens';
import { ActionList } from '../ActionList';
import { Box } from '../Box';
import PopoverContent from '../Popover/PopoverContent';

function ComboBoxMenu(props) {
  const { items, menuRef, isOpen = false, maxHeight, ...rest } = props;

  return (
    <Box ref={menuRef} {...rest} position="relative" zIndex={tokens.zIndex_overlay}>
      <PopoverContent open={isOpen} width="100%">
        <ActionList actions={items} maxHeight={maxHeight} />
      </PopoverContent>
    </Box>
  );
}

ComboBoxMenu.propTypes = {
  /**
   * Array of items. see ActionList prop types.
   */
  items: PropTypes.array,
  /**
   * Controls menu visibility
   */
  // isOpen: PropTypes.bool,
  /**
   * Maps to Downshift's refKey set in getMenuProps. refKey must be set to "menuRef"
   */
  menuRef: PropTypes.func,
};

ComboBoxMenu.defaultProps = {
  items: [],
};

export default ComboBoxMenu;
