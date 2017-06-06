import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './TextField.module.scss';

const Error = ({ error }) => (
  <div className={styles.Error}>
    { error }
  </div>
);

export default Error;
