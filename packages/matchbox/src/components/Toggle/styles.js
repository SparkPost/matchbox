import { tokens } from '@sparkpost/design-tokens';
import { StyledOutline, StyledIndicator } from './Toggle';

export const toggle = props => `
  display: inline-block;
  position: relative;
  height: 20px;
  width: 36px;
  opacity: ${props.disabled ? '0.9' : '1'};

  *:hover {
    cursor: ${props.disabled ? 'not-allowed' : 'pointer'};
  }
`;

export const indicator = props => `
  pointer-events: none;
  position: absolute;
  top: 1px;
  left: 1px;
  bottom: 1px;
  width: 18px;

  background: ${tokens.color_white};
  transition: ${tokens.motionDuration_fast};
  transform: translate(${props.checked ? tokens.spacing_400 : '0'}, 0);

  border-radius: ${tokens.borderRadius_circle};
  box-shadow: ${tokens.boxShadow_400};
`;

export const outline = props => `
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: ${props.checked ? tokens.color_green_600 : tokens.color_gray_400};
  border-radius: ${tokens.borderRadius_pill};
  transition: ${tokens.motionDuration_fast};
`;

export const input = () => `
  &:focus ~ ${StyledOutline},
  &:active ~ ${StyledOutline} {
    box-shadow: 0 0 0 1px white, 0 0 0 3px ${tokens.color_blue_500};
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
