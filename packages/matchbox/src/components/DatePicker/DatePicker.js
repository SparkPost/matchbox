import React from 'react';
import DayPicker from 'react-day-picker';
import styled from 'styled-components';
import { tokens } from '@sparkpost/design-tokens';
import Navbar from './Navbar';
import Caption from './Caption';
import Weekday from './Weekday';
import renderDay from './Day';

const Wrapper = styled.div`
  .DayPicker-wrapper {
    position: relative;
    padding: 0 ${tokens.spacing_500};
    outline: none;
  }

  .DayPicker-Months {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: row;
  }

  .DayPicker-Month {
    flex: 0 0 auto;
    & + .DayPicker-Month {
      margin-left: ${tokens.spacing_400};
    }
  }

  .DayPicker-WeekdaysRow {
    display: flex;
  }

  .DayPicker-Weekday {
  }

  .DayPicker-Week {
    display: flex;
  }

  .DayPicker-Day {
    flex: 1 0;
    outline: none;
    &:focus {
      box-shadow: 0 0 0 2px ${tokens.color_blue_700};
      z-index: 1;
    }
  }
`;

const DatePicker = React.forwardRef(function DatePicker(props, ref) {
  return (
    <Wrapper ref={ref}>
      <DayPicker
        {...props}
        captionElement={Caption}
        fixedWeeks={false}
        weekdayElement={Weekday}
        renderDay={renderDay}
        navbarElement={Navbar}
        enableOutsideDaysClick={false}
        showOutsideDays={false}
      />
    </Wrapper>
  );
});

DatePicker.displayName = 'DatePicker';
export default DatePicker;
