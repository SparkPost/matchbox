import { tokens } from '@sparkpost/design-tokens';

export const table = () => `
  position: relative;
  text-align: left;
  width: 100%;
  padding: 0;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export const cell = () => `
  word-break: break-all;
`;

export const row = () => `
  border-bottom: ${tokens.borderWidth_100} solid ${tokens.color_gray_400};

  &:last-of-type:not(:first-of-type) {
    border-bottom: none;
  }
`;
