import React from 'react';
import classNames from 'classnames';
import { Error as ErrorIcon } from '@sparkpost/matchbox-icons';
import styles from './Error.module.scss';

const Error = (props) => {
  const {
    className,
    error,
    wrapper: WrapperComponent = 'div'
  } = props;

  return (
    <WrapperComponent className={classNames(styles.Error, className)}>
      <span className={styles.Message}><ErrorIcon className={styles.Icon} size={13} />{error}</span>
    </WrapperComponent>
  );
};

Error.displayName = 'Error';
export default Error;
