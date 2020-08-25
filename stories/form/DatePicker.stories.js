import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { DatePicker, useBreakpoints } from '@sparkpost/matchbox';
import { DateUtils } from 'react-day-picker';

export default {
  title: 'Form|DatePicker',
};

const to = new Date();
const from = new Date(new Date().setDate(new Date().getDate() - 15));

const selectedDays = {
  to,
  from,
};

const modifiers = {
  firstSelected: day => {
    return DateUtils.isSameDay(day, selectedDays.from);
  },
  lastSelected: day => DateUtils.isSameDay(day, selectedDays.to),
  inBetween: day => DateUtils.isDayBetween(day, selectedDays.from, selectedDays.to),
};

export const BasicDatepicker = withInfo({
  propTables: [DatePicker],
  source: false,
  text: `
  ~~~jsx
  const breakpoints = useBreakpoints(500);

  const months = React.useMemo(() => {
    return breakpoints.md ? 2 : 1;
  }, [breakpoints]);

  const to = new Date();
  const from = new Date(new Date().setDate(new Date().getDate() - 15));
  const initial = breakpoints.md
    ? new Date(new Date().setDate(new Date().getDate() - 30))
    : new Date();

  const selectedDays = {
    to,
    from,
  };

  const modifiers = {
    firstSelected: day => {
      return DateUtils.isSameDay(day, selectedDays.from);
    },
    lastSelected: day => DateUtils.isSameDay(day, selectedDays.to),
    inBetween: day => DateUtils.isDayBetween(day, selectedDays.from, selectedDays.to),
  };

  return (
    <DatePicker
      modifiers={modifiers}
      initialMonth={initial}
      numberOfMonths={months}
      disabledDays={{ after: new Date() }}
      toMonth={new Date()}
      selectedDays={selectedDays}
      onDayClick={d => console.log('click', d)}
      m="400"
    />
  );
  ~~~
`,
})(() => {
  const breakpoints = useBreakpoints(500);
  console.log(breakpoints);
  const months = React.useMemo(() => {
    return breakpoints.md ? 2 : 1;
  }, [breakpoints]);

  const initial = breakpoints.md
    ? new Date(new Date().setDate(new Date().getDate() - 30))
    : new Date();

  return (
    <DatePicker
      modifiers={modifiers}
      initialMonth={initial}
      numberOfMonths={months}
      disabledDays={{ after: new Date() }}
      toMonth={new Date()}
      selectedDays={selectedDays}
      onDayClick={d => console.log('click', d)}
      m="400"
    />
  );
});
