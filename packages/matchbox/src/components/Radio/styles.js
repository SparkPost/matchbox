import { tokens } from '@sparkpost/design-tokens';
import { Box } from '../Box';
import { visuallyHidden } from '../../styles/helpers';
import styled from 'styled-components';
import { margin } from 'styled-system';

export const Wrapper = styled('div')`
  ${margin}
  position: relative;
  border: none;
  padding: 0;
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
  }
`;

const commonCheckedStyles = `
  position: absolute;
  top: 0;
  left: 0;
  transition: ${tokens.motionDuration_fast} ${tokens.motionEase_in_out};
`;

export const StyledUnchecked = styled(Box)`
  ${commonCheckedStyles}
  opacity: 1;
  fill: ${props => (props.error ? tokens.color_red_700 : tokens.color_gray_700)};
`;

export const StyledChecked = styled(Box)`
  ${commonCheckedStyles}
  opacity: 0;
  fill: ${props => (props.error ? tokens.color_red_700 : tokens.color_blue_700)};
`;

export const StyledInput = styled('input')`
  ${visuallyHidden}

  &:hover:not(:disabled) {
    & ~ span ${StyledUnchecked} {
      fill: ${tokens.color_gray_800};
    }
  }

  &:checked {
    & ~ span ${StyledUnchecked} {
      opacity: 0;
    }

    & ~ span ${StyledChecked} {
      opacity: 1;
    }
  }

  &:disabled ~ span ${StyledChecked}, &:disabled ~ span ${StyledUnchecked} {
    cursor: not-allowed;
    fill: ${tokens.color_gray_600};
  }
`;
