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
  size?: 'small' | 'default';
} & Omit<React.ComponentPropsWithoutRef<'input'>, 'type' | 'size'>;

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
    size,
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
      <StyledLabel as="label" htmlFor={id} $size={size}>
        <Box display="flex">
          <Box flex="0 0 auto" width={size === 'small' ? '200' : '400'}>
            <Box
              position="absolute"
              top={size === 'small' ? '100' : '500'}
              left={size === 'small' ? '200' : '500'}
            >
              <StyledUnchecked size="1rem" as={RadioButtonUnchecked} />
              <StyledChecked size="1rem" as={RadioButtonChecked} />
            </Box>
          </Box>
          <Box flex="1" pl="300">
            <StyledHeader
              data-id="radio-card-header"
              fontSize={size === 'small' ? '200' : fontSize}
              lineHeight={size === 'small' ? '200' : '400'}
              fontWeight={size === 'small' ? 'medium' : 'semibold'}
            >
              {label}
            </StyledHeader>
          </Box>
        </Box>
        {children && (
          <Box
            data-id="radio-card-content"
            pt={size === 'small' ? '0' : '200'}
            pl={size === 'small' ? '450' : '0'}
            fontSize={size === 'small' ? '100' : '300'}
            lineHeight={size === 'small' ? '100' : '300'}
          >
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
