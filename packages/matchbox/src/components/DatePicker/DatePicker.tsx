import React from 'react';
import DayPicker, { DayPickerProps } from 'react-day-picker';
import styled from 'styled-components';
import { margin, MarginProps } from 'styled-system';
import { pick } from '@styled-system/props';
import { omit } from '../../helpers/props';
import Navbar from './Navbar';
import Caption from './Caption';
import Weekday from './Weekday';
import renderDay from './Day';
import { wrapper } from './styles';

export const Wrapper = styled.div`
  ${margin}
  ${wrapper}
`;

type DatePickerProps = DayPickerProps &
  MarginProps & {
    numberOfMonths?: 1 | 2;
  };

const DatePicker = React.forwardRef<HTMLDivElement, DatePickerProps>(function DatePicker(
  props,
  ref,
) {
  const systemProps = pick(props);
  const componentProps = omit(props, margin.propNames);

  return (
    <Wrapper ref={ref} {...systemProps} data-id="datepicker" numberOfMonths={props.numberOfMonths}>
      <DayPicker
        captionElement={Caption}
        weekdayElement={Weekday}
        renderDay={renderDay}
        navbarElement={Navbar}
        {...componentProps}
      />
    </Wrapper>
  );
});

DatePicker.displayName = 'DatePicker';
DatePicker.defaultProps = {
  fixedWeeks: false,
  enableOutsideDaysClick: false,
  numberOfMonths: 2,
  showOutsideDays: false,
};

export default DatePicker;
