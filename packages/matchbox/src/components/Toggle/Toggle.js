import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { margin } from 'styled-system';
import { pick } from '@styled-system/props';
import { createPropTypes } from '@styled-system/prop-types';
import { visuallyHidden } from '../../styles/helpers';
import { deprecate } from '../../helpers/propTypes';
import { omit } from '../../helpers/systemProps';
import { ScreenReaderOnly } from '../ScreenReaderOnly';
import { toggle, input, StyledIndicator, StyledOutline } from './styles';

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
  const componentProps = omit(rest, margin.propNames);
  console.log(rest);
  console.log(componentProps);

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
        {...componentProps}
      />
      <StyledOutline checked={checked} />
      <StyledIndicator checked={checked} />
    </StyledToggle>
  );
}

Toggle.displayName = 'Toggle';
Toggle.propTypes = {
  checked: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  compact: deprecate(PropTypes.bool, 'Compact prop has been removed'),
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
