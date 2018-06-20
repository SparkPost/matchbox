import React from 'react';
import PropTypes from 'prop-types';
import { Label } from '../Label';
import styles from './Checkbox.module.scss';

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

Group.displayName = 'Checkbox.Group';
export default Group;
