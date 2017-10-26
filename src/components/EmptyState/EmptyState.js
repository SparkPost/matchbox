import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { buttonFrom } from '../Button';
import { linkFrom } from '../UnstyledLink';

import * as Images from '../../images';
import styles from './EmptyState.module.scss';

const primaryActionOverrides = {
  primary: true,
  size: 'large'
};

class EmptyState extends Component {
  static displayName = 'EmptyState';

  static propTypes = {
    /**
     * The display title
     */
    title: PropTypes.string,
    /**
      * Main cta. Most button props will work in here.
      * e.g. { content: 'button label', onClick: callback() }
      */
    primaryAction: PropTypes.shape({
      content: PropTypes.string.isRequired
    }),
    /**
      * Secondary Action - appear as a link next to the primary action
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
      primaryAction,
      secondaryAction,
      children,
      image
    } = this.props;

    let ImageMarkup;

    if (image) {
      ImageMarkup = Images[image];
      if (!ImageMarkup) {
        throw new Error('Empty State image does not exist. Available images: "Generic", "Setup", "Templates", "Users"');
      }
    }

    const primaryActionMarkup = primaryAction
      ? buttonFrom(primaryAction, primaryActionOverrides)
      : null;

    const secondaryActionMarkup = secondaryAction
      ? linkFrom(secondaryAction)
      : null;

    return (
      <div className={styles.EmptyState}>
        <h1 className={styles.Title}>{ title }</h1>
        <div className={styles.Content}>{ children }</div>
        <div className={styles.Actions}>
          { primaryActionMarkup } { secondaryActionMarkup }
        </div>
        <div className={styles.Image}><ImageMarkup /></div>
      </div>
    );
  }
}

export default EmptyState;
