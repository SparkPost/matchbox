import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Close, Info, CheckCircle, Warning, ErrorIcon } from '@sparkpost/matchbox-icons';
import { UnstyledLink } from '../UnstyledLink';
import { onKey } from '../../helpers/keyEvents';

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

  handleKeydown = (e) => {
    const { onDismiss } = this.props;

    onKey('space', () => onDismiss())(e);
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
      <div className={snackbarStyles} role="alert" {...rest}>
        <div className={styles.IconWrapper}>
          {status === 'default' && <Info label="Info" />}

          {status === 'success' && <CheckCircle label="Success"/>}

          {status === 'warning' && <Warning label="Warning" />}

          {(status === 'error' || status === 'danger') && <ErrorIcon label="Error" />}
        </div>

        <div className={styles.Content} style={{ maxWidth }}>{children}</div>

        <UnstyledLink
          component='button'
          className={styles.Dismiss}
          onClick={onDismiss}
          onKeyDown={this.handleKeydown}
        >
          <Close size={21} className={styles.DismissIcon} />
        </UnstyledLink>
      </div>
    );
  }
}

export default Snackbar;
