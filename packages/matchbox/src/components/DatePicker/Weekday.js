import React from 'react';
import { Box } from '../Box';
import { Text } from '../Text';

const shortDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function Weekday({ className, weekday, localeUtils = {} }) {
  return (
    <Box
      flex="1 0 0"
      minWidth="40px"
      textAlign="center"
      role="columnheader"
      className={className}
      py="300"
    >
      <Text
        as="abbr"
        color="gray.800"
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

export default Weekday;
