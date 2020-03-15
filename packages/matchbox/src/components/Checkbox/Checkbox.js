import React from 'react';
import PropTypes from 'prop-types';
import { Label } from '../Label';
import { Error } from '../Error';
import { Check } from '@sparkpost/matchbox-icons';
import Group from './Group';
import { HelpText } from '../HelpText';
import useInputDescribedBy from '../../hooks/useInputDescribedBy';
import { createPropTypes } from '@styled-system/prop-types';
import { visuallyHidden } from '../../styles/helpers';
import styled from 'styled-components';
import { margin } from 'styled-system';
import { checkbox, control, box, check, input } from './styles';

export const StyledCheckbox = styled('fieldset')`
  ${checkbox}
  ${margin}
`;

export const StyledInput = styled('input')`
  ${visuallyHidden}
  ${input}
`;

export const StyledControl = styled('label')`
  ${control}
`;

export const StyledBox = styled('div')`
  ${box}
`;

export const StyledCheck = styled(Check)`
  ${check}
`;

function Checkbox(props) {
  const {
    id,
    checked,
    label,
    labelHidden,
    disabled,
    required,
    error,
    value,
    onChange,
    onFocus,
    onBlur,
    helpText,
    ...rest
  } = props;

  const { describedBy, errorId, helpTextId } = useInputDescribedBy({
    id,
    hasHelpText: !!helpText,
    hasError: !!error,
  });

  const requiredIndicator = required ? ' *' : '';

  const labelMarkup =
    label && !labelHidden ? (
      <Label id={id}>
        {label}
        {requiredIndicator}
      </Label>
    ) : null;

  const errorMarkup = error ? <Error id={errorId} error={error} /> : null;

  const helpMarkup = helpText ? <HelpText id={helpTextId}>{helpText}</HelpText> : null;

  return (
    <StyledCheckbox error={error} {...rest}>
      <StyledInput
        id={id}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        type="checkbox"
        {...describedBy}
        {...rest}
      />
      <StyledControl htmlFor={id}>
        <StyledBox />
        <StyledCheck size={14} />
      </StyledControl>
      {labelMarkup}
      {errorMarkup}
      {helpMarkup}
    </StyledCheckbox>
  );
}

Checkbox.displayName = 'Checkbox';
Checkbox.Group = Group;
Checkbox.propTypes = {
  id: PropTypes.string,
  checked: PropTypes.bool,
  label: PropTypes.node,
  labelHidden: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  error: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  helpText: PropTypes.node,
  ...createPropTypes(margin.propNames),
};

export default Checkbox;
