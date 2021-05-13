import { system } from 'styled-system';

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
`;

export const cell = () => `
  word-break: break-all;
`;

const zebra = theme => `
  tbody &:nth-of-type(odd) td {
    background: ${theme.colors.gray[100]};
  }
  tbody &:nth-of-type(even) td, thead & th {
    background: ${theme.colors.white};
  }
`;

export const row = ({ theme }) => `
  border: none;

  thead & th {
    border-bottom:${theme.borders['300']};
  }

  ${zebra(theme)}
`;

export const totalsRow = ({ theme }) => `
  &:not(:last-child) td {
    border-bottom: ${theme.borders['500']};
  }

  &:not(:first-child) td {
    border-top: ${theme.borders['500']};
  }

  td {
    font-weight: ${theme.fontWeights.semibold};
  }
  ${zebra(theme)}
`;

export const verticalAlignment = system({
  alignY: {
    property: 'verticalAlign',
    defaultScale: {
      center: 'middle',
      top: 'top',
      bottom: 'bottom',
    },
  },
});

export const horizontalAlignment = system({
  align: {
    property: 'textAlign',
    defaultScale: {
      center: 'center',
      left: 'left',
      right: 'right',
    },
  },
});

export const wrapper = ({ freezeFirstColumn }) => `
  ${freezeFirstColumn ? 'overflow: auto;' : ''}
`;
