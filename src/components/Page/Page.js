import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { buttonFrom } from '../Button';
import ChevronLeft from '../../icons/ChevronLeft';
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
    <ChevronLeft size={27} />
    { content }
  </UnstyledLink>
);

class Page extends Component {
  static displayName = 'Page';

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
      * Optional empty state object
      */
    empty: PropTypes.shape({
      show: PropTypes.bool,
      content: PropTypes.node
    }),

    /**
      * Page Children
      */
    children: PropTypes.node
  };

  render() {
    const {
      title,
      primaryAction,
      secondaryActions,
      breadcrumbAction,
      empty,
      children
    } = this.props;

    const { show, content, ...emptyOptions } = empty;

    if (show) {
      return (
        <EmptyState
          title={title}
          primaryAction={primaryAction}
          {...emptyOptions}>
            { content }
          </EmptyState>
      );
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
      <div>
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
        { children }
      </div>
    );
  }
}

export default Page;
