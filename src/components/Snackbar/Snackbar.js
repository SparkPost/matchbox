import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Icon } from '../Icon';

import styles from './Snackbar.module.scss';

class Snackbar extends Component {
  static displayName = 'Snackbar';

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
    ])
  };

  static defaultProps = {
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
}

export default Snackbar;
