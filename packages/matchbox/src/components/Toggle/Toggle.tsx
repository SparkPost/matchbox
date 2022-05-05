import React from 'react';
import styled from 'styled-components';
import { margin, MarginProps } from 'styled-system';
import { pick } from '@styled-system/props';
import { visuallyHidden } from '../../styles/helpers';
import { omit } from '../../helpers/props';
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

export type ToggleProps = React.ComponentPropsWithRef<'input'> &
  MarginProps & {
    label?: React.ReactNode;
    'data-id'?: string;
  };

function Toggle(props: ToggleProps): JSX.Element {
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
  const componentProps = omit(rest, margin.propNames);

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
        {...componentProps}
      />
      <StyledOutline />
      <StyledIndicator $checked={checked} />
    </StyledToggle>
  );
}

Toggle.displayName = 'Toggle';
export default Toggle;
