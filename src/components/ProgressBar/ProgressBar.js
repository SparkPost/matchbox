import React, { Component } from 'react';
import styles from './ProgressBar.module.scss';

class ProgressBar extends Component {
  render() {
    const { completed } = this.props;

    const percentage = completed > 0
      ? completed
      : 0;

    return (
      <div className={styles.ProgressBar}>
        <div className={styles.Progress} style={{ width: completed }}/>
      </div>
    );
  }
};

export default ProgressBar;
