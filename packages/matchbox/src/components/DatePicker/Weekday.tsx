import React from 'react';
import { Box } from '../Box';
import { Text } from '../Text';
import { WeekdayElementProps } from 'react-day-picker';

const shortDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function Weekday({ className, weekday, localeUtils }: WeekdayElementProps): JSX.Element {
  return (
    <Box
      flex="1 0 0"
      minWidth="650"
      textAlign="center"
      role="columnheader"
      className={className}
      py="300"
    >
      <Text
        as="abbr"
        title={localeUtils.formatWeekdayLong(weekday)}
        fontWeight="medium"
        fontSize="200"
        lineHeight="200"
        color="gray.700"
        textAlign="center"
        style={{ textDecoration: 'none' }}
      >
        {shortDays[weekday]}
      </Text>
    </Box>
  );
}

Weekday.displayName = 'Weekday';
export default Weekday;
