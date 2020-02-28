import React from 'react';
import { Box } from '../Box';
import { ScreenReaderOnly } from '../ScreenReaderOnly';

function Label(props) {
  const { label, id, className, children, labelHidden } = props;

  if (labelHidden) {
    return (
      <ScreenReaderOnly>
        <Box as="label" id={id && `${id}Label`} htmlFor={id}>
          {label}
          {children}
        </Box>
      </ScreenReaderOnly>
    );
  }

  return (
    <Box
      display="flex"
      as="label"
      id={id && `${id}Label`}
      htmlFor={id}
      fontWeight="500"
      className={className}
    >
      <Box as="span" pr="200" lineHeight="300">
        {label}
      </Box>
      <Box as="span" pr="200" fontWeight="400" mb="-2px">
        {children}
      </Box>
    </Box>
  );
}

Label.displayName = 'Label';
export default Label;
