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
import useInputDescribedBy from '../../hooks/useInputDescribedBy';

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

const StyledWrapper = styled('div')`
  ${margin}
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
    // labelHidden, TODO add this back in later after hibana cutover
    ...rest
  } = props;
  const systemProps = pick(rest);
  const componentProps = omit(rest);
  const { describedBy, errorId, helpTextId } = useInputDescribedBy({
    id,
    hasHelpText: !!helpText,
    hasError: !!error,
  });

  const requiredIndicator = required ? (
    <Box as="span" pr="200" aria-hidden="true">
      *
    </Box>
  ) : null;

  const labelMarkup = (
    <Label
      id={id}
      label={label}
      // labelHidden={labelHidden} TODO Add this back in after hibana cutover
    >
      {requiredIndicator}
      {error && errorInLabel && (
        <Box as={Error} id={errorId} wrapper="span" error={error} fontWeight="400" />
      )}
    </Label>
  );

  const helpMarkup = helpText ? <HelpText id={helpTextId}>{helpText}</HelpText> : null;

  return (
    <StyledWrapper {...systemProps}>
      {labelMarkup}
      <Box position="relative">
        <StyledSelect
          id={id}
          disabled={disabled}
          required={required}
          hasError={!!error}
          {...componentProps}
          {...describedBy}
        >
          <Options
            options={options}
            placeholder={placeholder}
            placeholderValue={placeholderValue}
          />
        </StyledSelect>
        <StyledChevron size={24} disabled={disabled} />
      </Box>
      {error && !errorInLabel && <Error id={errorId} error={error} />}
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
  // labelHidden: PropTypes.bool, TODO Add this back in after hibana cutover
  helpText: PropTypes.node,
  error: PropTypes.string,
  errorInLabel: PropTypes.bool,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  ...createPropTypes(margin.propNames),
};

export default Select;
