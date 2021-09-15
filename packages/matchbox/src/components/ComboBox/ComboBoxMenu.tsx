import React from 'react';
import { MaxHeightProps } from 'styled-system';
import { ActionList, ActionListActionProps } from '../ActionList';
import { Box } from '../Box';
import PopoverContent from '../Popover/PopoverContent';

export type ComboBoxMenuProps = {
  /**
   * String displayed when item length is 0. Defaults to "No Results"
   */
  emptyMessage?: string;
  /**
   * Array of items. see ActionList prop types.
   */
  items?: ActionListActionProps[];
  /**
   * Controls menu visibility
   */
  isOpen?: boolean;
  /**
   * Maps to Downshift's refKey set in getMenuProps. refKey must be set to "menuRef"
   */
  menuRef?: React.MutableRefObject<HTMLDivElement>;
} & MaxHeightProps;

function ComboBoxMenu(props: ComboBoxMenuProps): JSX.Element {
  const {
    items = [],
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

export default ComboBoxMenu;
