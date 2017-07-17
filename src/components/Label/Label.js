import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './Label.module.scss';

const Label = ({
  label,
  id,
  className
}) => {
  return (
    <label
      id={id && `${id}Label`}
      htmlFor={id}
      className={classnames(styles.Label, className)} >
      { label }
    </label>
  );
};

export default Label;
