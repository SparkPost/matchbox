import React from 'react';
import PropTypes from 'prop-types';
import { deprecate } from '../../helpers/propTypes';
import classnames from 'classnames';
import styles from './ProgressBar.module.scss';

function ProgressBar(props) {
  const { completed = 0, size } = props;

  let percentage = completed;

  if (percentage > 100) {
    percentage = 100;
  } else if (percentage < 1) {
    percentage = 0;
  }

  const classname = classnames(styles.ProgressBar, styles['blue'], styles[size]);

  return (
    <div className={classname}>
      <div className={styles.Progress} style={{ width: `${percentage}%` }} />
    </div>
  );
}

ProgressBar.displayName = 'ProgressBar';

ProgressBar.propTypes = {
  completed: PropTypes.number.isRequired,
  color: deprecate(
    PropTypes.oneOf(['orange', 'blue', 'navy', 'purple', 'red']),
    'Color is always blue for now. This may be updated in the future.',
  ),
  size: PropTypes.oneOf(['normal', 'small']),
};

ProgressBar.defaultProps = {
  size: 'normal',
};

export default ProgressBar;
