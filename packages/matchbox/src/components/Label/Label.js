import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';
import { ScreenReaderOnly } from '../ScreenReaderOnly';
import { Inline } from '../Inline';
import { deprecate } from '../../helpers/propTypes';

function Label(props) {
  const {
    label,
    id,
    htmlFor,
    className,
    children,
    labelHidden,
    as = 'label',
    fontWeight = '500',
    mb = '100',
  } = props;

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
      id={id && !htmlFor ? `${id}Label` : id}
      htmlFor={htmlFor ? htmlFor : id}
      fontWeight={fontWeight}
      className={className}
      mb={mb}
    >
      <Box as="span" lineHeight="200" fontSize="200">
        <Inline space="200">
          {label ? <span>{label}</span> : null}
          {children ? <span>{children}</span> : null}
        </Inline>
      </Box>
    </Box>
  );
}

Label.displayName = 'Label';
Label.propTypes = {
  label: deprecate(PropTypes.string, 'Use the children instead'),
  children: PropTypes.node,
  id: PropTypes.string.isRequired,
  htmlFor: PropTypes.string,
};

export default Label;
