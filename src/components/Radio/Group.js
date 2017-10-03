import React from 'react';
import PropTypes from 'prop-types';
import styles from './Radio.module.scss';

const Group = ({ children }) => (
  <radiogroup className={styles.Group}>
    { children }
  </radiogroup>
);

Group.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

Group.displayName = 'Radio.Group';
export default Group;
