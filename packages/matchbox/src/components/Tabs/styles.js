import { buttonReset } from '../../styles/helpers';
import { tokens } from '@sparkpost/design-tokens';

export const tabStyles = ({ selected, fitted }) => `
  ${buttonReset}
  display: inline-block;
  cursor: pointer;
  position: relative;
  flex: ${fitted ? '1' : '0'};
  text-decoration: none;
  
  padding: 0 ${tokens.spacing_200};
  ${'' /* Not a token, equivalent to 20px to enqure 10rem of spacing between text */}
  margin: 0 ${!fitted ? '1.25rem' : '0'};

  font-size: ${tokens.fontSize_200};
  font-weight: ${tokens.fontWeight_medium};
  line-height: 3.75rem; ${'' /* Equivalent to 60px */}
  white-space: nowrap;

  &, &:visited {
    color: ${selected ? tokens.color_blue_700 : tokens.color_gray_700};
  }

  &:after {
    display: block;
    position: absolute;
    content: '';
    bottom: 0px;
    left: 0;
    right: 0;
    height: ${tokens.spacing_100};
    background: ${selected ? tokens.color_blue_700 : 'transparent'};
    transition: ${tokens.motionDuration_fast} ${tokens.motionEase_in_out};
  }

  &:hover {
    ${!selected ? `color: ${tokens.color_gray_900};` : ''};
    &:after {
      ${!selected ? `background: ${tokens.color_gray_400};` : ''}
    }
  }
`;

export const overflowTabs = ({ isOverflowing }) => `
  position: absolute;
  left: 0;
  top: 0;
  right:0;
  display: flex;
  visibility: ${isOverflowing ? 'hidden' : 'visible'};
  pointer-events: ${isOverflowing ? 'none' : 'auto'};
`;

export const containerStyles = () => `
  position: relative;
  ${'' /* TODO Update with sizing tokens */}
  height: 3.75rem; 
  border-bottom: ${tokens.borderWidth_100} solid ${tokens.color_gray_400};
`;
