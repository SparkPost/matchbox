import { tokens } from '@sparkpost/design-tokens';

export const header = () => `
  display: flex;
  font-weight: ${tokens.fontWeight_semibold};
  padding: ${tokens.spacing_500} ${tokens.spacing_500} 0 ${tokens.spacing_500};
`;

export const headerText = () => `
  flex: 1 0 0;
  padding-right: ${tokens.spacing_100};
  font-size: ${tokens.fontSize_400};
  font-weight: ${tokens.fontWeight_semibold};
  line-height: ${tokens.lineHeight_300};
  color: ${tokens.color_gray_900};
  margin: 0;

  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export const panel = () => `
  position: relative;
  margin-bottom: ${tokens.spacing_400};
  background: ${tokens.color_white};
`;

export const panelInner = props => {
  return `
    border: ${tokens.borderWidth_100} solid ${tokens.color_gray_400};
    border-top-width: ${props.accent ? '0' : '1px'};
  `;
};

export const left = () => `
  text-align: left;
`;

export const right = () => `
  text-align: right;
`;

export const footer = () => `
  margin-top: -${tokens.spacing_300};
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
    default:
      color = tokens.color_blue_700;
  }

  return `
    height: 3px;
    background-color: ${color};
  `;
};

export const body = () => `
  display: flex;
  padding: 18px ${tokens.spacing_500};
  border-bottom: ${tokens.borderWidth_100} solid ${tokens.color_gray_400};
  &:last-of-type {
    border-bottom: none;
  }
`;

export const sectionContent = () => `
  flex: 1 0 0;
  > *:last-child {
    margin-bottom: 0;
  }
`;

export const actions = () => `
  flex: 0;
  white-space: nowrap;
`;
