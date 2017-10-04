import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { buttonFrom } from '../Button';
import { linkFrom } from '../UnstyledLink';

import styles from './EmptyState.module.scss';

const actionOverrides = {
  primary: true,
  size: 'large'
};

class EmptyState extends Component {
  static propTypes = {
    /**
     * The display title
     */
    title: PropTypes.string,
    /**
      * Main cta. Most button props will work in here.
      * e.g. { content: 'button label', onClick: callback() }
      */
    action: PropTypes.shape({
      content: PropTypes.string.isRequired
    }),
    /**
      * Secondary Action - appears as a link
      */
    secondaryAction: PropTypes.shape({
      content: PropTypes.string.isRequired
    }),
    /**
      * Content below the CTA
      */
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  };

  render() {
    const {
      title,
      action,
      secondaryAction,
      children
    } = this.props;

    const actionMarkup = action
      ? buttonFrom(action, actionOverrides)
      : null;

    const secondaryActionMarkup = secondaryAction
      ? linkFrom(secondaryAction)
      : null;

    return (
      <div className={styles.EmptyState}>
        <h1 className={styles.Title}>{ title }</h1>
        <div className={styles.Content}>{ children }</div>
        <div className={styles.Actions}>
          { actionMarkup } { secondaryActionMarkup }
        </div>
      </div>
    );
  }
}

export default EmptyState;
