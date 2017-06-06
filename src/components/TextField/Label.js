import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './TextField.module.scss';

const Label = ({
  label,
  id,
  labelHidden
}) => {
  if (labelHidden) { return null; }
  return (
    <label
      id={id && `${id}Label`}
      htmlFor={id}
      className={classnames(styles.Label, labelHidden && styles.labelHidden)}>
      { label }
    </label>
  );
};

export default Label;
