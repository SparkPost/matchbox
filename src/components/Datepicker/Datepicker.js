import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import DayPicker, { DateUtils } from 'react-day-picker';

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
          name='ArrowLeft'
          size={21}
          onClick={() => onPreviousClick()}
          className={styles.Prev} />
        <Icon
          name='ArrowRight'
          size={21}
          onClick={() => onNextClick()}
          className={styles.Next} />
      </div>
    )
  }
}

class Datepicker extends Component {
  render() {
    const modifiers = {
      firstSelected: (day) => DateUtils.isSameDay(day, this.props.selectedDays.from),
      lastSelected: (day) => DateUtils.isSameDay(day, this.props.selectedDays.to),
    };
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
      },
    };
    return (
      <DayPicker
        modifiers={modifiers}
        classNames={styles}
        modifiersStyles={modifiersStyles}
        navbarElement={Navbar}
        {...this.props} />
    )
  }
};

export default Datepicker;
