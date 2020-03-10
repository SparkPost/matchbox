import { tokens } from '@sparkpost/design-tokens';

export const table = () => `
  position: relative;
  text-align: left;
  width: 100%;
  padding: 0;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export const headerCell = () => `
  font-size: ${tokens.fontSize_200};
  line-height: ${tokens.lineHeight_200};
  font-weight: ${tokens.fontWeight_semibold};
`;

export const cell = () => `
  word-break: break-all;
`;

export const row = props => `
  background: ${tokens.color_white};
  border-bottom: ${
    props.header ? `${tokens.borderWidth_100} solid ${tokens.color_gray_400}` : 'none'
  }
  &:nth-of-type(odd) {
    background: ${props.header ? tokens.color_white : tokens.color_gray_100};
  }
`;
