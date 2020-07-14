import { tokens } from '@sparkpost/design-tokens';

export const table = () => `
  position: relative;
  text-align: left;
  width: 100%;
  padding: 0;
  border-collapse: collapse;
`;

export const headerCell = ({ theme }) => `
  font-size: ${theme.fontSizes['200']};
  line-height: ${theme.lineHeights['300']};
  font-weight: ${theme.fontWeights.semibold};
  vertical-align: top;
`;

export const sticky = ({ isScrolled, freezeFirstColumn, theme }) => {
  return `
    td:first-child, th:first-child {
      ${
        freezeFirstColumn
          ? `
            transition: box-shadow ${tokens.motionDuration_medium} ${tokens.motionEase_in_out};
            position: sticky;
            left: 0;
            background: inherit;
          `
          : ''
      }
      ${isScrolled ? `box-shadow: ${theme.shadows['400']};` : ''}
    }
  `;
};

export const cell = () => `
  word-break: break-all;
  vertical-align: top;
`;

const zebra = theme => `
  tbody &:nth-of-type(even) {
    background: ${theme.colors.gray['100']};
  }
`;

export const row = ({ theme }) => `
  background: ${theme.colors.white};
  border: none;

  thead & {
    border-bottom:${theme.borders['400']};
  }

  ${zebra(theme)}
`;

export const wrapper = () => `
overflow: auto;
`;

export const totalsRow = ({ theme }) => `
  &:not(:last-child) {
    border-bottom: ${theme.borders['500']};
  }

  &:not(:first-child) {
    border-top: ${theme.borders['500']};
  }

  td {
    font-weight: ${theme.fontWeights.semibold};
  }
  ${zebra(theme)}
`;
