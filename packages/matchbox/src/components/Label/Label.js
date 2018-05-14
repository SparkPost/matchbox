import React from 'react';
import classnames from 'classnames';
import styles from './Label.module.scss';

const Label = ({
  label,
  id,
  className,
  children
}) => (
  <label
    id={id && `${id}Label`}
    htmlFor={id}
    className={classnames(styles.Label, className)} >
    {label}
    {children}
  </label>
);

Label.displayName = 'Label';
export default Label;
