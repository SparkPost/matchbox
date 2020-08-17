import React from 'react';
import PropTypes from 'prop-types';
import { maxHeight } from 'styled-system';
import { createPropTypes } from '@styled-system/prop-types';
import { ActionList } from '../ActionList';
import { Box } from '../Box';
import PopoverContent from '../Popover/PopoverContent';

function ComboBoxMenu(props) {
  const {
    items,
    menuRef,
    isOpen,
    maxHeight = '20rem',
    emptyMessage = 'No Results',
    ...rest
  } = props;

  return (
    <Box ref={menuRef} {...rest} position="relative" zIndex="overlay">
      <PopoverContent open={isOpen} width="100%">
        {items.length > 0 ? (
          <ActionList maxHeight={maxHeight}>
            {items.map((action, i) => (
              <ActionList.Action key={i} {...action} />
            ))}
          </ActionList>
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
   * String displayed when item length is 0. Defaults to "No Results"
   */
  emptyMessage: PropTypes.string,
  /**
   * Array of items. see ActionList prop types.
   */
  items: PropTypes.array,
  /**
   * Controls menu visibility
   */
  isOpen: PropTypes.bool,
  /**
   * Maps to Downshift's refKey set in getMenuProps. refKey must be set to "menuRef"
   */
  menuRef: PropTypes.func,
  ...createPropTypes(maxHeight.propNames),
};

ComboBoxMenu.defaultProps = {
  items: [],
};

export default ComboBoxMenu;
