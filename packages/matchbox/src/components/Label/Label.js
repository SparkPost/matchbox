import React from 'react';
import { Box } from '../Box';
import { ScreenReaderOnly } from '../ScreenReaderOnly';

function Label(props) {
  const {
    label,
    id,
    className,
    children,
    labelHidden,
    as = 'label',
    fontWeight = '500',
    mb = '100',
  } = props;

  if (!label) {
    return null;
  }

  if (labelHidden) {
    return (
      <ScreenReaderOnly>
        <Box as={as} id={id && `${id}Label`} htmlFor={id}>
          {label}
          {children}
        </Box>
      </ScreenReaderOnly>
    );
  }

  return (
    <Box
      display="block"
      as={as}
      id={id && `${id}Label`}
      htmlFor={id}
      fontWeight={fontWeight}
      className={className}
      mb={mb}
    >
      <Box as="span" pr="200" lineHeight="200" fontSize="200">
        {label}
      </Box>
      {/* Certain form components append <Error /> or requred indicators here */}
      <span>{children}</span>
    </Box>
  );
}

Label.displayName = 'Label';
export default Label;
