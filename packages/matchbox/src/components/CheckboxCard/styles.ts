import styled from 'styled-components';
import { tokens } from '@sparkpost/design-tokens';
import { focusOutline, visuallyHidden } from '../../styles/helpers';
import { Box } from '../Box';

export const StyledLabel = styled(Box)<{ $size?: 'small' | 'default' }>`
  display: block;
  position: relative;
  background: ${(props) => props.theme.colors.white};
  padding: ${(props) =>
    props.$size === 'small' ? props.theme.space['200'] : props.theme.space['500']};
  border: ${(props) => props.theme.borders['400']};
  border-radius: ${(props) => props.theme.radii['200']};
  cursor: pointer;
  transition: ${tokens.motionDuration_medium};
  transition-property: box-shadow, border;
  ${focusOutline({ offset: '2px', modifier: 'input:focus ~ &' })}

  &:hover {
    border: ${(props) => props.theme.borderWidths['100']} solid
      ${(props) => {
        return props.$size === 'small'
          ? props.theme.colors.gray['400']
          : props.theme.colors.gray['600'];
      }};
  }

  input:checked ~ & {
    border: ${(props) => props.theme.borderWidths['100']} solid
      ${(props) => {
        return props.$size === 'small'
          ? props.theme.colors.gray['400']
          : props.theme.colors.blue['700'];
      }};
  }

  input:disabled ~ & {
    cursor: not-allowed;
    background: ${(props) => props.theme.colors.gray['100']};
    border: ${(props) => props.theme.borderWidths['100']} solid
      ${(props) => props.theme.colors.gray['300']};
    color: ${(props) => props.theme.colors.gray['800']};
  }
`;

export const StyledInput = styled.input`
  ${visuallyHidden}
  &:hover {
    & + ${StyledLabel} {
      z-index: ${tokens.zIndex_default};
    }
  }
  &:checked {
    & + ${StyledLabel} {
      z-index: ${tokens.zIndex_above};
    }
  }
  &:focus {
    & + ${StyledLabel} {
      z-index: ${tokens.zIndex_above + 1};
    }
  }
`;

const commonCheckStyle = (props) => `
  position: relative;
  transition: opacity ${tokens.motionDuration_fast} ${tokens.motionEase_in_out}, fill ${tokens.motionDuration_fast} ${tokens.motionEase_in_out}, box-shadow ${tokens.motionDuration_fast} ${tokens.motionEase_in_out};
  
  input:disabled ~ ${StyledLabel} & {
    fill: ${props.theme.colors.gray['700']};
  }
`;

export const StyledUnchecked = styled.svg`
  ${(props) => commonCheckStyle(props)}
  opacity: 1;
  fill: ${(props) => props.theme.colors.gray['700']};

  input:checked ~ ${StyledLabel} & {
    opacity: 0;
  }
`;

export const StyledChecked = styled.svg`
  ${(props) => commonCheckStyle(props)}
  opacity: 0;
  left: -1.25rem;
  fill: ${(props) => props.theme.colors.blue['700']};

  input:checked ~ ${StyledLabel} & {
    opacity: 1;
  }
`;

export const StyledHeader = styled(Box)`
  input:checked ~ ${StyledLabel} & {
    color: ${(props) => props.theme.colors.blue['700']};
  }

  input:disabled ~ ${StyledLabel} & {
    color: ${(props) => props.theme.colors.gray['800']};
  }
`;
