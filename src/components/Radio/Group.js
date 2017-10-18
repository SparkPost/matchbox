import React from 'react';
import PropTypes from 'prop-types';
import styles from './Radio.module.scss';

const Group = ({ children }) => (
  <div className={styles.Group}>
    { children }
  </div>
);

Group.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

Group.displayName = 'Radio.Group';
export default Group;
