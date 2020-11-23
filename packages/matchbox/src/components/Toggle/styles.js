import { tokens } from '@sparkpost/design-tokens';
import styled from 'styled-components';

const toggleWidth = '2.25rem';

export const toggle = props => `
  display: inline-block;
  position: relative;
  height: 1.25rem;
  width: ${toggleWidth};

  opacity: ${props.disabled ? '0.6' : '1'};
  cursor: ${props.disabled ? 'not-allowed' : 'pointer'};
`;

export const StyledIndicator = styled('span')`
  pointer-events: none;
  position: absolute;
  top: 1px;
  left: 1px;
  bottom: 1px;
  width: calc(${toggleWidth} / 2);

  background: ${tokens.color_white};
  transition: transform ${tokens.motionDuration_fast} ${tokens.motionEase_in_out};
  transform: translate(${props => (props.checked ? tokens.spacing_400 : '0')}, 0);

  border-radius: ${tokens.borderRadius_circle};
  box-shadow: ${tokens.boxShadow_100};
`;

export const StyledOutline = styled('span')`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: ${tokens.color_gray_700};
  border-radius: ${tokens.borderRadius_pill};
  transition: ${tokens.motionDuration_fast};
`;

export const input = () => `
  &:focus ~ ${StyledOutline},
  &:active ~ ${StyledOutline} {
    box-shadow: 0 0 0 2px white, 0 0 0 4px ${tokens.color_blue_600};
  }

  &:checked {
    & ~ ${StyledIndicator} {
      transform: translate(${tokens.spacing_400}, 0);
    }

    & ~ ${StyledOutline} {
      background: ${tokens.color_green_800};
    }
  }
`;
