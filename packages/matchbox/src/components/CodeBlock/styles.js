import { tokens } from '@sparkpost/design-tokens';

const lineHeight = '25px';
const fontSize = tokens.fontSize_200;

export const pre = props => `
  position: relative;
  display: grid;
  grid-template-columns: ${tokens.spacing_700} auto;
  font-family: ${tokens.fontFamily_monospace};
  border-radius: ${tokens.borderRadius_100}
  background-color: ${props.dark ? tokens.color_gray_900 : tokens.color_gray_100};
  border: 1px solid ${tokens.color_gray_400};
  overflow: scroll;
  padding: ${tokens.spacing_600} ${tokens.spacing_400} ${tokens.spacing_600} 0;
`;

export const code = props => `
  position: absolute;
  padding: ${tokens.spacing_600} ${tokens.spacing_600} ${tokens.spacing_600} ${tokens.spacing_800};
  color: ${props.dark ? tokens.color_white : tokens.color_gray_800};
  font-size: ${fontSize};
  line-height: ${lineHeight};
`;

export const line = props => `
  display: block;
  text-align: right;
  line-height: ${lineHeight};
  font-size: ${fontSize};
  color: ${props.dark ? tokens.color_white : tokens.color_gray_700};
  user-select: none;
`;

export const prefix = () => `
  padding-right: ${tokens.spacing_200};
`;

export const chevron = () => `
  width: ${tokens.fontSize_400};
  height: ${tokens.fontSize_400};
  fill: ${tokens.color_gray_500};
`;
