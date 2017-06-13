import React, { Component } from 'react';
import styles from './Label.module.scss';

const Label = ({
  label,
  id,
}) => {
  return (
    <label
      id={id && `${id}Label`}
      htmlFor={id}
      className={styles.Label}>
      { label }
    </label>
  );
};

export default Label;
