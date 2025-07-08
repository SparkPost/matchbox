import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { DatePicker, useBreakpoint } from '@sparkpost/matchbox';

// @example
//   const breakpoint = useBreakpoint();
//   const months = React.useMemo(() => {
//     return ['default', 'xs', 'sm'].includes(breakpoint) ? 1 : 2;
//   }, [breakpoint]);
//   const to = new Date();
//   const from = new Date(new Date().setDate(new Date().getDate() - 15));
//   const initial = ['default', 'xs', 'sm'].includes(breakpoint)
//     ? new Date()
//     : new Date(new Date().setDate(new Date().getDate() - 30));
//   const selectedDays = {
//     to,
//     from,
//   };
//   const modifiers = {
//     firstSelected: day => {
//       return DateUtils.isSameDay(day, selectedDays.from);
//     },
//     lastSelected: day => DateUtils.isSameDay(day, selectedDays.to),
//     inBetween: day => DateUtils.isDayBetween(day, selectedDays.from, selectedDays.to),
//   };
//   return (
//     <DatePicker
//       modifiers={modifiers}
//       initialMonth={initial}
//       numberOfMonths={months}
//       disabledDays={{ after: new Date() }}
//       toMonth={new Date()}
//       selectedDays={selectedDays}
//       onDayClick={d => console.log('click', d)}
//       m="400"
//     />
//   );

const to = new Date();
const from = new Date(new Date().setDate(new Date().getDate() - 15));

const isSameDay = (a: Date, b: Date): boolean => {
  return a?.toDateString() === b?.toDateString();
};

const selectedDays = {
  to,
  from,
};

const modifiers = {
  firstSelected: (day) => {
    return isSameDay(day, selectedDays.from);
  },
  lastSelected: (day) => isSameDay(day, selectedDays.to),
  inBetween: (day) => selectedDays.from && selectedDays.to && day > selectedDays.from && day < selectedDays.to,
};

describe('DatePicker', () => {
  add('basic usage', () => {
    const breakpoint = useBreakpoint();

    const months = React.useMemo(() => {
      return ['default', 'xs', 'sm'].includes(breakpoint) ? 1 : 2;
    }, [breakpoint]);

    const initial = ['default', 'xs', 'sm'].includes(breakpoint)
      ? new Date()
      : new Date(new Date().setDate(new Date().getDate() - 30));

    return (
      <DatePicker
        modifiers={modifiers}
        initialMonth={initial}
        numberOfMonths={months}
        disabledDays={{ after: new Date() }}
        toMonth={new Date()}
        selectedDays={selectedDays}
        onDayClick={(d) => console.log('click', d)}
        m="400"
      />
    );
  });
});
