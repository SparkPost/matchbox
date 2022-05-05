import React from 'react';
import { tokens } from '@sparkpost/design-tokens';
import { Label } from '../Label';
import { ErrorLabel } from '../Error';
import { KeyboardArrowDown } from '@sparkpost/matchbox-icons';
import styled from 'styled-components';
import { select, chevron } from './styles';
import { Box, BoxProps } from '../Box';
import { OptionalLabel } from '../OptionalLabel';
import { HelpText } from '../HelpText';
import { compose, margin, MarginProps, maxWidth, MaxWidthProps } from 'styled-system';
import { omit } from '@styled-system/props';
import { pick } from '../../helpers/props';
import useInputDescribedBy from '../../hooks/useInputDescribedBy';
import { focusOutline } from '../../styles/helpers';
import Options from './Options';
import { SelectOptionProps } from './Option';

const StyledInputWrapper = styled(Box)<BoxProps>`
  ${focusOutline({ modifier: '&:focus-within', offset: '2px' })}
`;

const StyledInput = styled(Box)<BoxProps>`
  outline: none;
`;

type SelectBoxProps = {
  hasError?: boolean;
  disabled?: boolean;
};

const SelectBox = React.forwardRef<HTMLSelectElement, SelectBoxProps>(function SelectBox(
  props,
  userRef,
) {
  const { hasError, disabled, ...rest } = props;
  return (
    <StyledInputWrapper>
      <StyledInput
        aria-invalid={!!hasError}
        as="select"
        disabled={disabled}
        width="100%"
        border={hasError ? `1px solid ${tokens.color_red_700}` : '400'}
        borderRadius="100"
        bg={disabled ? 'gray.200' : 'white'}
        pl="400"
        pr="600"
        lineHeight="2.5rem"
        height="2.5rem"
        color="gray.900"
        {...rest}
        ref={userRef}
      />
    </StyledInputWrapper>
  );
});

const system = compose(margin, maxWidth);

const StyledSelect = styled(SelectBox)`
  ${select}
`;

const StyledChevron = styled(KeyboardArrowDown)<{ size?: number; $disabled?: boolean }>`
  ${chevron}
`;

const StyledWrapper = styled('div')`
  ${system}
`;

export type SelectProps = {
  options: SelectOptionProps[];
  label?: string;
  labelHidden?: boolean;
  helpText?: React.ReactNode;
  error?: string;
  errorInLabel?: boolean;
  optional?: boolean;
  placeholderValue?: string;
} & MarginProps &
  MaxWidthProps &
  React.ComponentPropsWithRef<'select'>;

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(function Select(props, userRef) {
  const {
    id,
    options,
    label,
    helpText,
    placeholder,
    placeholderValue,
    disabled,
    required,
    error,
    errorInLabel,
    optional,
    labelHidden,
    ...rest
  } = props;
  const systemProps = pick(rest, system.propNames);
  const componentProps = omit(rest);
  const { describedBy, errorId, helpTextId } = useInputDescribedBy({
    id,
    hasHelpText: !!helpText,
    hasError: !!error,
  });

  const labelMarkup = label && (
    <Label id={id} labelHidden={labelHidden}>
      <Box as="span" pr="200">
        {label}
      </Box>
      {error && errorInLabel && (
        <ErrorLabel id={errorId} wrapper="span">
          {error}
        </ErrorLabel>
      )}
      {optional && <OptionalLabel float />}
    </Label>
  );

  const helpMarkup = helpText ? <HelpText id={helpTextId}>{helpText}</HelpText> : null;

  return (
    <StyledWrapper {...systemProps}>
      {labelMarkup}
      <Box position="relative">
        <StyledSelect
          id={id}
          disabled={disabled}
          required={required}
          hasError={!!error}
          {...componentProps}
          {...describedBy}
          ref={userRef}
        >
          <Options
            options={options}
            placeholder={placeholder}
            placeholderValue={placeholderValue}
          />
        </StyledSelect>
        <StyledChevron size={24} $disabled={disabled} />
      </Box>
      {helpMarkup}
      {error && !errorInLabel && <ErrorLabel id={errorId}>{error}</ErrorLabel>}
    </StyledWrapper>
  );
});

Select.displayName = 'Select';

export default Select;
