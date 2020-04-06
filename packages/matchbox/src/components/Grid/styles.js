import { tokens } from '@sparkpost/design-tokens';

const gutterWidth = tokens.spacing_400;
export const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl'];
const alignmentStyleMap = {
  start: {
    justifyContent: 'flex-start',
    textAlign: 'start',
  },
  center: {
    justifyContent: 'center',
    textAlign: 'center',
  },
  end: {
    justifyContent: 'flex-end',
    textAlign: 'end',
  },
  top: {
    alignItems: 'flex-start',
  },
  middle: {
    alignItems: 'center',
  },
  bottom: {
    alignItems: 'flex-end',
  },
  around: {
    justifyContent: 'space-around',
  },
  between: {
    justifyContent: 'space-between',
  },
};

const wrapStyleWithMediaQuery = (breakpoint, style) => {
  const mediaQueryWidth = tokens[`mediaQuery_${breakpoint}`];

  // do not wrap if no style for breakpoint or breakpoint is extra small
  if (!Object.keys(style).length || breakpoint === 'xs') {
    return style;
  }

  return {
    [`@media only screen and (min-width: ${mediaQueryWidth})`]: style,
  };
};

export const gridStyle = props => {
  const breakpointStyle = breakpoints.reduce((style, breakpoint) => {
    // match props with alignment style and merge for breakpoint
    const alignmentStyle = Object.keys(props).reduce(
      (obj, key) => (props[key] === breakpoint ? { ...obj, ...alignmentStyleMap[key] } : obj),
      {},
    );

    return { ...style, ...wrapStyleWithMediaQuery(breakpoint, alignmentStyle) };
  }, {});

  return {
    boxSizing: 'border-box',
    display: 'flex',
    flex: '0 1 auto',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: `-${gutterWidth}`,
    ...breakpointStyle,
  };
};

const calculateGridColumnWidth = index => (100 / 12) * index;

export const gridColumnStyle = props => {
  const breakpointStyle = breakpoints.reduce((style, breakpoint) => {
    const breakpointIndex = props[breakpoint];
    const breakpointOffsetIndex = props[`${breakpoint}Offset`];
    const columnStyle = {
      ...(breakpointIndex
        ? {
            boxSizing: 'border-box',
            flex: `0 0 ${calculateGridColumnWidth(breakpointIndex)}%`,
            maxWidth: `${calculateGridColumnWidth(breakpointIndex)}%`,
            paddingLeft: gutterWidth,
            textAlign: 'left',
          }
        : {}),
      ...(breakpointOffsetIndex
        ? {
            marginLeft: `${calculateGridColumnWidth(breakpointOffsetIndex)}%`,
          }
        : {}),
    };

    return { ...style, ...wrapStyleWithMediaQuery(breakpoint, columnStyle) };
  }, {});

  return {
    boxSizing: 'border-box',
    flex: '1 0 0',
    maxWidth: '100%',
    paddingLeft: gutterWidth,
    textAlign: 'left',
    ...breakpointStyle,
  };
};
