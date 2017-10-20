import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { buttonFrom } from '../Button';
import { Icon } from '../Icon';
import { EmptyState } from '../EmptyState';
import { UnstyledLink, linkFrom } from '../UnstyledLink';

import styles from './Page.module.scss';

const primaryOverrides = {
  primary: true,
  size: 'large'
};

const secondaryOverrides = {
  className: styles.SecondaryAction
};

const Breadcrumb = ({ content, ...rest }) => (
  <UnstyledLink {...rest}>
    <Icon name='ChevronLeft' size={27} />
    { content }
  </UnstyledLink>
);

class Page extends Component {
  static defaultProps = {
    empty: {}
  }

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

    /**
      * Optional empty state object that will share primaryAction
      */
    empty: PropTypes.shape({
      test: PropTypes.bool.isRequired
    })
  };

  render() {
    const {
      title,
      primaryAction,
      secondaryActions,
      breadcrumbAction,
      empty
    } = this.props;

    const { test, content, ...emptyOptions } = empty;

    if (test) {
      return <EmptyState primaryAction={primaryAction} {...emptyOptions}>{ content }</EmptyState>;
    }

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

    const titleMarkup = title ? <h1 className={styles.Title}>{ title }</h1> : null;

    return (
      <div className={styles.Page}>
        <div className={styles.Breadcrumb}>
          { breadcrumbMarkup }
        </div>
        <div className={styles.MainContent}>
          { titleMarkup }
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
