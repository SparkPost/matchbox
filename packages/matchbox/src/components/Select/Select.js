import React from 'react';
import PropTypes from 'prop-types';
import { tokens } from '@sparkpost/design-tokens';
import { Label } from '../Label';
import { Error } from '../Error';
import { KeyboardArrowDown } from '@sparkpost/matchbox-icons';
import styled from 'styled-components';
import { select, chevron } from './styles';
import { Box } from '../Box';
import { HelpText } from '../HelpText';
import { margin } from 'styled-system';
import { createPropTypes } from '@styled-system/prop-types';
import { pick, omit } from '@styled-system/props';

const Option = ({ option }) => {
  if (typeof option === 'object') {
    const { value, label = value, ...rest } = option;
    return (
      <option value={value} {...rest}>
        {label}
      </option>
    );
  } else if (typeof option === 'string' || typeof option === 'number') {
    return <option value={option}>{option}</option>;
  }
};

function Options({ options, placeholder, placeholderValue }) {
  let combined = options;

  if (placeholder) {
    combined = [{ label: placeholder, value: placeholderValue, disabled: true }, ...combined];
  }

  if (!combined && !combined.length) {
    return null;
  }

  return (
    <>
      {combined.map((option, key) => (
        <Option option={option} key={key} />
      ))}
    </>
  );
}

const SelectBox = props => {
  return (
    <Box
      as="select"
      disabled={props.disabled}
      width="100%"
      border={props.hasError ? `1px solid ${tokens.color_red_700}` : '400'}
      borderRadius="100"
      bg={props.disabled ? 'gray.200' : 'white'}
      pl="400"
      pr="600"
      lineHeight="2.5rem"
      height="2.5rem"
      color="gray.900"
      {...props}
    />
  );
};

const StyledSelect = styled(SelectBox)`
  ${select}
`;

const StyledChevron = styled(KeyboardArrowDown)`
  ${chevron}
`;

const StyledWrapper = styled(Box)`
  {margin}
`;

function Select(props) {
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
    labelHidden,
    ...rest
  } = props;
  const systemProps = pick(rest);
  const componentProps = omit(rest);

  const requiredIndicator = required ? ' *' : '';

  const labelMarkup = (
    <Label id={id} label={`${label}${requiredIndicator}`} labelHidden={labelHidden}>
      {error && errorInLabel && <Error wrapper="span" error={error} />}
    </Label>
  );

  const helpMarkup = helpText ? <HelpText>{helpText}</HelpText> : null;

  return (
    <StyledWrapper {...systemProps}>
      {label && labelMarkup}
      <Box position="relative">
        <StyledSelect id={id} disabled={disabled} {...componentProps} hasError={!!error}>
          <Options
            options={options}
            placeholder={placeholder}
            placeholderValue={placeholderValue}
          />
        </StyledSelect>
        <StyledChevron size={24} disabled={disabled} />
      </Box>
      {error && !errorInLabel && <Error error={error} />}
      {helpMarkup}
    </StyledWrapper>
  );
}

Select.displayName = 'Select';
Select.propTypes = {
  id: PropTypes.string,
  /**
   * Select options -
   * Array of Objects with { value, label }, Strings, or Numbers
   */
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        label: PropTypes.string.isRequired,
      }),
      PropTypes.string.isRequired,
      PropTypes.number.isRequired,
    ]),
  ).isRequired,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  label: PropTypes.string,
  labelHidden: PropTypes.bool,
  helpText: PropTypes.node,
  error: PropTypes.string,
  errorInLabel: PropTypes.bool,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  ...createPropTypes(margin.propNames),
};

export default Select;
