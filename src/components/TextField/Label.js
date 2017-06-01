import React, { Component } from 'react';
import styles from './TextField.module.scss';

const Label = ({
  label,
  id,
  labelHidden
}) => (
  <label id={`${id}Label`} htmlFor='' className={classnames(labelHidden && styles.labelHidden)}>
    { label }
  </label>
);

export default Label;
