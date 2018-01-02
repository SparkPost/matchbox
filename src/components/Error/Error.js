import React from 'react';
import { Icon } from '../Icon';
import styles from './Error.module.scss';

const Error = ({ error, inline }) => {
  const errorClass = inline ? styles.InlineError : styles.Error;
  return <div className={errorClass}>
    <span className={styles.Message}><Icon name='Error' className={styles.Icon} size={13} />{ error }</span>
  </div>;
};

Error.displayName = 'Error';
export default Error;
