import React from 'react';
import PropTypes from 'prop-types';
import styles from './ScreenReaderOnly.module.scss';

const ScreenReaderOnly = ({ children }) => (
  <span className={styles.ScreenReaderOnly}>
    {children}
  </span>
);

ScreenReaderOnly.propTypes = {
  children: PropTypes.node.isRequired
};

export default ScreenReaderOnly;
