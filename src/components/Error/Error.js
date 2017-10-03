import React from 'react';
import { Icon } from '../Icon';
import styles from './Error.module.scss';

const Error = ({ error }) => (
  <div className={styles.Error}>
    <span className={styles.Message}><Icon name='Error' className={styles.Icon} size={13} />{ error }</span>
  </div>
);

export default Error;
