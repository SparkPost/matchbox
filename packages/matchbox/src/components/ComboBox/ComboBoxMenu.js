import React from 'react';
import PropTypes from 'prop-types';
import { tokens } from '@sparkpost/design-tokens';
import { ActionList } from '../ActionList';
import { Box } from '../Box';
import PopoverContent from '../Popover/PopoverContent';

function ComboBoxMenu(props) {
  const { items, menuRef, isOpen, maxHeight, emptyMessage = 'No Results', ...rest } = props;

  return (
    <Box ref={menuRef} {...rest} position="relative" zIndex={tokens.zIndex_overlay}>
      <PopoverContent open={isOpen} width="100%">
        {items.length > 0 ? (
          <ActionList actions={items} maxHeight={maxHeight} />
        ) : (
          <Box p="200" color="gray.700">
            {emptyMessage}
          </Box>
        )}
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
