import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Button, buttonFrom } from '../Button';
import { Icon } from '../Icon';
import styles from './Pagination.module.scss';

const Pagination = ({
  hasPrevious,
  hasNext,
  onPrevious,
  onNext,
  pages
}) => {

  const createPages = () => (
    pages.map(({ page, selected, onSelect }) => (
      buttonFrom({
        content: page,
        className: selected && styles.Selected,
        onClick: onSelect
      })
    ))
  );

  const pageMarkup = pages
    ? <span className={styles.Pages}>{ createPages() }</span>
    : null;

  return (
    <div className={styles.Pagination}>
      <Button
        className={styles.Button}
        onClick={onPrevious}
        disabled={!hasPrevious} >
        <Icon name='ArrowBack' size={16} />
      </Button>
      { pageMarkup }
      <Button
        className={styles.Button}
        onClick={onNext}
        disabled={!hasNext} >
        <Icon name='ArrowForward' size={16} />
      </Button>
    </div>
  );
};

Pagination.propTypes = {
  hasPrevious: PropTypes.bool,
  hasNext: PropTypes.bool,
  onPrevious: PropTypes.func,
  onNext: PropTypes.func,
  pages: PropTypes.arrayOf(PropTypes.shape({
    page: PropTypes.number.isRequired,
    onSelect: PropTypes.func.isRequired,
    selected: PropTypes.bool
  })),
};

export default Pagination;
