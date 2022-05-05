import React from 'react';
import { Label } from '../Label';
import { Error } from '../Error';
import { HelpText } from '../HelpText';
import { Box } from '../Box';
import useInputDescribedBy from '../../hooks/useInputDescribedBy';
import { RadioButtonChecked, RadioButtonUnchecked } from '@sparkpost/matchbox-icons';
import { pick } from '@styled-system/props';
import { omit } from '../../helpers/props';
import { margin, MarginProps } from 'styled-system';
import Group from './Group';
import { Wrapper, StyledLabel, StyledInput, StyledChecked, StyledUnchecked } from './styles';

export type RadioProps = {
  id: string;
  name?: string;
  checked?: boolean;
  label?: React.ReactNode;
  labelHidden?: boolean;
  disabled?: boolean;
  value?: string;
  error?: string;
  onChange?: React.ChangeEventHandler;
  onFocus?: React.FocusEventHandler;
  onBlur?: React.FocusEventHandler;
  helpText?: React.ReactNode;
} & MarginProps &
  Omit<React.ComponentPropsWithRef<'input'>, 'type'>;

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(function Radio(props, userRef) {
  const {
    id,
    name,
    checked,
    label,
    labelHidden,
    disabled,
    error,
    value,
    onChange,
    onFocus,
    onBlur,
    helpText,
    ...rest
  } = props;

  const componentProps = omit(rest, margin.propNames);
  const systemProps = pick(rest);

  const { describedBy, errorId, helpTextId } = useInputDescribedBy({
    id,
    hasHelpText: !!helpText,
    hasError: !!error,
  });

  return (
    <Wrapper {...systemProps}>
      <StyledLabel htmlFor={id} $disabled={disabled}>
        <StyledInput
          aria-invalid={!!error}
          id={id}
          name={name}
          value={value}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          type="radio"
          ref={userRef}
          {...describedBy}
          {...componentProps}
        />
        <Box
          as="span"
          position="relative"
          display="block"
          alignItems="center"
          size="1rem" // Matches height of Label
        >
          <StyledUnchecked $error={error} size="1rem" as={RadioButtonUnchecked} />
          <StyledChecked $error={error} size="1rem" as={RadioButtonChecked} />
        </Box>
        <Box flex="1" pl="200">
          {label && (
            <Label
              as="span" // Outer wrapper already includes a label
              id={id}
              label={label}
              labelHidden={labelHidden}
              fontWeight="400"
              mb="0" // TODO Remove once margin 0 is baked into Label
            />
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
}) as React.ForwardRefExoticComponent<RadioProps> & {
  Group: typeof Group;
};

Radio.displayName = 'Radio';

Radio.Group = Group;

export default Radio;
