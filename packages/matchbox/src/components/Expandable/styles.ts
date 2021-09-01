import { tokens } from '@sparkpost/design-tokens';
import css from '@styled-system/css';
import { buttonReset, focusOutline } from '../../styles/helpers';
import styled from 'styled-components';

export const StyledHeader = styled('button')<{ $variant?: string }>`
  ${buttonReset}
  user-select: none;
  outline: none;
  ${(props) =>
    css({
      px: '450',
      py: props.$variant === 'borderless' ? '200' : '300',
    })}

  display: flex;
  align-items: center;
  text-align: left;
  width: 100%;

  transition: background ${tokens.motionDuration_fast} ${tokens.motionEase_in_out};

  &:hover {
    cursor: pointer;
  }
`;

export const StyledContentWrapper = styled('div')<{ $variant?: string; $isOpen?: boolean }>`
  ${(props) => {
    let visibility = 'hidden';
    let display = 'none';

    if (props.$isOpen) {
      visibility = 'visible';
      display = 'flex';
    }

    return `
      visibility: ${visibility};
      display: ${display};
    `;
  }}
  ${() => css({ px: '450', pb: '450' })}
`;

export const expandable = (props) => {
  let borderRadius = tokens.borderRadius_100;
  if (props.$variant === 'borderless') {
    return ``;
  }

  if (props.$accent) {
    borderRadius = `0 0 ${tokens.borderRadius_100} ${tokens.borderRadius_100}`;
  }

  return `
    border: ${props.theme.borders['300']};
    border-radius: ${borderRadius};
    border-top-width: ${props.accent ? tokens.borderWidth_0 : tokens.borderWidth_100}
  `;
};

export const arrow = (props) => {
  let rotate = 'rotate(-90deg)';

  if (props.$isOpen) {
    rotate = 'rotate(90deg)';
  }

  return `
    border-radius: ${tokens.borderRadius_circle};
    padding: ${tokens.spacing_100};
    transition: ${tokens.motionDuration_fast} ${tokens.motionEase_in_out};
    transform-origin: center;
    transform: ${rotate};

    ${StyledHeader}:hover &, ${StyledHeader}:focus & {	
      background: ${tokens.color_blue_200};	
      color: ${tokens.color_blue_800};
      ${focusOutline({ modifier: '&', radius: tokens.borderRadius_circle })}
    }
  `;
};

export const title = (props) => `
  font-size: ${props.$variant === 'borderless' ? tokens.fontSize_300 : tokens.fontSize_400};
  font-weight: ${
    props.$variant === 'borderless' ? tokens.fontWeight_normal : tokens.fontWeight_semibold
  };
  color: ${props.$variant === 'borderless' ? tokens.color_gray_700 : tokens.color_gray_900};
  line-height: ${tokens.lineHeight_400};
  transition: color ${tokens.motionDuration_fast};

  ${StyledHeader}:hover &, ${StyledHeader}:focus & {	
    color: ${tokens.color_blue_700};
  }
`;

export const subtitle = () => `
  font-weight: ${tokens.fontWeight_normal};
`;

export const accent = (props) => {
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
