import React from 'react';
import styled from 'styled-components';
import { margin, MarginProps } from 'styled-system';
import { pick } from '@styled-system/props';
import { Box } from '../Box';
import { ErrorLabel } from '../Error';
import { HelpText } from '../HelpText';
import { Inline } from '../Inline';
import { Label } from '../Label';
import { Tag } from '../Tag';
import { identity, noop } from '../../helpers/event';
import { onKey } from '../../helpers/keyEvents';
import { omit } from '../../helpers/props';
import useInputDescribedBy from '../../hooks/useInputDescribedBy';
import { StyledInput, StyledInputWrapper } from './styles';

const StyledWrapper = styled('div')`
  ${margin}
`;

export type ComboBoxTextFieldProps = {
  delimiter?: string;
  error?: string;
  errorInLabel?: boolean;
  helpText?: React.ReactNode;
  id: string;
  itemToString?: (item: any) => string;
  label?: string;
  labelHidden?: boolean;
  removeItem?: (a: React.ReactNode) => void;
  selectedItems?: React.ReactNodeArray;
} & MarginProps &
  React.ComponentPropsWithRef<'input'>;

function ComboBoxTextField(props: ComboBoxTextFieldProps): JSX.Element {
  const {
    autoFocus,
    disabled,
    delimiter,
    children,
    error,
    errorInLabel,
    helpText,
    id,
    itemToString = identity,
    label,
    labelHidden,
    name,
    onChange,
    onFocus,
    onBlur,
    onKeyDown,
    placeholder,
    readOnly,
    removeItem = noop,
    required,
    style,
    selectedItems = [],
    value,
    ...rest
  } = props;

  const inputProps = omit(rest, margin.propNames);
  const systemProps = pick(rest);

  const { describedBy, errorId, helpTextId } = useInputDescribedBy({
    id,
    hasHelpText: !!helpText,
    hasError: !!error,
  });

  // Removes last item with a backspace and and empty input value
  function handleKeyDown(e) {
    if (!value && selectedItems.length) {
      onKey('backspace', () => {
        removeItem(selectedItems[selectedItems.length - 1]);
      })(e);
    }

    if (onKeyDown) {
      onKeyDown(e);
    }
  }

  return (
    <StyledWrapper {...systemProps}>
      {label && (
        <Label id={id} labelHidden={labelHidden}>
          <Box as="span" pr="200">
            {label}
          </Box>
          {required && (
            <Box as="span" pr="200" aria-hidden="true">
              *
            </Box>
          )}
          {error && errorInLabel && (
            <ErrorLabel id={errorId} wrapper="span">
              {error}
            </ErrorLabel>
          )}
        </Label>
      )}
      <StyledInputWrapper $hasError={!!error} $isDisabled={disabled}>
        {selectedItems.length > 0 && (
          <Box display="flex" pl="200" pt="0.375rem">
            <Inline space="100">
              {selectedItems.map((item, i) => {
                return (
                  <span key={i}>
                    <Tag onRemove={!disabled ? () => removeItem(item) : null}>
                      {itemToString(item)}
                    </Tag>
                    {delimiter && i < selectedItems.length - 1 ? (
                      <Box
                        as="span"
                        ml="100"
                        fontWeight="medium"
                        fontStyle="italic"
                        style={{ textTransform: 'uppercase' }}
                      >
                        {delimiter}
                      </Box>
                    ) : null}
                  </span>
                );
              })}
            </Inline>
          </Box>
        )}
        <StyledInput
          {...describedBy}
          autoFocus={autoFocus}
          disabled={disabled}
          id={id}
          name={name}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          readOnly={readOnly}
          required={required}
          style={style}
          type="text"
          value={value}
          {...inputProps}
        />
      </StyledInputWrapper>
      {/* Menu is rendered here so it is positioned correctly before error and helptext */}
      {children}
      {helpText && <HelpText id={helpTextId}>{helpText}</HelpText>}
      {error && !errorInLabel && <ErrorLabel id={errorId}>{error}</ErrorLabel>}
    </StyledWrapper>
  );
}

export default ComboBoxTextField;
