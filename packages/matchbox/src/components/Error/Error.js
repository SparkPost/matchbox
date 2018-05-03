import React from 'react';
import { Error as ErrorIcon } from '@sparkpost/matchbox-icons';
import styles from './Error.module.scss';

const Error = (props) => {
  const {
    error,
    wrapper: WrapperComponent = 'div'
  } = props;

  return (
    <WrapperComponent className={styles.Error}>
      <span className={styles.Message}><ErrorIcon className={styles.Icon} size={13} />{ error }</span>
    </WrapperComponent>
  );
};

Error.displayName = 'Error';
export default Error;
