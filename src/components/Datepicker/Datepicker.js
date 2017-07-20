import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import DayPicker from 'react-day-picker';

import { Icon } from '../Icon';
import styles from './Datepicker.module.scss';

class Navbar extends Component {
  render() {
    const {
      showPreviousButton,
      showNextButton,
      onPreviousClick,
      onNextClick
    } = this.props;

    return (
      <div className={styles.Navbar}>
        <Icon
          name='ArrowBack'
          size={21}
          onClick={() => onPreviousClick()}
          className={styles.Prev} />
        <Icon
          name='ArrowForward'
          size={21}
          onClick={() => onNextClick()}
          className={styles.Next} />
      </div>
    )
  }
}

class Datepicker extends Component {
  render() {
    return (
      <DayPicker
        {...this.props}
        classNames={styles}
        navbarElement={Navbar} />
    )
  }
};

export default Datepicker;
