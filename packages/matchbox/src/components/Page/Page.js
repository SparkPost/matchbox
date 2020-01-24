import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { buttonFrom } from '../Button';
import { ChevronLeft } from '@sparkpost/matchbox-icons';
import { EmptyState } from '../EmptyState';
import { UnstyledLink, linkFrom } from '../UnstyledLink';
import { filterByVisible } from '../../helpers/array';

import styles from './Page.module.scss';

const Breadcrumb = ({ content, ...rest }) => (
  <UnstyledLink {...rest}>
    <ChevronLeft size={27} />
    {content}
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
    title: PropTypes.node,

    /**
     * Subtitle that appears to the right of the title
     */
    subtitle: PropTypes.node,

    /**
      * Main cta. Most button props will work in here.
      * e.g. { content: 'button label', onClick: callback() }
      */
    primaryAction: PropTypes.shape({
      content: PropTypes.node.isRequired
    }),

    /**
     * Alternative to primaryAction, accepts React nodes
     */
    primaryArea: PropTypes.node,

    /**
      * Actions that appear below title
      * e.g. { content: 'button label', onClick: callback() }
      */
    secondaryActions: PropTypes.arrayOf(PropTypes.shape({
      content: PropTypes.node.isRequired
    })),

    /**
      * The back link action
      */
    breadcrumbAction: PropTypes.shape({
      content: PropTypes.node.isRequired
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
      subtitle,
      primaryAction,
      primaryArea,
      secondaryActions,
      breadcrumbAction,
      empty,
      children
    } = this.props;

    const { show, content, ...emptyOptions } = empty;
    let subtitleMarkup = null;
    let primaryActionMarkup = null;

    if (show) {
      return (
        <EmptyState
          title={title}
          primaryAction={primaryAction}
          {...emptyOptions}>
          {content}
        </EmptyState>
      );
    }

    if (primaryAction) {
      primaryActionMarkup = buttonFrom(primaryAction, { size: 'large', ...(!primaryAction.color ? { color: 'blue' } : {}) });
    }

    if (primaryArea) {
      primaryActionMarkup = primaryArea;
    }

    const secondaryActionsMarkup = secondaryActions
      ? filterByVisible(secondaryActions).map((action, i) => linkFrom({ ...action, className: styles.SecondaryAction }, i))
      : null;

    const breadcrumbMarkup = breadcrumbAction
      ? <div><Breadcrumb {...breadcrumbAction} className={styles.Breadcrumb}/></div>
      : null;

    const titleMarkup = title ? <h1 className={styles.Title}>{title}</h1> : null;

    if (subtitle) {
      subtitleMarkup = typeof subtitle === 'string' ? <h2 className={styles.Subtitle}>{subtitle}</h2> : <div className={styles.SubtitleNode}>{subtitle}</div>;
    }

    return (
      <div>
        <div className={styles.Page}>
          {breadcrumbMarkup}
          <div className={styles.MainContent}>
            {titleMarkup}
            {subtitleMarkup}
            <div className={styles.PrimaryAction}>
              {primaryActionMarkup}
            </div>
          </div>
          <div className={styles.SecondaryActions}>
            {secondaryActionsMarkup}
          </div>
        </div>
        {children}
      </div>
    );
  }
}

export default Page;
