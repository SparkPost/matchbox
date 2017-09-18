import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Icon } from '../Icon';

import styles from './Snackbar.module.scss';
import { buttonFrom } from '../Button';

const actionOverrides = { outline: true };

const IconSection = ({ status }) => {
  const icons = {
    success: 'CheckCircle',
    info: 'InfoOutline',
    warning: 'Error',
    danger: 'Error'
  };

  if (status === 'default' || !icons[status]) {
    return null;
  }

  const iconClasses = classnames(
    styles.Icon,
    status && styles[`${status}Icon`]
  );

  return (
    <div className={styles.IconWrapper}>
      <Icon name={icons[status]} size={30} className={iconClasses} />
      <div className={styles.IconBackdrop} />
    </div>
  );
};

class Snackbar extends Component {
  static propTypes = {
    /**
     * The type of snackbar. 'default' | 'success' | 'danger'
     */
    status: PropTypes.oneOf(['default', 'success', 'danger']),

    /**
     * Callback when dismiss button is clicked.
     */
    onDismiss: PropTypes.func.isRequired,

    /**
     * Snackbar Content
     */
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node
    ]),
  };

  defaultProps = {
    status: 'default'
  }

  render() {
    const {
      children,
      status,
      onDismiss,
      ...rest
    } = this.props;

    const snackbarStyles = classnames(
      styles.Snackbar,
      styles[`${status}`]
    );

    return (
      <div className={snackbarStyles} {...rest}>
        <div className={styles.Content}>{ children }</div>
        <a className={styles.Dismiss} onClick={onDismiss}>
          <Icon name='Close' size={21} className={styles.DismissIcon} />
        </a>
      </div>
    );
  }
};

export default Snackbar;
