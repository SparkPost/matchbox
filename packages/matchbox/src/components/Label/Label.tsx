import React from 'react';
import { Box } from '../Box';
import { ScreenReaderOnly } from '../ScreenReaderOnly';

type LabelProps = Pick<React.ComponentProps<typeof Box>, 'fontWeight' | 'mb' | 'as'> & {
  /**
   * @deprecated Use children instead
   */
  label?: React.ReactNode;
  children?: React.ReactNode;
  id?: string;
  htmlFor?: string;
  className?: string;
  labelHidden?: boolean;
};

function Label(props: LabelProps): JSX.Element {
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
      <Box as="div" lineHeight="200" fontSize="200">
        {label ? (
          <Box as="span" mr="200">
            {label}
          </Box>
        ) : null}
        {children ? <span>{children}</span> : null}
      </Box>
    </Box>
  );
}

Label.displayName = 'Label';

export default Label;
