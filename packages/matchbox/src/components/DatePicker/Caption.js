import React from 'react';
import { Box } from '../Box';
import { Text } from '../Text';

function Caption({ classNames = {}, onClick, date, localeUtils = {} }) {
  const month = localeUtils.getMonths()[date.getMonth()];
  const year = date.getFullYear();

  return (
    <Box mx="200" role="heading" onClick={onClick} className={classNames.caption}>
      <Text as="span" fontSize="400" lineHeight="400" fontWeight="semibold">
        {month}
      </Text>{' '}
      <Text as="span" color="gray.700" fontSize="400" lineHeight="400" fontWeight="normal">
        {year}
      </Text>
    </Box>
  );
}

export default Caption;
