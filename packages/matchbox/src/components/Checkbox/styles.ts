import { tokens } from '@sparkpost/design-tokens';
import { Box, BoxProps } from '../Box';
import { visuallyHidden } from '../../styles/helpers';
import styled from 'styled-components';
import { margin } from 'styled-system';
import { focusOutline } from '../../styles/helpers';

type CheckboxIndeterminateProp = {
  $indeterminate?: boolean;
};

type CheckboxDisabledProp = {
  $disabled?: boolean;
};

type CheckboxErrorProp = {
  $error?: boolean;
};

export const Wrapper = styled.div`
  ${margin}
`;

export const StyledCheck = styled(Box)<BoxProps>`
  opacity: 0;
  color: ${tokens.color_white};
  transition: opacity ${tokens.motionDuration_fast} ${tokens.motionEase_in_out};

  input:checked ~ span & {
    opacity: 1;
  }
`;

export const StyledIndeterminate = styled(Box)<BoxProps & CheckboxIndeterminateProp>`
  ${(props) => `
    opacity: ${props.$indeterminate ? '1' : '0'};
  `}
`;

export const StyledLabel = styled('label')<CheckboxDisabledProp>`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  white-space: nowrap;
  user-select: none;
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};
`;

export const StyledBox = styled(Box)<
  BoxProps & CheckboxIndeterminateProp & CheckboxDisabledProp & CheckboxErrorProp
>`
  border: 2px solid ${(props) => (props.$error ? tokens.color_red_700 : tokens.color_gray_700)};
  transition: ${tokens.motionDuration_fast} ${tokens.motionEase_in_out};
  transition-property: border, background;

  ${focusOutline({ modifier: 'input:focus ~ span &' })}

  input:checked ~ span & {
    border: 2px solid ${(props) => (props.$error ? tokens.color_red_700 : tokens.color_blue_700)};
    background: ${(props) => (props.$error ? tokens.color_red_700 : tokens.color_blue_700)};
  }

  input:disabled ~ span & {
    background: ${tokens.color_gray_300};
    border: 2px solid ${tokens.color_gray_600};
  }

  input:disabled:checked ~ span & {
    background: ${tokens.color_gray_600};
    border: 2px solid ${tokens.color_gray_600};
  }

  ${StyledLabel}:hover input:not(:disabled) ~ span & {
    ${(props) =>
      !props.$disabled && !props.$indeterminate && !props.$error
        ? `border: 2px solid ${tokens.color_gray_800};`
        : ''}
  }

  ${StyledLabel}:hover input:checked:not(:disabled) ~ span & {
    ${(props) => (!props.$error ? `border: 2px solid ${tokens.color_blue_700};` : '')}
  }

  ${(props) =>
    props.$indeterminate
      ? `
        background: ${tokens.color_blue_700};
        border: 2px solid ${tokens.color_blue_700};
      `
      : null}
`;

// Issue with aria-checked types
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type InputProps = { 'aria-checked'?: any };
export const StyledInput = styled.input<InputProps>`
  ${visuallyHidden}
`;
