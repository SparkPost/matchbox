import { tokens } from '@sparkpost/design-tokens';
import { Box } from '../Box';
import { visuallyHidden } from '../../styles/helpers';
import styled from 'styled-components';
import { margin } from 'styled-system';

export const Wrapper = styled('div')`
  ${margin}
`;

export const StyledBox = styled(Box)`
  border: 2px solid ${props => (props.error ? tokens.color_red_700 : tokens.color_gray_700)};
  transition: ${tokens.motionDuration_fast} ${tokens.motionEase_in_out};
  transition-property: border, background;
`;

export const StyledCheck = styled(Box)`
  opacity: 0;
  color: ${tokens.color_white};
  transition: opacity ${tokens.motionDuration_fast} ${tokens.motionEase_in_out};
`;

export const StyledLabel = styled('label')`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  white-space: nowrap;
  user-select: none;

  &:hover {
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

    ${StyledBox} {
      ${props => (!props.disabled ? `border: 2px solid ${tokens.color_gray_800};` : '')}
    }
  }
`;

export const StyledInput = styled('input')`
  ${visuallyHidden}

  &:focus ~ span ${StyledBox} {
    box-shadow: 0 0 0 2px ${tokens.color_white}, 0 0 0 4px ${tokens.color_blue_700}
  }

  &:checked {
    & ~ span ${StyledBox} {
      border: 2px solid ${props => (props.error ? tokens.color_red_700 : tokens.color_blue_700)};
      background: ${props => (props.error ? tokens.color_red_700 : tokens.color_blue_700)};
    }

    & ~ span ${StyledCheck} {
      opacity: 1;
    }
  }

  &:disabled ~ span ${StyledBox} {
    background: ${tokens.color_gray_300};
    border: 2px solid ${tokens.color_gray_600};
  }

  &:disabled:checked ~ span ${StyledBox} {
    background: ${tokens.color_gray_600};
    border: 2px solid ${tokens.color_gray_600};
  }
`;
