import React from 'react';
import PropTypes from 'prop-types';
import { visuallyHidden } from '../../styles/helpers';
import styled from 'styled-components';
import { deprecate } from '../../helpers/propTypes';
import { ScreenReaderOnly } from '../ScreenReaderOnly';
import { margin } from 'styled-system';
import { createPropTypes } from '@styled-system/prop-types';
import { toggle, input, StyledIndicator, StyledOutline } from './styles';
import { pick } from '@styled-system/props';

const StyledToggle = styled('label')`
  ${toggle}
  ${margin}
`;

const StyledInput = styled('input')`
  ${visuallyHidden}
  ${input}
`;

function Toggle(props) {
  const {
    id,
    value,
    checked,
    disabled,
    onChange,
    onFocus,
    onBlur,
    label,
    required,
    ...rest
  } = props;
  const systemProps = pick(rest);

  return (
    <StyledToggle htmlFor={id} disabled={disabled} {...systemProps}>
      {label && <ScreenReaderOnly>{label}</ScreenReaderOnly>}
      <StyledInput
        id={id}
        value={value}
        defaultChecked={checked}
        disabled={disabled}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        required={required}
        type="checkbox"
        {...rest}
      />
      <StyledOutline checked={checked} />
      <StyledIndicator checked={checked} />
    </StyledToggle>
  );
}

Toggle.displayName = 'Toggle';
Toggle.propTypes = {
  checked: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  compact: deprecate(PropTypes.bool, 'Compact is deprecated'),
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  required: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  ...createPropTypes(margin.propNames),
};

export default Toggle;
