import { tokens } from '@sparkpost/design-tokens';

const gutterWidth = tokens.spacing_400;

export const grid = `
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: -${gutterWidth};
`;

// todo, add to grid
// const gridClasses = classnames(
//   start && styles[`start-${start}`],
//   center && styles[`center-${center}`],
//   end && styles[`end-${end}`],
//   top && styles[`top-${top}`],
//   middle && styles[`middle-${middle}`],
//   bottom && styles[`bottom-${bottom}`],
//   around && styles[`around-${around}`],
//   between && styles[`between-${between}`],
//   className,
// );
