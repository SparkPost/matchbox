import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { margin } from 'styled-system';
import { pick } from '@styled-system/props';
import { createPropTypes } from '@styled-system/prop-types';
import { visuallyHidden } from '../../styles/helpers';
import { deprecate } from '../../helpers/propTypes';
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
    defaultChecked,
    disabled,
    onChange,
    onFocus,
    onBlur,
    label,
    required,
    'aria-describedby': ariaDescribedBy,
    'data-id': dataId,
    ...rest
  } = props;
  const systemProps = pick(rest);

  return (
    <StyledToggle htmlFor={id} disabled={disabled} {...systemProps}>
      {label && <ScreenReaderOnly>{label}</ScreenReaderOnly>}
      <StyledInput
        id={id}
        value={value}
        defaultChecked={defaultChecked}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        required={required}
        type="checkbox"
        aria-describedby={ariaDescribedBy}
        data-id={dataId}
      />
      <StyledOutline checked={checked} />
      <StyledIndicator checked={checked} />
    </StyledToggle>
  );
}

Toggle.displayName = 'Toggle';
Toggle.propTypes = {
  'aria-describedby': PropTypes.string,
  'data-id': PropTypes.string,
  checked: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  defaultChecked: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
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
