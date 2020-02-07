import { tokens } from '@sparkpost/design-tokens';

export const actions = () => `
  flex: 0;
  white-space: nowrap;
`;

export const header = () => `
  display: flex;
  font-weight: ${tokens.fontWeight_semibold};
`;

export const headerText = () => `
  flex: 1 0 0;
  padding-right: ${tokens.spacing_100};
  font-size: ${tokens.fontSize_400};
  font-weight: ${tokens.fontWeight_semibold};
  line-height: ${tokens.lineHeight_300};
  color: ${tokens.color_gray_900};
  margin: 0;
  margin-bottom: ${tokens.spacing_300};

  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export const panel = () => `
  position: relative;
  margin-bottom: ${tokens.spacing_400};
  background: ${tokens.color_white};
`;

export const panelInner = () => `
  padding: ${tokens.spacing_500};
  border: ${tokens.borderWidth_100} solid ${tokens.color_gray_200};
  border-top-color: none;
`;

export const left = () => `
  text-align: left;
`;

export const right = () => `
  text-align: right;
`;

export const footer = () => `
    margin-top: -0.6875rem;
  `;
