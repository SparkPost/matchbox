import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { DatePicker } from '@sparkpost/matchbox';
import { DateUtils } from 'react-day-picker';

export default {
  title: 'Form|DatePicker',
};

const to = new Date();
let from = new Date(new Date().setDate(new Date().getDate() - 15));
const initial = new Date(new Date().setDate(new Date().getDate() - 30));
const selectedDays = {
  to,
  from,
};

const modifiers = selectedDays
  ? {
      firstSelected: day => {
        return DateUtils.isSameDay(day, selectedDays.from);
      },
      lastSelected: day => DateUtils.isSameDay(day, selectedDays.to),
      inBetween: day => DateUtils.isDayBetween(day, selectedDays.from, selectedDays.to),
    }
  : {};
export const BasicDatepicker = withInfo()(() => (
  <DatePicker
    modifiers={modifiers}
    numberOfMonths={2}
    initialMonth={initial}
    disabledDays={{ after: new Date() }}
    toMonth={new Date()}
    selectedDays={selectedDays}
  />
));
