import { tokens } from '@sparkpost/design-tokens';

export const header = () => `
  display: flex;
`;

export const headerText = () => `
  flex: 1 0 0;
  padding-right: ${tokens.spacing_100};
  font-size: ${tokens.fontSize_400};
  font-weight: ${tokens.fontWeight_semibold};
  line-height: ${tokens.lineHeight_400};
  color: ${tokens.color_gray_900};

  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export const panel = () => `
  position: relative;
  background: ${tokens.color_white};
  border-radius: ${tokens.borderRadius_100};
  padding: ${tokens.spacing_0};
`;

export const panelInner = props => {
  let borderRadius = tokens.borderRadius_100;

  if (props.accent) {
    borderRadius = `0 0 ${tokens.borderRadius_100} ${tokens.borderRadius_100}`;
  }

  return `
    border: ${tokens.borderWidth_100} solid ${tokens.color_gray_400};
    border-radius: ${borderRadius};
    border-top-width: ${props.accent ? '0' : '1px'};
  `;
};

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

export const body = () => `
  display: flex;
  border-bottom: ${tokens.borderWidth_100} solid ${tokens.color_gray_400};
  &:last-of-type {
    border-bottom: none;
  }
`;

export const sectionContent = () => `
  flex: 1 0 0;
`;

export const actions = () => `
  flex: 0;
  white-space: nowrap;
`;
