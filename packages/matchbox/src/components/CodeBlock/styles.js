import { tokens } from '@sparkpost/design-tokens';

const lineHeight = '25px';
const fontSize = tokens.fontSize_200;

export const pre = () => `
  display: grid;
  grid-gap: ${tokens.spacing_700};
  grid-template-columns: ${tokens.spacing_600} 90%;
  font-family: ${tokens.fontFamily_monospace};
  border-radius: ${tokens.borderRadius_100}
  background-color: ${tokens.color_gray_100};
  border: 1px solid ${tokens.color_gray_400};
  padding: ${tokens.spacing_600} ${tokens.spacing_400} ${tokens.spacing_600} 0;
`;

export const code = () => `
  color: ${tokens.color_gray_800};
  font-size: ${fontSize};
  line-height: ${lineHeight};
`;

export const line = () => `
  display: block;
  text-align: right;
  line-height: ${lineHeight};
  font-size: ${fontSize};
  color: ${tokens.color_gray_500};
  user-select: none;
`;

export const prefix = () => `
  padding-left: ${tokens.spacing_600};
`;
