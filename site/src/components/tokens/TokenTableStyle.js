import { tokens } from '@sparkpost/design-tokens';

export const tokenTable = `
  table-layout: fixed;
  width: 100%;

  td {
    vertical-align: top;
  }
`;

export const tableCell = props => {
  const { type } = props;
  let fontWeight = tokens.fontWeight_normal;

  if (type === 'friendly') {
    fontWeight = tokens.fontWeight_medium;
  }

  return `
    padding: 0.5rem 0;
    vertical-align: middle;
    text-align: right;
    font-weight: ${fontWeight};
    font-size: ${tokens.fontSize_300};
    &:first-child {
      text-align: left;
    }
  `;
};
