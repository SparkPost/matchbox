import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { buttonFrom } from '../Button';
import { Icon } from '../Icon';
import { UnstyledLink, linkFrom } from '../UnstyledLink';

import styles from './Page.module.scss';

const primaryOverrides = {
  primary: true,
  size: 'large'
};

const secondaryOverrides = {
  className: styles.SecondaryAction
};

const backOverrides = {
  plain: true,
  size: 'small'
};

const Breadcrumb = ({ content, ...rest }) => (
  <UnstyledLink {...rest}>
    <Icon name='ChevronLeft' size={27} />
    { content }
  </UnstyledLink>
);

class Page extends Component {
  static propTypes = {
    /**
     * The Page display title
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
      * Actions that appear below title
      * e.g. { content: 'button label', onClick: callback() }
      */
     secondaryActions: PropTypes.arrayOf(PropTypes.shape({
       content: PropTypes.string.isRequired
     })),
     /**
      * The back link action
      */
     breadcrumbAction: PropTypes.shape({
       content: PropTypes.string.isRequired
     }),
  };

  render() {
    const {
      title,
      primaryAction,
      secondaryActions,
      breadcrumbAction
    } = this.props;

    const primaryActionMarkup = primaryAction
      ? buttonFrom(primaryAction, primaryOverrides)
      : null;

    const secondaryActionsMarkup = secondaryActions
      ? secondaryActions.map((action, i) => linkFrom(
          { ...action, ...secondaryOverrides }, i
        ))
      : null;

    const breadcrumbMarkup = breadcrumbAction
      ? <Breadcrumb {...breadcrumbAction} className={styles.Breadcrumb}/>
      : null;

    return (
      <div className={styles.Page}>
        <div className={styles.Breadcrumb}>
          { breadcrumbMarkup }
        </div>
        <div className={styles.MainContent}>
          <h1 className={styles.Title}>{ title }</h1>
          <div className={styles.PrimaryAction}>
            { primaryActionMarkup }
          </div>
        </div>
        <div className={styles.SecondaryActions}>
          { secondaryActionsMarkup }
        </div>
      </div>
    );
  }
}

export default Page;
