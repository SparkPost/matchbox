import React from 'react';
import { ErrorIcon } from '@sparkpost/matchbox-icons';
import { Box } from '../Box';

type ErrorLabelProps = Pick<React.ComponentProps<typeof Box>, 'ml'> & {
  id?: string;
  className?: string;
  /**
   * @deprecated Use children instead
   */
  error?: React.ReactNode;
  children?: React.ReactNode;
  wrapper?: 'div' | 'span';
};

function ErrorLabel(props: ErrorLabelProps): JSX.Element {
  const { className, children, error, wrapper: WrapperComponent = 'div', id, ml = '0' } = props;

  return (
    <Box id={id} as={WrapperComponent} className={className} ml={ml} data-id="error-message">
      <Box
        as="span"
        color="red.700"
        fontSize="200"
        lineHeight="200"
        display="inline-flex"
        alignItems="flex-start"
      >
        <Box as="span" display="inline-block" mr="100" pt="2px" lineHeight="0">
          <ErrorIcon size={14} label="Error" />
        </Box>
        <span>
          {error}
          {children}
        </span>
      </Box>
    </Box>
  );
}

ErrorLabel.displayName = 'Error';
export default ErrorLabel;
