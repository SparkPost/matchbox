import { themeGet } from '@styled-system/theme-get';

// Applies the negative and -1px transformation
function subtractPixel(value, direction) {
  return direction === 'top' ? `calc(-${value} - 1px)` : `-${value}`;
}

// Returns a styled-system space value if it exists
function themeValueOrString(value, props) {
  const themeValue = themeGet(`space.${value}`)(props);
  return themeValue === null ? value : themeValue;
}

// Manually parses styled-system responsive space props in order to transform values
export function negativeMargin(value, direction) {
  return (props) => {
    // For singular values
    if (!Array.isArray(value)) {
      const themeValue = themeValueOrString(value, props);

      return `
        margin-${direction}: ${subtractPixel(themeValue, direction)};
      `;
    }

    // For responsive prop arrays
    let css = '';

    for (const i in value) {
      const themeValue = themeValueOrString(value[i], props);

      if (i === '0') {
        css = `
          margin-${direction}: ${subtractPixel(themeValue, direction)};
        `;
      } else {
        css = `${css}
          @media screen and (min-width: ${props.theme.breakpoints[i - 1]}) {
            margin-${direction}: ${subtractPixel(themeValue, direction)};
          }
        `;
      }
    }

    return css;
  };
}
