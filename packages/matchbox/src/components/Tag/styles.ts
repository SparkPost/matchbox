import { tokens } from '@sparkpost/design-tokens';

export const tagBase = (props) => `
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  padding: 0 ${tokens.spacing_200};
  padding-right: ${props.$hasRemove ? '1px' : tokens.spacing_200};
  border-radius: ${tokens.borderRadius_pill};
  height: 1.5rem;
  font-size: ${tokens.fontSize_200};
  font-weight: ${tokens.fontWeight_normal};
`;

// Includes button reset styles
// Key events (space, enter) inherit the onClick handler through <button>
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
  display: inline-flex;
  align-items: center;
  & > svg {
    margin: 0 2px;
  }
`;

export const tagColor = (props) => {
  let bg = '';
  let color = '';

  switch (props.$tagColor) {
    case 'orange':
    case 'blue':
    case 'navy':
      bg = tokens.color_blue_400;
      color = tokens.color_blue_1000;
      break;
    case 'green':
      bg = tokens.color_green_400;
      color = tokens.color_green_1000;
      break;
    case 'yellow':
      bg = tokens.color_yellow_300;
      color = tokens.color_yellow_1000;
      break;
    case 'red':
      bg = tokens.color_red_400;
      color = tokens.color_red_1000;
      break;
    case 'magenta':
      bg = tokens.color_magenta_400;
      color = tokens.color_magenta_1000;
      break;
    case 'purple':
      bg = tokens.color_purple_400;
      color = tokens.color_purple_1000;
      break;
    case 'teal':
      bg = tokens.color_teal_500;
      color = tokens.color_teal_1000;
      break;
    case 'darkGray':
      bg = tokens.color_gray_500;
      color = tokens.color_gray_1000;
      break;
    case 'lightGray':
    default:
      bg = tokens.color_gray_300;
      color = tokens.color_gray_1000;
  }

  return `
    background: ${bg};
    color: ${color};
  `;
};

export const closeColor = (props) => {
  let bg = '';
  let color = '';

  switch (props.$tagColor) {
    case 'orange':
    case 'blue':
    case 'navy':
      bg = tokens.color_blue_500;
      color = tokens.color_blue_800;
      break;
    case 'green':
      bg = tokens.color_green_500;
      color = tokens.color_green_900;
      break;
    case 'yellow':
      bg = tokens.color_yellow_500;
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
      bg = tokens.color_teal_600;
      color = tokens.color_teal_800;
      break;
    case 'darkGray':
      bg = tokens.color_gray_600;
      color = tokens.color_gray_900;
      break;
    case 'lightGray':
    default:
      bg = tokens.color_gray_400;
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
