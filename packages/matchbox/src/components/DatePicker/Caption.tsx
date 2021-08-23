import React from 'react';
import { Box } from '../Box';
import { Text } from '../Text';
import { CaptionElementProps } from 'react-day-picker';

function Caption({ classNames, onClick, date, localeUtils }: CaptionElementProps): JSX.Element {
  const month = localeUtils.getMonths()[date.getMonth()];
  const year = date.getFullYear();

  return (
    <Box
      data-id="datepicker-caption"
      className={classNames.caption}
      mx="200"
      onClick={onClick}
      role="heading"
      textAlign="center"
    >
      <Text as="span" fontSize="400" lineHeight="400" fontWeight="semibold">
        {month}
      </Text>{' '}
      <Text as="span" color="gray.700" fontSize="400" lineHeight="400" fontWeight="normal">
        {year}
      </Text>
    </Box>
  );
}

Caption.displayName = 'Caption';
export default Caption;
