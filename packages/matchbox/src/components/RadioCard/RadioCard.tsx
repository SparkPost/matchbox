import React from 'react';
import { RadioButtonChecked, RadioButtonUnchecked } from '@sparkpost/matchbox-icons';
import { Box } from '../Box';
import Group from './Group';
import { StyledLabel, StyledInput, StyledUnchecked, StyledChecked, StyledHeader } from './styles';

export type RadioCardProps = {
  'data-id'?: string;
  'data-track'?: string;
  label?: React.ReactNode;
  weight?: 'light' | 'heavy';
} & Omit<React.ComponentPropsWithoutRef<'input'>, 'type'>;

const RadioCard = React.forwardRef<HTMLInputElement, RadioCardProps>(function RadioCard(
  props,
  userRef,
) {
  const {
    id,
    checked,
    children,
    defaultChecked,
    disabled,
    label,
    name,
    onChange,
    onFocus,
    onBlur,
    value,
    weight = 'light',
    'data-id': dataId,
    'data-track': dataTrack,
    ...rest
  } = props;

  const fontSize = weight === 'heavy' ? '400' : '300';

  return (
    <Box data-id="radio-card">
      <StyledInput
        checked={checked}
        data-id={dataId}
        data-track={dataTrack}
        disabled={disabled}
        defaultChecked={defaultChecked}
        id={id}
        name={name}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        ref={userRef}
        type="radio"
        value={value}
      />
      <StyledLabel as="label" htmlFor={id}>
        <Box display="flex">
          <Box flex="0 0 auto" width="400">
            <Box position="absolute" top="500" left="500">
              <StyledUnchecked size="1rem" as={RadioButtonUnchecked} />
              <StyledChecked size="1rem" as={RadioButtonChecked} />
            </Box>
          </Box>
          <Box flex="1" pl="300">
            <StyledHeader
              data-id="radio-card-header"
              fontSize={fontSize}
              lineHeight="400"
              fontWeight="semibold"
            >
              {label}
            </StyledHeader>
          </Box>
        </Box>
        {children && (
          <Box data-id="radio-card-content" pt="200">
            {children}
          </Box>
        )}
      </StyledLabel>
    </Box>
  );
}) as React.ForwardRefExoticComponent<RadioCardProps> & {
  Group: typeof Group;
};

RadioCard.displayName = 'RadioCard';

RadioCard.Group = Group;
export default RadioCard;
