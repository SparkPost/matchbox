import { tokens } from '@sparkpost/design-tokens';

const gutterWidth = tokens.spacing_400;
export const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl'];
const orientationStyles = {
  start: `
    justify-content: flex-start;
    text-align: start;
  `,
  center: `
    justify-content: center;
    text-align: center;
  `,
  end: `
    justify-content: flex-end;
    text-align: end;
  `,
  top: `
    align-items: flex-start;
  `,
  middle: `
    align-items: center;
  `,
  bottom: `
    align-items: flex-end;
  `,
  around: `
    justify-content: space-around;
  `,
  between: `
    justify-content: space-between;
  `,
};

export const gridStyle = props => {
  const orientationStyle = breakpoints
    .flatMap(breakpoint => {
      const css = Object.keys(props)
        .filter(key => props[key] === breakpoint && orientationStyles[key])
        .map(key => orientationStyles[key])
        .join('\n');

      // break early to avoid returning an empty @media
      if (css === '') {
        return css;
      }

      // this is baseline with no media query constraints
      if (breakpoint === 'xs') {
        return css;
      }

      const mediaQuery = tokens[`mediaQuery_${breakpoint}`];

      return `
      @media only screen and (min-width: ${mediaQuery}) {
        ${css}
      }
    `;
    })
    .join('\n');

  return `
    box-sizing: border-box;
    display: flex;
    flex: 0 1 auto;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: -${gutterWidth};

    ${orientationStyle}
  `;
};
