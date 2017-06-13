import React, { Component } from 'react';
import styles from './Error.module.scss';

const Error = ({ error }) => (
  <div className={styles.Error}>
    { error }
  </div>
);

export default Error;
