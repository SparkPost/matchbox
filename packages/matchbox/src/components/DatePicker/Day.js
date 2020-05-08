import React from 'react';
import { StyledDay } from './styles';

/** Supported modifiers:
 * firstSelected
 * lastSelected
 * inBetween
 * today - provided by react-day-picker
 * disabled - provided by react-day-picker
 * outside - provided by react-day-picker
 * */

function renderDay(date, modifiers = {}) {
  return (
    <StyledDay
      alignItems="center"
      display="inline-flex"
      fontSize="200"
      height="600"
      justifyContent="center"
      lineHeight="200"
      minWidth="650"
      modifiers={modifiers}
    >
      {date.getDate()}
    </StyledDay>
  );
}

export default renderDay;
