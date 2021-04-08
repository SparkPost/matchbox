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
    weight = 'light',
    ...rest
  } = props;

  const fontSize = weight === 'heavy' ? '400' : '300';

  return (
    <Box data-id="radio-card">
      <StyledInput
        checked={checked}
        data-id={rest['data-id']}
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
});

RadioCard.displayName = 'RadioCard';

RadioCard.propTypes = {
  checked: PropTypes.bool,
  'data-id': PropTypes.string,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
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
