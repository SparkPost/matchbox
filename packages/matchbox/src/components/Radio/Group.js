import React from 'react';
import PropTypes from 'prop-types';
import { Label } from '../Label';
import styles from './Radio.module.scss';

const Group = ({ children, label, required }) => (
  <div className={styles.Group}>
    {label && <Label className={styles.GroupLabel}>{label}{required && ' *'}</Label>}
    {children}
  </div>
);

Group.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.node,
  required: PropTypes.bool
};

Group.displayName = 'Radio.Group';
export default Group;
