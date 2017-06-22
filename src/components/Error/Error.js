import React, { Component } from 'react';
import { MdError } from 'react-icons/lib/md';
import styles from './Error.module.scss';

const Error = ({ error }) => (
  <div className={styles.Error}>
    <MdError className={styles.Icon} size={13} />
    <span className={styles.Message}>{ error }</span>
  </div>
);

export default Error;
