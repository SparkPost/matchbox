import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Button.module.scss';

const Group = ({ children, className = '' }) => (
  <div className={classnames(styles.Group, className)}>
    { children }
  </div>
);

Group.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

Group.displayName = 'Button.Group';

export default Group;
