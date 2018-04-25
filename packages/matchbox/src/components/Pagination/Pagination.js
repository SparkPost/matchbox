import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Button, buttonsFrom } from '../Button';
import { MoreHoriz, ArrowBack, ArrowForward } from '@sparkpost/matchbox-icons';
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
    marginsHidden: PropTypes.bool
  };

  static defaultProps = {
    currentPage: 1
  };

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      hasPrevious: false,
      hasNext: true
    };
  }

  componentWillMount() {
    this.handlePageChange(this.props.currentPage - 1);
  }

  componentWillReceiveProps(nextProps) {
    const { pages, pageRange, currentPage } = this.props;
    if (pages !== nextProps.pages || pageRange !== nextProps.pageRange || currentPage !== nextProps.currentPage) {
      this.handlePageChange(nextProps.currentPage - 1);
    }
  }

  handlePageChange(index) {
    this.setState({
      index,
      hasPrevious: index > 0,
      hasNext: index < this.props.pages - 1
    });

    this.props.onChange && this.props.onChange(index);
  }

  handleNext() {
    this.handlePageChange(this.state.index + 1);
  }

  handlePrevious() {
    this.handlePageChange(this.state.index - 1);
  }

  _createButtons(start, end) {
    const buttons = [];

    for (let index = start; index < end; index++) {
      buttons.push({
        content: `${index + 1}`,
        onClick: this.handlePageChange.bind(this, index),
        className: classnames(styles.Page, index === this.state.index && styles.Selected)
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
    const {
      pages,
      pageRange,
      marginsHidden
    } = this.props;

    const {
      hasPrevious,
      hasNext
    } = this.state;

    const start = this._getStart();

    const buttonMarkup = () => {
      if (pages <= pageRange) {
        return this._createButtons(0, pages);
      } else {
        return this._createButtons(start, start + pageRange);
      }
    };

    const firstButton = !marginsHidden && start > 1
      ? <span>
        <Button
          className={styles.Start}
          onClick={() => this.handlePageChange(0)} >
            1
        </Button>
        <MoreHoriz className={styles.Ellipse}/>
      </span>
      : null;

    const lastButton = !marginsHidden && start + pageRange < pages
      ? <span>
        <MoreHoriz className={styles.Ellipse}/>
        <Button
          className={styles.End}
          onClick={() => this.handlePageChange(pages - 1)} >
          { pages }
        </Button>
      </span>
      : null;

    return (
      <div className={styles.Pagination}>
        <Button
          className={styles.Back}
          onClick={() => this.handlePrevious()}
          disabled={!hasPrevious} >
          <ArrowBack size={16} />
        </Button>
        { firstButton }
        <span className={styles.Pages}>{ buttonMarkup() }</span>
        { lastButton }
        <Button
          className={styles.Next}
          onClick={() => this.handleNext()}
          disabled={!hasNext} >
          <ArrowForward size={16} />
        </Button>
      </div>
    );
  }
}

export default Pagination;
