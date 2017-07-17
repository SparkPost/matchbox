import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Checkbox.module.scss';

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

Group.displayName = 'Checkbox.Group';
export default Group;
