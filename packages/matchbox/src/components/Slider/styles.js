import { tokens } from '@sparkpost/design-tokens';
import { StyledSlider } from './Slider';

export const slider = props => {
  let cursor = 'pointer';

  if (props.disabled) {
    cursor = 'not-allowed';
  }

  return `
    padding: ${tokens.spacing_600} 0;
    position: relative;
    cursor: ${cursor};
  `;
};

export const rail = () => `
  position: absolute;
  left: ${tokens.spacing_0};
  right: ${tokens.spacing_0};

  height: ${tokens.spacing_100};
  background: ${tokens.color_gray_300};
  border-radius: ${tokens.borderRadius_200};
  transition: ${tokens.motionDuration_medium} background;
  ${StyledSlider}:hover & {
    background: ${tokens.color_gray_400};
  }
`;

export const track = props => {
  let background = tokens.color_blue_700;

  if (props.disabled) {
    background = tokens.color_gray_600;
  }

  return `
    position: absolute;
    left: ${tokens.spacing_0};
    height: ${tokens.spacing_100};
    background: ${background};
    border-radius: ${tokens.borderRadius_200};
  `;
};

export const tick = props => {
  let background = tokens.color_gray_300;

  if (props.disabled && props.included) {
    background = tokens.color_gray_600;
  }

  if (!props.disabled && props.included) {
    background = tokens.color_blue_700;
  }

  return `
    position: absolute;
    height: ${tokens.spacing_200};
    width: ${tokens.spacing_200};
    border-radius: ${tokens.borderRadius_circle};
    transform: translate(-2px, -2px);

    background: ${background};
    transition: ${tokens.motionDuration_medium} background;

    user-select: none;
  `;
};

const sharedStyles = `
  position: absolute;
  width: ${tokens.spacing_400};
  height: ${tokens.spacing_400};
  border-radius: ${tokens.borderRadius_circle};
  outline: none;
`;

export const handle = props => {
  let border = `3px solid ${tokens.color_blue_700}`;

  if (props.disabled) {
    border = `3px solid ${tokens.color_gray_600}`;
  }

  return `
    ${sharedStyles}
    transform: translate(-7px, -5px);
    border: ${border};
    background: ${tokens.color_white};
    &:focus > div, &:active > div, &:hover > div {
      opacity: 0.3;
      transition: ${tokens.motionDuration_fast} opacity;
    }
  `;
};

export const handleShadow = props => {
  let boxShadow = `none`;

  if (!props.disabled) {
    boxShadow = `0 0 0 5px ${tokens.color_blue_700}`;
  }

  return `
    ${sharedStyles}
    transform: translate(-3px, -3px);
    border: 3px solid transparent;
    background: transparent;
    box-shadow: ${boxShadow};
    transition: ${tokens.motionDuration_fast} opacity;
    opacity: 0;
  `;
};
