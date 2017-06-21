import React, { Component } from 'react';
import styles from './ProgressBar.module.scss';

class ProgressBar extends Component {
  render() {
    const { completed = 0 } = this.props;

    let percentage = completed;

    if (percentage > 100) {
      percentage = 100;
    } else if (percentage < 1) {
      percentage = 0;
    }

    return (
      <div className={styles.ProgressBar}>
        <div className={styles.Progress} style={{ width: `${percentage}%` }}/>
      </div>
    );
  }
};

export default ProgressBar;
