import React from 'react';
import styled from 'styled-components';
import { Box } from '../Box';
import { ScreenReaderOnly } from '../ScreenReaderOnly';
import { Close, Info, CheckCircle, Warning, ErrorIcon } from '@sparkpost/matchbox-icons';
import { margin, MarginProps, MaxWidthProps } from 'styled-system';
import css from '@styled-system/css';
import { base, status, dismiss, dismissStatus } from './styles';
import { buttonReset } from '../../styles/helpers';
import { pick } from '../../helpers/props';

type StyledButtonProps = {
  $status?: 'default' | 'success' | 'danger' | 'warning' | 'error';
};

const StyledBox = styled(Box)<StyledButtonProps>`
  ${base}
  ${status}
  ${margin}
`;

const StyledClose = styled.button<StyledButtonProps>`
  ${buttonReset}
  ${css({
    p: '0.125rem',
    mx: '100',
  })}
  ${dismiss}
  ${dismissStatus}
`;

export type SnackbarProps = {
  'data-id'?: string;
  status?: 'default' | 'success' | 'danger' | 'warning' | 'error';
  onDismiss?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
} & MarginProps &
  MaxWidthProps;

const Snackbar = React.forwardRef<HTMLDivElement, SnackbarProps>(function Snackbar(props, userRef) {
  const {
    children,
    status = 'default',
    maxWidth = 380,
    onDismiss,
    'data-id': dataId,
    ...rest
  } = props;
  const systemProps = pick(rest, margin.propNames);

  return (
    <StyledBox
      $status={status}
      role="alert"
      p="300"
      borderRadius="100"
      ref={userRef}
      tabIndex={-1}
      {...systemProps}
      data-id={dataId}
    >
      <Box mr="300">
        {status === 'default' && <Info size="20" label="Info" />}
        {status === 'success' && <CheckCircle size="20" label="Success" />}
        {status === 'warning' && <Warning size="20" label="Warning" />}
        {(status === 'error' || status === 'danger') && <ErrorIcon size="20" label="Error" />}
      </Box>
      <Box fontSize="200" lineHeight="200" py="100" pr="400" maxWidth={maxWidth} minWidth="12.5rem">
        {children}
      </Box>
      <StyledClose $status={status} onClick={onDismiss} type="button">
        <Close size={24} />
        <ScreenReaderOnly>Close</ScreenReaderOnly>
      </StyledClose>
    </StyledBox>
  );
}) as React.ForwardRefExoticComponent<SnackbarProps>;

Snackbar.displayName = 'Snackbar';

export default Snackbar;
