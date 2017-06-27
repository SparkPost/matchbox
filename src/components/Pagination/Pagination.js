import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Button, buttonsFrom } from '../Button';
import { Icon } from '../Icon';
import styles from './Pagination.module.scss';

class Pagination extends Component {
  static propTypes = {
    pages: PropTypes.number.isRequired,
    pageRange: PropTypes.number.isRequired,
    onChange: PropTypes.func,
    initialIndex: PropTypes.number.isRequired
  };

  static defaultProps = {
    initialIndex: 0
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
    this.handlePageChange(this.props.initialIndex);
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
    let buttons = [];

    for (let index = start; index < end; index++) {
      buttons.push({
        content: `${index + 1}`,
        onClick: this.handlePageChange.bind(this, index),
        className: index === this.state.index && styles.Selected
      });
    }

    return buttonsFrom(buttons);
  }

  render() {
    const {
      pages,
      pageRange,
      onChange
    } = this.props;

    const {
      hasPrevious,
      hasNext
    } = this.state;

    const buttonMarkup = () => {
      if (pages <= pageRange) {
        return this._createButtons(0, pages);
      } else {
        const half = Math.floor(pageRange / 2);
        let start = 0

        if (this.state.index > half) {
          start = this.state.index - half;
        }

        if (this.state.index + half + 1 > pages) {
          start = pages - pageRange;
        }

        return this._createButtons(start, start + pageRange);
      }
    };

    return (
      <div className={styles.Pagination}>
        <Button
          className={styles.Button}
          onClick={() => this.handlePrevious()}
          disabled={!hasPrevious} >
          <Icon name='ArrowBack' size={16} />
        </Button>
        <span className={styles.Pages}>{ buttonMarkup() }</span>
        <Button
          className={styles.Button}
          onClick={() => this.handleNext()}
          disabled={!hasNext} >
          <Icon name='ArrowForward' size={16} />
        </Button>
      </div>
    );
  }
};

export default Pagination;
