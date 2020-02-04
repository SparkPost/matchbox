import { tokens } from '@sparkpost/design-tokens';

export const tagBase = props => `
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  padding: 1px ${tokens.spacing_300};
  padding-right: ${props.hasRemove ? '1px' : tokens.spacing_300};
  border-radius: ${tokens.borderRadius_pill};
  line-height: ${tokens.lineHeight_200};
  font-size: ${tokens.fontSize_200};
  font-weight: ${tokens.fontWeight_normal};
`;

export const closeBase = () => `
  border: none;
  background: none;
  padding: 0;
  display: inline-flex;
  width: 1.25rem;
  height: 1.25rem;
  align-items: center;
  justify-content: center;
  margin-left: ${tokens.spacing_100};
  border-radius: ${tokens.borderRadius_circle};
  transition-duration: 0.15s;
  transition-property: background;
`;

// This margin is a little funky, however, appears to be the best route to take to add
// spacing between icons and other tag content. Ideally, if Tag instances do not have bare
// strings inside, then the sibling combinator could be used (i.e., `> * + svg { margin-left: 2px; }`),
// however, that's not possible as bare strings do not count as sibling elements.
export const content = () => `
  & > svg {
    margin: 0 2px;
  }
`;

export const tagColor = props => {
  let bg = '';
  let border = '';
  let color = '';

  switch (props.tagColor) {
    case 'orange':
    case 'blue':
    case 'navy':
      bg = tokens.color_blue_300;
      border = tokens.color_blue_500;
      color = tokens.color_blue_800;
      break;
    case 'green':
      bg = tokens.color_green_300;
      border = tokens.color_green_500;
      color = tokens.color_green_800;
      break;
    case 'yellow':
      bg = tokens.color_yellow_200;
      border = tokens.color_yellow_400;
      color = tokens.color_yellow_700;
      break;
    case 'red':
      bg = tokens.color_red_300;
      border = tokens.color_red_500;
      color = tokens.color_red_800;
      break;
    case 'magenta':
      bg = tokens.color_magenta_300;
      border = tokens.color_magenta_500;
      color = tokens.color_magenta_800;
      break;
    case 'purple':
      bg = tokens.color_purple_300;
      border = tokens.color_purple_500;
      color = tokens.color_purple_800;
      break;
    case 'teal':
      bg = tokens.color_teal_200;
      border = tokens.color_teal_500;
      color = tokens.color_teal_800;
      break;
    case 'gray':
    default:
      bg = tokens.color_gray_300;
      border = tokens.color_gray_500;
      color = tokens.color_gray_900;
      break;
  }

  return `
    background: ${bg};
    border: 1px solid ${border};
    color: ${color};
  `;
};

export const closeColor = props => {
  let bg = '';
  let color = '';

  switch (props.tagColor) {
    case 'orange':
    case 'blue':
    case 'navy':
      bg = tokens.color_blue_500;
      color = tokens.color_blue_800;
      break;
    case 'green':
      bg = tokens.color_green_500;
      color = tokens.color_green_800;
      break;
    case 'yellow':
      bg = tokens.color_yellow_400;
      color = tokens.color_yellow_700;
      break;
    case 'red':
      bg = tokens.color_red_500;
      color = tokens.color_red_800;
      break;
    case 'magenta':
      bg = tokens.color_magenta_500;
      color = tokens.color_magenta_800;
      break;
    case 'purple':
      bg = tokens.color_purple_500;
      color = tokens.color_purple_800;
      break;
    case 'teal':
      bg = tokens.color_teal_500;
      color = tokens.color_teal_800;
      break;
    case 'gray':
    default:
      bg = tokens.color_gray_500;
      color = tokens.color_gray_900;
      break;
  }

  return `
    color: ${color};
    &:hover {
      color: ${color};
      background: ${bg};
      cursor: pointer;
    }
  `;
};
