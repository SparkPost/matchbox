import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './ProgressBar.module.scss';

class ProgressBar extends Component {
  static displayName = 'ProgressBar';

  static propTypes = {
    /**
     * Completion in percentage
     */
    completed: PropTypes.number.isRequired,

    /**
     * Bar color
     */
    color: PropTypes.oneOf(['orange', 'blue', 'navy', 'purple', 'red', 'yellow']),

    /**
     * Bar size
     */
    size: PropTypes.oneOf(['small', 'large'])
  };

  static defaultProps = {
    completed: 0,
    color: 'orange'
  }

  render() {
    const { completed = 0, color, size, className } = this.props;

    let percentage = completed;

    if (percentage > 100) {
      percentage = 100;
    } else if (percentage < 0) {
      percentage = 0;
    }

    return (
      <div className={classnames(styles.ProgressBar, styles[color], size && styles[size], className)}>
        <div className={styles.Progress} style={{ width: `${percentage}%` }}/>
      </div>
    );
  }
}

export default ProgressBar;
