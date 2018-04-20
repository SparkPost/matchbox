import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Close from '../../icons/Close';

import styles from './Snackbar.module.scss';

class Snackbar extends Component {
  static displayName = 'Snackbar';

  static propTypes = {
    /**
     * The type of snackbar.
     */
    status: PropTypes.oneOf(['default', 'success', 'danger', 'error', 'warning']),

    /**
     * Snackbar max-width in pixels.
     */
    maxWidth: PropTypes.number,

    /**
     * Callback when dismiss button is clicked.
     */
    onDismiss: PropTypes.func.isRequired,

    /**
     * Snackbar Content
     */
    children: PropTypes.node
  };

  static defaultProps = {
    status: 'default',
    maxWidth: 380
  }

  render() {
    const {
      children,
      status,
      maxWidth,
      onDismiss,
      ...rest
    } = this.props;

    const snackbarStyles = classnames(
      styles.Snackbar,
      styles[`${status}`]
    );

    return (
      <div className={snackbarStyles} {...rest}>
        <div className={styles.Content} style={{ maxWidth }}>{ children }</div>
        <a className={styles.Dismiss} onClick={onDismiss}>
          <Close size={21} className={styles.DismissIcon} />
        </a>
      </div>
    );
  }
}

export default Snackbar;
