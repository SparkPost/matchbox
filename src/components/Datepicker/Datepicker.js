import React, { Component } from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';

import ArrowForward from '../../icons/ArrowForward';
import ArrowBack from '../../icons/ArrowBack';
import styles from './Datepicker.module.scss';

class Navbar extends Component {
  render() {
    const {
      // showPreviousButton,
      // showNextButton,
      onPreviousClick,
      onNextClick
    } = this.props;

    return (
      <div className={styles.Navbar}>
        <ArrowBack
          size={21}
          onClick={() => onPreviousClick()}
          className={styles.Prev} />
        <ArrowForward
          size={21}
          onClick={() => onNextClick()}
          className={styles.Next} />
      </div>
    );
  }
}

class Datepicker extends Component {
  static displayName = 'Datepicker';

  render() {
    const { selectedDays } = this.props;

    const modifiers = selectedDays
      ? {
        firstSelected: (day) => DateUtils.isSameDay(day, selectedDays.from),
        lastSelected: (day) => DateUtils.isSameDay(day, selectedDays.to)
      }
      : {};

    const modifiersStyles = {
      firstSelected: {
        color: 'white',
        backgroundColor: '#2693c3',
        borderTopLeftRadius: '4px',
        borderBottomLeftRadius: '4px'
      },
      lastSelected: {
        color: 'white',
        backgroundColor: '#2693c3',
        borderTopRightRadius: '4px',
        borderBottomRightRadius: '4px'
      }
    };
    return (
      <DayPicker
        modifiers={modifiers}
        classNames={styles}
        modifiersStyles={modifiersStyles}
        navbarElement={Navbar}
        {...this.props} />
    );
  }
}

export default Datepicker;
