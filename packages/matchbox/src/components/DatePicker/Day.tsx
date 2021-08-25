import React from 'react';
import { StyledDay } from './styles';
import { DayModifiers } from 'react-day-picker';

/** Supported modifiers:
 * firstSelected
 * lastSelected
 * inBetween
 * today - provided by react-day-picker
 * disabled - provided by react-day-picker
 * outside - provided by react-day-picker
 * */

function renderDay(date: Date, modifiers: DayModifiers): JSX.Element | '' {
  if (modifiers.outside) {
    return '';
  }

  return (
    <StyledDay
      alignItems="center"
      display="inline-flex"
      fontSize="200"
      height="600"
      justifyContent="center"
      lineHeight="200"
      minWidth="650"
      $modifiers={modifiers}
    >
      {date.getDate()}
    </StyledDay>
  );
}

export default renderDay;
