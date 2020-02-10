import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Button, buttonsFrom } from '../Button';
import { Pager } from '../Pager';
import { MoreHoriz } from '@sparkpost/matchbox-icons';
import styles from './Pagination.module.scss';

class Pagination extends Component {
  static displayName = 'Pagination';

  static propTypes = {
    /**
     * Sets the current page number
     */
    currentPage: PropTypes.number,

    /**
     * The total number of pages
     */
    pages: PropTypes.number.isRequired,

    /**
     * The number of page buttons to display. Odd numbers look better.
     */
    pageRange: PropTypes.number.isRequired,

    /**
     * Callback when page is changed. Index passed as argument.
     */
    onChange: PropTypes.func,

    /**
     * Hides first and last buttons
     */
    marginsHidden: PropTypes.bool,

    /**
     * Flat style buttons
     */
    flat: PropTypes.bool,

    /**
     * Selected page color
     */
    selectedColor: PropTypes.oneOf(['orange', 'blue', 'navy', 'purple', 'red']),
  };

  static defaultProps = {
    currentPage: 1,
    selectedColor: 'orange',
  };

  state = {
    index: 0,
    hasPrevious: false,
    hasNext: true,
  };

  componentDidMount() {
    this.handlePageChange(this.props.currentPage - 1);
  }

  componentDidUpdate(prevProps) {
    const { pages, pageRange, currentPage } = this.props;
    if (
      pages !== prevProps.pages ||
      pageRange !== prevProps.pageRange ||
      currentPage !== prevProps.currentPage
    ) {
      this.handlePageChange(currentPage - 1);
    }
  }

  handlePageChange(index) {
    this.setState({
      index,
      hasPrevious: index > 0,
      hasNext: index < this.props.pages - 1,
    });

    this.props.onChange && this.props.onChange(index);
  }

  handleNext = () => {
    this.handlePageChange(this.state.index + 1);
  };

  handlePrevious = () => {
    this.handlePageChange(this.state.index - 1);
  };

  _createButtons(start, end) {
    const buttons = [];

    for (let index = start; index < end; index++) {
      buttons.push({
        content: `${index + 1}`,
        onClick: this.handlePageChange.bind(this, index),
        flat: this.props.flat,
        className: classnames(
          styles.Page,
          index === this.state.index && styles.Selected,
          index === this.state.index && styles[`color-${this.props.selectedColor}`],
        ),
      });
    }

    return buttonsFrom(buttons);
  }

  _getStart() {
    const { pages, pageRange } = this.props;
    const { index } = this.state;

    let start = 0;
    const half = Math.floor(pageRange / 2);

    if (index > half) {
      start = index - half;
    }

    if (index + half + 1 > pages) {
      start = pages - pageRange;
    }

    return start;
  }

  render() {
    const { pages, pageRange, marginsHidden, flat, className } = this.props;

    const { hasPrevious, hasNext } = this.state;

    const start = this._getStart();

    const buttonMarkup = () => {
      if (pages <= pageRange) {
        return this._createButtons(0, pages);
      } else {
        return this._createButtons(start, start + pageRange);
      }
    };

    const firstButton =
      !marginsHidden && start > 1 ? (
        <span>
          <Button flat={flat} className={styles.Start} onClick={() => this.handlePageChange(0)}>
            1
          </Button>
          <MoreHoriz className={styles.Ellipse} style={{ marginTop: '-0.2em' }} />
        </span>
      ) : null;

    const lastButton =
      !marginsHidden && start + pageRange < pages ? (
        <span>
          <MoreHoriz className={styles.Ellipse} style={{ marginTop: '-0.2em' }} />
          <Button
            flat={flat}
            className={styles.End}
            onClick={() => this.handlePageChange(pages - 1)}
          >
            {pages}
          </Button>
        </span>
      ) : null;

    return (
      <div className={classnames(styles.Pagination, className)}>
        <Pager.Previous flat={flat} onClick={this.handlePrevious} disabled={!hasPrevious} />
        {firstButton}
        <span className={styles.Pages}>{buttonMarkup()}</span>
        {lastButton}
        <Pager.Next flat={flat} onClick={this.handleNext} disabled={!hasNext} />
      </div>
    );
  }
}

export default Pagination;
