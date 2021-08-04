export const buttonReset: "\n  border: none;\n  margin: 0;\n  padding: 0;\n  overflow: visible;\n  width: auto;\n  background: transparent;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  -webkit-appearance: none;\n\n  &::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n  }\n";
export const visuallyHidden: "\n  border: 0 !important;\n  clip: rect(1px, 1px, 1px, 1px) !important;\n  clip-path: inset(50%) !important;\n  height: 1px !important;\n  margin: -1px !important;\n  overflow: hidden !important;\n  padding: 0 !important;\n  position: absolute !important;\n  width: 1px !important;\n  word-wrap: normal !important;\n";
export function focusOutline({ color, modifier, offset, radius, }?: {
    color?: any;
    modifier?: string;
    offset?: string;
    radius?: any;
}): string;
