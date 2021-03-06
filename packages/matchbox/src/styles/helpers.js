import { tokens } from '@sparkpost/design-tokens';

export const buttonReset = `
  border: none;
  margin: 0;
  padding: 0;
  overflow: visible;
  width: auto;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: normal;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;

  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
`;

export const visuallyHidden = `
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important;
  clip-path: inset(50%) !important;
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  word-wrap: normal !important;
`;

/**
 * Creates focus styles on an :after pseudo-element. Defaults to blue 700.
 * @param string color, defaults to 'color_blue_700'
 * @param modifier CSS selector to target the pseudo-element, defaults to '&:focus'
 * @param offset string, pixel value, defaults to '3px'
 *
 * @example
 * const Styled = styled.div`
 *   ${focusOutline({ color: 'gray', modifier: '&:focus-within' })}
 * `;
 */
export const focusOutline = ({
  color = tokens.color_blue_700,
  modifier = '&:focus',
  offset = '3px',
  radius = tokens.borderRadius_200,
} = {}) => `
  position: relative;
  outline: none;

  &:after {
    position: absolute;
    content: "";
    display: block;
    top: -${offset};
    left: -${offset};
    right: -${offset};
    bottom: -${offset};
    transition: box-shadow ${tokens.motionDuration_fast};
    border-radius: ${radius};
    box-shadow: none;
    pointer-events: none;
  } 

  ${modifier}:after {
    z-index: ${tokens.zIndex_default};
    box-shadow: 0 0 0 2px ${color};
  }

`;
