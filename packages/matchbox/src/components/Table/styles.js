import { tokens } from '@sparkpost/design-tokens';
import { system } from 'styled-system';

export const table = () => `
  position: relative;
  text-align: left;
  width: 100%;
  padding: 0;
  border-collapse: collapse;
`;

export const headerCell = () => `
  font-size: ${tokens.fontSize_200};
  line-height: ${tokens.lineHeight_300};
  font-weight: ${tokens.fontWeight_semibold};
`;

export const sticky = ({ isScrolled, freezeFirstColumn }) => {
  return `
    td:first-child, th:first-child {
      ${
        freezeFirstColumn
          ? `
            transition: box-shadow ${tokens.motionDuration_medium} ${tokens.motionEase_in_out};
            position: sticky;
            left: 0;
            background: inherit;
          `
          : ''
      }
      ${isScrolled ? `box-shadow: ${tokens.boxShadow_400};` : ''}
    }
  `;
};

export const cell = () => `
  word-break: break-all;
`;

export const row = () => `
  background: ${tokens.color_white};
  border: none;

  thead & {
    border-bottom: ${tokens.borderWidth_100} solid ${tokens.color_gray_400};
  }

  tbody &:nth-of-type(even) {
    background: ${tokens.color_gray_100};
  }
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

export const wrapper = ({ freezeFirstColumn }) => `
   ${freezeFirstColumn ? 'overflow: auto;' : ''}
`;
