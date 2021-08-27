import { tokens } from '@sparkpost/design-tokens';
import { system } from 'styled-system';

export const table = () => `
  position: relative;
  text-align: left;
  width: 100%;
  padding: 0;
  border-collapse: collapse;
`;

export const headerCell = ({ theme }): string => `
  font-size: ${theme.fontSizes['200']};
  line-height: ${theme.lineHeights['300']};
  font-weight: ${theme.fontWeights.semibold};
`;

export const sticky = ({ isScrolled, $freezeFirstColumn }): string => {
  return `
    td:first-child, th:first-child {
      ${
        $freezeFirstColumn
          ? `
            position: sticky;
            left: 0;
            background: inherit;
            z-index: 1;
            &:after {
              transition: box-shadow ${tokens.motionDuration_medium} ${tokens.motionEase_in_out};
              ${isScrolled ? `box-shadow: 16px 0 10px -12px inset rgb(44 53 61 / 20%);` : ''}
              content: "";
              height: 100%;
              position: absolute;
              top: 0;
              right: -15px;
              width: 15px;
            }
          `
          : ''
      }
      
    }
  `;
};

export const cell = (): string => `
  word-break: break-all;
`;

const zebra = (theme): string => `
  tbody &:nth-of-type(odd) {
    background: ${theme.colors.gray['100']};
  }
`;

export const row = ({ theme }): string => `
  background: ${theme.colors.white};
  border: none;
  thead & {
    border-bottom:${theme.borders['300']};
  }
  ${zebra(theme)}
`;

export const totalsRow = ({ theme }): string => `
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

export const verticalAlignment = system({
  $alignY: {
    property: 'verticalAlign',
    defaultScale: {
      center: 'middle',
      top: 'top',
      bottom: 'bottom',
    },
  },
});

export const horizontalAlignment = system({
  $align: {
    property: 'textAlign',
    defaultScale: {
      center: 'center',
      left: 'left',
      right: 'right',
    },
  },
});

export const wrapper = ({ $freezeFirstColumn }): string => `
   ${$freezeFirstColumn ? 'overflow: auto;' : ''}
`;
