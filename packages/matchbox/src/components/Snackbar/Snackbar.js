import React from 'react';
import styled from 'styled-components';
import { Box } from '../';
import { ScreenReaderOnly } from '../ScreenReaderOnly';

import PropTypes from 'prop-types';
import { Close, Info, CheckCircle, Warning, ErrorIcon } from '@sparkpost/matchbox-icons';
import { base, status, dismiss, dismissStatus } from './styles';

const StyledBox = styled(Box)`
  ${base}
  ${status}
`;

const StyledClose = styled(Box)`
  ${dismiss}
  ${dismissStatus}
`;

function Snackbar(props) {
  const { children, status, maxWidth, onDismiss, ...rest } = props;

  return (
    <StyledBox status={status} role="alert" p="300" borderRadius="100" {...rest}>
      <Box mr="300">
        {status === 'default' && <Info size="20" label="Info" />}
        {status === 'success' && <CheckCircle size="20" label="Success" />}
        {status === 'warning' && <Warning size="20" label="Warning" />}
        {(status === 'error' || status === 'danger') && <ErrorIcon size="20" label="Error" />}
      </Box>
      <Box fontSize="200" lineHeight="200" py="100" pr="400" maxWidth={maxWidth} minWidth="12.5rem">
        {children}
      </Box>
      <StyledClose status={status} as="button" p="0.125rem" mx="100" onClick={onDismiss}>
        <Close size={24} />
        <ScreenReaderOnly>Close</ScreenReaderOnly>
      </StyledClose>
    </StyledBox>
  );
}

Snackbar.displayName = 'Snackbar';
Snackbar.defaultProps = {
  status: 'default',
  maxWidth: '380',
};
Snackbar.propTypes = {
  /**
   * The type of snackbar.
   */
  status: PropTypes.oneOf(['default', 'success', 'danger', 'error', 'warning']),

  /**
   * Snackbar max-width in pixels.
   */
  maxWidth: PropTypes.number,

  /**
   * Callback when dismiss button is clicked.
   */
  onDismiss: PropTypes.func.isRequired,

  /**
   * Snackbar Content
   */
  children: PropTypes.node,
};

export default Snackbar;
