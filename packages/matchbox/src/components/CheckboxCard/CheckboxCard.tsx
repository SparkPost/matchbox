import React from 'react';
import { CheckBox, CheckBoxOutlineBlank } from '@sparkpost/matchbox-icons';
import { Box } from '../Box';
import Group from './Group';
import { StyledLabel, StyledInput, StyledUnchecked, StyledChecked, StyledHeader } from './styles';

export type CheckboxCardProps = {
  'data-id'?: string;
  'data-track'?: string;
  label?: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<'input'>, 'type'>;

const CheckboxCard = React.forwardRef<HTMLInputElement, CheckboxCardProps>(function CheckboxCard(
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
    'data-id': dataId,
    'data-track': dataTrack,
    ...rest
  } = props;

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
        type="checkbox"
        value={value}
        {...rest}
      />
      <StyledLabel as="label" htmlFor={id}>
        <Box display="flex">
          <Box flex="0 0 auto" width="400">
            <Box position="absolute" top="500" left="500">
              <StyledUnchecked size="1rem" as={CheckBoxOutlineBlank} />
              <StyledChecked size="1rem" as={CheckBox} />
            </Box>
          </Box>
          <Box flex="1" pl="300">
            <StyledHeader
              data-id="radio-card-header"
              fontSize="300"
              lineHeight="400"
              fontWeight="semibold"
            >
              {label}
            </StyledHeader>
          </Box>
        </Box>
        {children && (
          <Box data-id="checkbox-card-content" pt="200">
            {children}
          </Box>
        )}
      </StyledLabel>
    </Box>
  );
}) as React.ForwardRefExoticComponent<CheckboxCardProps> & {
  Group: typeof Group;
};

CheckboxCard.displayName = 'CheckboxCard';

CheckboxCard.Group = Group;
export default CheckboxCard;
