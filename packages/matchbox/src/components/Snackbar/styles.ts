import { tokens } from '@sparkpost/design-tokens';
import React from 'react';
import Snackbar from './Snackbar';

export const base = () => `
  display: inline-flex;
  align-items: flex-start;
  color: ${tokens.color_white};
`;

export const status = ({ status }: Pick<React.ComponentProps<typeof Snackbar>, 'status'>) => {
  function makeLinkColorStyles(color) {
    return `
      a, 
      a:hover, 
      a:visited { 
        color: ${color} !important; 
      }
    `;
  }
  const whiteLinks = makeLinkColorStyles(tokens.color_white);
  const greyLinks = makeLinkColorStyles(tokens.color_gray_900);

  switch (status) {
    case 'success':
      return `
        ${whiteLinks} 
        background: ${tokens.color_green_800};
      `;
    case 'danger':
    case 'error':
      return `
        ${whiteLinks} background: ${tokens.color_red_700};
      `;
    case 'warning':
      return `
        ${greyLinks} 
        background: ${tokens.color_yellow_300};
        color: ${tokens.color_gray_900};
      `;
    case 'default':
    default:
      return `
        ${whiteLinks} background: ${tokens.color_blue_800};
      `;
  }
};

export const dismiss = () => `
  display: inline-flex;
  transition: background ${tokens.motionDuration_fast};
  &:hover {
    cursor: pointer;
  }
`;

export const dismissStatus = ({
  status,
}: Pick<React.ComponentProps<typeof Snackbar>, 'status'>) => {
  let color;

  switch (status) {
    case 'success':
      color = tokens.color_green_900;
      break;
    case 'danger':
    case 'error':
      color = tokens.color_red_800;
      break;
    case 'warning':
      color = tokens.color_yellow_400;
      break;
    case 'default':
    default:
      color = tokens.color_blue_900;
      break;
  }

  return `
    &:hover {
      background: ${color};
    }
  `;
};
