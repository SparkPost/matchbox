import { tokens } from '@sparkpost/design-tokens';
import css from '@styled-system/css';
import { buttonReset } from '../../styles/helpers';
import styled from 'styled-components';

export const StyledHeader = styled('button')`
  ${buttonReset}
  user-select: none;
  outline: none;
  ${({ variant }) =>
    css({
      padding: variant === 'borderless' ? ['400', null, '500'] : '300',
    })}

  display: flex;
  align-items: center;
  text-align: left;
  width: 100%;

  transition: background ${tokens.motionDuration_fast} ${tokens.motionEase_in_out};

  &:hover {
    cursor: pointer;
    background: ${tokens.color_gray_100};
  }
`;

export const StyledContentWrapper = styled('div')`
  ${props => {
    let visibility = 'hidden';
    let display = 'none';

    if (props.isOpen) {
      visibility = 'visible';
      display = 'flex';
    }

    return `
      visibility: ${visibility};
      display: ${display};
    `;
  }}
  ${({ variant }) => css({ px: variant === 'borderless' ? ['400', null, '500'] : '300' })}
  ${({ variant }) => css({ pb: variant === 'borderless' ? ['400', null, '500'] : '300' })}
`;

export const expandable = props => {
  let borderRadius = tokens.borderRadius_100;
  if (props.variant === 'borderless') {
    return ``;
  }

  if (props.accent) {
    borderRadius = `0 0 ${tokens.borderRadius_100} ${tokens.borderRadius_100}`;
  }

  return `
    border: ${props.theme.borders['300']};
    border-radius: ${borderRadius};
    border-top-width: ${props.accent ? tokens.borderWidth_0 : tokens.borderWidth_100}
  `;
};

export const arrow = props => {
  let rotate = 'rotate(-90deg)';

  if (props.isOpen) {
    rotate = 'rotate(90deg)';
  }

  return `
    border-radius: ${tokens.borderRadius_circle};
    padding: ${tokens.spacing_100};
    transition: ${tokens.motionDuration_fast} ${tokens.motionEase_in_out};
    transform-origin: center;
    transform: ${rotate};
  `;
};

export const title = () => `
  font-size: ${tokens.fontSize_400};
  font-weight: ${tokens.fontWeight_semibold};
`;

export const subtitle = () => `
  font-weight: ${tokens.fontWeight_normal};
`;

export const accent = props => {
  let color;

  switch (props.accentColor) {
    case 'orange':
      color = tokens.color_brand_orange;
      break;
    case 'green':
      color = tokens.color_green_700;
      break;
    case 'yellow':
      color = tokens.color_yellow_400;
      break;
    case 'red':
      color = tokens.color_red_700;
      break;
    case 'gray':
      color = tokens.color_gray_600;
      break;
    case 'blue':
    case 'navy':
    case 'purple':
    default:
      color = tokens.color_blue_700;
  }

  return `
    height: ${tokens.spacing_100};
    border-radius: ${tokens.borderRadius_100} ${tokens.borderRadius_100} 0 0;
    background-color: ${color};
  `;
};
