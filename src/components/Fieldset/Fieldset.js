import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './Fieldset.module.scss';

export const Fieldset = ({ children }) => (
  <div className={styles.Fieldset}>
    { children }
  </div>
);

export const Error = ({ error }) => (
  <div className={styles.Error}>
    { error }
  </div>
);

export const Label = ({
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
