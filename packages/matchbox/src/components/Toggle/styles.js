import { tokens } from '@sparkpost/design-tokens';
import styled from 'styled-components';

export const toggle = props => `
  display: inline-block;
  position: relative;
  height: 1.25rem;
  width: 2.25rem;

  opacity: ${props.disabled ? '0.6' : '1'}

  &:hover {
    cursor: ${props.disabled ? 'not-allowed' : 'pointer'};
  }
`;

export const indicator = props => `
  pointer-events: none;
  position: absolute;
  top: 1px;
  left: 1px;
  bottom: 1px;
  width: calc(2.25rem / 2);

  background: ${tokens.color_white};
  transition: ${tokens.motionDuration_fast} ${tokens.motionEase_in_out};
  transform: translate(${props.checked ? tokens.spacing_400 : '0'}, 0);

  border-radius: ${tokens.borderRadius_circle};
  box-shadow: ${tokens.boxShadow_100};
`;

export const outline = () => `
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: ${tokens.color_gray_600};
  border-radius: ${tokens.borderRadius_pill};
  transition: ${tokens.motionDuration_fast};
`;

export const StyledIndicator = styled('span')`
  ${indicator}
`;

export const StyledOutline = styled('span')`
  ${outline}
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
      background: ${tokens.color_green_600};
    }
  }
`;
