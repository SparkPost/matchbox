import React from 'react';
import { Icon } from '../Icon';
import styles from './Error.module.scss';

const Error = (props) => {
  const {
    error,
    wrapper: WrapperComponent = 'div'
  } = props;
  return <WrapperComponent className={styles.Error}>
    <span className={styles.Message}><Icon name='Error' className={styles.Icon} size={13} />{ error }</span>
  </WrapperComponent>;
};

Error.displayName = 'Error';
export default Error;
