import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ActionList } from '../ActionList';
import styles from './MultiSelectMenu.module.scss';

function MultiSelectMenu(props) {
  const { items, menuRef, isOpen, maxHeight, ...rest } = props;

  const listClasses = classnames(
    styles.List,
    isOpen && styles.open
  );

  return (
    <div {...rest} ref={menuRef} className={listClasses}>
      <ActionList actions={items} maxHeight={maxHeight} />
    </div>
  );
}

MultiSelectMenu.propTypes = {
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
  menuRef: PropTypes.func
};

MultiSelectMenu.defaultProps = {
  items: []
};

export default MultiSelectMenu;
