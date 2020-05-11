import { tokens } from '@sparkpost/design-tokens';

export const tokenTable = `
  table-layout: fixed;
  width: 100%;
  font-size: 18px;
`;

export const tableCell = props => {
  const { type } = props;
  let fontWeight = tokens.fontWeight_normal;

  if (type == 'friendly') {
    fontWeight = tokens.fontWeight_medium;
  }

  return `
    padding: 0.5rem 0;
    vertical-align: middle;
    text-align: right;
    font-weight: ${fontWeight};
    font-size: ${tokens.fontSize_200};
    &:first-child {
      text-align: left;
    }
  `;
};
