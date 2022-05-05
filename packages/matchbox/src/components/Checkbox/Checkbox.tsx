import React from 'react';
import { Label } from '../Label';
import { Error } from '../Error';
import { Box } from '../Box';
import { Check } from '@sparkpost/matchbox-icons';
import Group from './Group';
import { HelpText } from '../HelpText';
import useInputDescribedBy from '../../hooks/useInputDescribedBy';
import { pick } from '@styled-system/props';
import { omit } from '../../helpers/props';
import { margin } from 'styled-system';
import {
  StyledLabel,
  StyledCheck,
  StyledBox,
  StyledInput,
  StyledIndeterminate,
  Wrapper,
} from './styles';

export type CheckboxProps = {
  id: string;
  checked?: boolean | 'indeterminate';
  defaultChecked?: boolean;
  disabled?: boolean;
  error?: React.ReactNode;
  helpText?: React.ReactNode;
  label?: React.ReactNode;
  labelHidden?: boolean;
  required?: boolean;
  value?: string;
} & Omit<React.ComponentPropsWithRef<'input'>, 'checked'>;

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  props,
  userRef,
) {
  const {
    id,
    checked,
    defaultChecked,
    disabled,
    error,
    helpText,
    label,
    labelHidden,
    value,
    ...rest
  } = props;

  const componentProps = omit(rest, margin.propNames);
  const systemProps = pick(rest);
  const isControlled = checked !== undefined;

  const { describedBy, errorId, helpTextId } = useInputDescribedBy({
    id,
    hasHelpText: !!helpText,
    hasError: !!error,
  });

  const isIndeterminate = typeof checked === 'string' && checked === 'indeterminate';
  const indeterminateAttributes = isIndeterminate
    ? { 'aria-checked': 'mixed', checked: false }
    : { 'aria-checked': checked ? 'true' : 'false', checked: Boolean(checked) };

  return (
    <Wrapper {...systemProps}>
      <StyledLabel htmlFor={id} $disabled={disabled}>
        <StyledInput
          aria-invalid={!!error}
          id={id}
          value={value}
          defaultChecked={defaultChecked}
          disabled={disabled}
          type="checkbox"
          ref={userRef}
          {...(isControlled ? indeterminateAttributes : {})}
          {...describedBy}
          {...componentProps}
        />
        <Box
          as="span"
          position="relative"
          flex="0"
          display="flex"
          alignItems="center"
          height="1.5rem" // Matches height of Label
        >
          <StyledBox
            as="span"
            display="inline-block"
            borderRadius="200"
            size="1rem"
            lineHeight="200"
            $error={!!error}
            $indeterminate={isIndeterminate}
          />
          <StyledCheck position="absolute" width="1rem" height="1rem" as={Check} />
          <StyledIndeterminate
            position="absolute"
            left="100"
            right="100"
            height="2px"
            bg="white"
            borderRadius="200"
            $indeterminate={isIndeterminate}
          />
        </Box>
        <Box flex="1" pl="200">
          {label && (
            <Label
              as="span" // Outer wrapper already includes a label
              id={id}
              labelHidden={labelHidden}
              fontWeight="400"
              mb="0" // TODO Remove once margin 0 is baked into Label
            >
              {label}
            </Label>
          )}
        </Box>
      </StyledLabel>
      {helpText && (
        <HelpText id={helpTextId} ml="500" mt="0">
          {helpText}
        </HelpText>
      )}
      {error && <Error id={errorId} error={error} ml="500" />}
    </Wrapper>
  );
}) as React.ForwardRefExoticComponent<CheckboxProps> & {
  Group: typeof Group;
};

Checkbox.displayName = 'Checkbox';
Checkbox.Group = Group;
export default Checkbox;
