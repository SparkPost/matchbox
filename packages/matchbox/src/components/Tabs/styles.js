import { buttonReset } from '../../styles/helpers';
import { tokens } from '@sparkpost/design-tokens';

export const tabStyles = ({ selected, fitted }) => `
  ${buttonReset}
  display: inline-block;
  cursor: pointer;
  position: relative;
  flex: ${fitted ? '1' : '0'};
  text-decoration: none;
  outline: none;
  
  padding: 0 ${tokens.spacing_200};
  margin: 0 ${!fitted ? `${tokens.sizing_450}` : `${tokens.sizing_200}`};

  font-size: ${tokens.fontSize_200};
  font-weight: ${tokens.fontWeight_medium};
  line-height: ${tokens.sizing_750};
  white-space: nowrap;

  &, &:visited {
    color: ${selected ? tokens.color_blue_700 : tokens.color_gray_700};
  }

  &:after, &:before {
    display: block;
    position: absolute;
    content: '';
    bottom: 0px;
    left: 0;
    right: 0;
  }

  &:after {
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

  &:before {
    top: 0;
    border-radius: ${tokens.borderRadius_100};
    box-shadow:  0 0 0 2px ${tokens.color_white}, 0 0 0 4px ${tokens.color_blue_700};
    opacity: 0;
  }

  &:focus, &:active {
    &:before {
      opacity: 1;
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
  height: ${tokens.sizing_750};
`;
