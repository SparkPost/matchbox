import React from 'react';
import PropTypes from 'prop-types';
import { RadioButtonChecked, RadioButtonUnchecked } from '@sparkpost/matchbox-icons';
import { Box } from '../Box';
import Group from './Group';
import { StyledLabel, StyledInput, StyledUnchecked, StyledChecked, StyledHeader } from './styles';

const RadioCard = React.forwardRef(function RadioCard(props, userRef) {
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
    weight,
  } = props;

  const fontSize = weight === 'heavy' ? '400' : '300';

  return (
    <Box>
      <StyledInput
        checked={checked}
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
            <StyledHeader fontSize={fontSize} lineHeight="400" fontWeight="semibold">
              {label}
            </StyledHeader>
            {children && <Box pt="200">{children}</Box>}
          </Box>
        </Box>
      </StyledLabel>
    </Box>
  );
});

RadioCard.displayName = 'RadioCard';

RadioCard.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.node,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.string,
  weight: PropTypes.oneOf(['light', 'heavy']),
};

RadioCard.Group = Group;
export default RadioCard;
