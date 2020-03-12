import React from 'react';
import PropTypes from 'prop-types';
import { visuallyHidden } from '../../styles/helpers';
import styled from 'styled-components';
import { deprecate } from '../../helpers/propTypes';
import { margin } from 'styled-system';
import { createPropTypes } from '@styled-system/prop-types';
import { toggle, indicator, outline, input } from './styles';

const StyledToggle = styled('label')`
  ${toggle}
  ${margin}
`;

export const StyledIndicator = styled('span')`
  ${indicator}
`;

export const StyledOutline = styled('span')`
  ${outline}
`;

const StyledInput = styled('input')`
  ${visuallyHidden}
  ${input}
`;

const StyledLabels = styled('div')`
  ${visuallyHidden}
`;

function Toggle(props) {
  const { id, value, checked, disabled, onChange, onFocus, onBlur, ...rest } = props;

  const labelMarkup = (
    <StyledLabels>
      <span>On</span>
      <span>Off</span>
    </StyledLabels>
  );

  return (
    <StyledToggle htmlFor={id} disabled={disabled} {...rest}>
      <StyledInput
        id={id}
        value={value}
        defaultChecked={checked}
        disabled={disabled}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        type="checkbox"
        {...rest}
      />
      <StyledOutline checked={checked} />
      {labelMarkup}
      <StyledIndicator checked={checked} />
    </StyledToggle>
  );
}

Toggle.displayName = 'Toggle';
Toggle.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  compact: deprecate(PropTypes.bool, 'Compact is deprecated'),
  value: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  ...createPropTypes(margin.propNames),
};

export default Toggle;
