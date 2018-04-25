import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ErrorIcon, CheckCircle, InfoOutline, Close } from '@sparkpost/matchbox-icons';

import styles from './Banner.module.scss';
import { buttonFrom } from '../Button';

const actionOverrides = { outline: true, size: 'small' };

const IconSection = ({ status }) => {
  const icons = {
    success: CheckCircle,
    info: InfoOutline,
    warning: ErrorIcon,
    danger: ErrorIcon
  };

  if (status === 'default' || !icons[status]) {
    return null;
  }

  const iconClasses = classnames(
    styles.Icon,
    status && styles[`${status}Icon`]
  );

  const Icon = icons[status];

  return (
    <div className={styles.IconWrapper}>
      <Icon size={30} className={iconClasses} />
      <div className={styles.IconBackdrop} />
    </div>
  );
};

class Banner extends Component {
  static displayName = 'Banner';

  static propTypes = {
    /**
     * The type of banner. 'default' | 'success' | 'warning' | 'danger' | 'info'
     */
    status: PropTypes.oneOf(['default', 'success', 'warning', 'danger', 'info']),

    /**
     * The banner's title
     */
    title: PropTypes.string,

    /**
     * Callback when dismiss button is clicked. Button hidden without callback.
     */
    onDismiss: PropTypes.func,

    /**
     * Action that build a button. Most button props will work in here.
     * e.g. { content: 'button label', onClick: callback() }
     */
    action: PropTypes.shape({ content: PropTypes.string.isRequired }),

    /**
     * List of actions that build buttons. Most button props will work in here.
     * Overrides `action`
     */
    actions: PropTypes.arrayOf(PropTypes.shape({
      content: PropTypes.string.isRequired
    })),

    /**
     * Banner Content
     */
    children: PropTypes.node
  };

  static defaultProps = {
    status: 'default'
  };

  render() {
    const {
      children,
      title,
      status,
      action,
      actions,
      onDismiss,
      ...rest
    } = this.props;

    const titleMarkup = title
      ? <h5 className={styles.Title}>{ title }</h5>
      : null;

    let actionMarkup = action
      ? <div className={styles.Actions}>{ buttonFrom(action, actionOverrides) }</div>
      : null;

    if (actions) {
      actionMarkup = (
        <div className={styles.Actions}>
          { actions.map((action, i) => buttonFrom(action, actionOverrides, i)) }
        </div>
      );
    }

    const dismissMarkup = onDismiss
      ? <a className={styles.Dismiss} onClick={onDismiss}><Close size={24} className={styles.DismissIcon} /></a>
      : null;

    const bannerStyles = classnames(
      styles.Banner,
      styles[`${status}`]
    );

    return (
      <div className={bannerStyles} {...rest}>
        <IconSection status={status} />
        <div className={styles.Content}>
          { dismissMarkup }
          { titleMarkup }
          <div className={styles.Children}>{ children }</div>
          { actionMarkup }
        </div>
      </div>
    );
  }
}

export default Banner;
