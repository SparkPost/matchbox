import React from 'react';
import PropTypes from 'prop-types';
import DayPicker from 'react-day-picker';
import styled from 'styled-components';
import { margin } from 'styled-system';
import { createPropTypes } from '@styled-system/prop-types';
import { pick } from '@styled-system/props';
import { omit } from '../../helpers/systemProps';
import useBreakpoints from '../../hooks/useBreakpoints';
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
  const breakpoints = useBreakpoints();

  const monthNum = React.useMemo(() => {
    return !breakpoints.md ? 1 : 2;
  }, [breakpoints]);

  return (
    <Wrapper
      ref={ref}
      {...systemProps}
      data-id="datepicker"
      numberOfMonths={props.numberOfMonths || monthNum}
    >
      <DayPicker
        captionElement={Caption}
        weekdayElement={Weekday}
        renderDay={renderDay}
        navbarElement={Navbar}
        {...componentProps}
        numberOfMonths={props.numberOfMonths || monthNum}
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
  showOutsideDays: false,
};

export default DatePicker;
