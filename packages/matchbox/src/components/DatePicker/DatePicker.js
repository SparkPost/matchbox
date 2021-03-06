import React from 'react';
import PropTypes from 'prop-types';
import DayPicker from 'react-day-picker';
import styled from 'styled-components';
import { margin } from 'styled-system';
import { createPropTypes } from '@styled-system/prop-types';
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

const DatePicker = React.forwardRef(function DatePicker(props, ref) {
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

DatePicker.propTypes = {
  ...DayPicker.propTypes,
  numberOfMonths: PropTypes.oneOf([1, 2]),
  ...createPropTypes(margin.propNames),
};

DatePicker.defaultProps = {
  fixedWeeks: false,
  enableOutsideDaysClick: false,
  numberOfMonths: 2,
  showOutsideDays: false,
};

export default DatePicker;
