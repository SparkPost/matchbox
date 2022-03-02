import React from 'react';
import { RadioButtonChecked, RadioButtonUnchecked } from '@sparkpost/matchbox-icons';
import { Box } from '../Box';
import Group from './Group';
import { StyledLabel, StyledInput, StyledUnchecked, StyledChecked, StyledHeader } from './styles';

export type RadioCardProps = {
  'data-id'?: string;
  'data-track'?: string;
  label?: React.ReactNode;
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
    size = 'default',
    value,
    'data-id': dataId,
    'data-track': dataTrack,
    ...rest
  } = props;

  const isSmall = size === 'small';

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
        {...rest}
      />
      <StyledLabel as="label" htmlFor={id} $size={size}>
        <Box display="flex">
          <Box flex="0 0 auto" width={isSmall ? '200' : '400'}>
            <Box position="absolute" top={isSmall ? '100' : '500'} left={isSmall ? '200' : '500'}>
              <StyledUnchecked size="1rem" as={RadioButtonUnchecked} />
              <StyledChecked size="1rem" as={RadioButtonChecked} />
            </Box>
          </Box>
          <Box flex="1" pl="300">
            <StyledHeader
              data-id="radio-card-header"
              fontSize={isSmall ? '200' : '300'}
              lineHeight={isSmall ? '200' : '400'}
              fontWeight={isSmall ? 'medium' : 'semibold'}
            >
              {label}
            </StyledHeader>
          </Box>
        </Box>
        {children && (
          <Box
            data-id="radio-card-content"
            pt={isSmall ? '0' : '200'}
            pl={isSmall ? '450' : '0'}
            fontSize={isSmall ? '200' : '300'}
            lineHeight={isSmall ? '200' : '300'}
            color={isSmall ? 'gray.700' : 'gray.900'}
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
