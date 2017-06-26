import React, { Component } from 'react';
import { Icon } from '../Icon';
import styles from './Error.module.scss';

const Error = ({ error }) => (
  <div className={styles.Error}>
    <Icon name='Error' className={styles.Icon} size={13} />
    <span className={styles.Message}>{ error }</span>
  </div>
);

export default Error;
