import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ActionList } from '../ActionList';
import styles from './TypeaheadMenu.module.scss';

function TypeaheadMenu(props) {
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

TypeaheadMenu.propTypes = {
  items: PropTypes.array,
  isOpen: PropTypes.bool,
  menuRef: PropTypes.func
};

TypeaheadMenu.defaultProps = {
  items: []
};

export default TypeaheadMenu;
