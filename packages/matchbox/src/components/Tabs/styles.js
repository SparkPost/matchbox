import { buttonReset } from '../../styles/helpers';
import { tokens } from '@sparkpost/design-tokens';

export const tabStyles = ({ selected, fitted }) => `
  ${buttonReset}
  position: relative;
  flex: ${fitted ? '1' : '0'};
  
  padding: 0 ${tokens.spacing_200};
  ${'' /* Not a token, equivalent to 20px to enqure 10rem of spacing between text */}
  margin: 0 ${!fitted ? '1.25rem' : '0'};

  font-size: ${tokens.fontSize_200};
  font-weight: ${tokens.fontWeight_medium};
  line-height: 3.75rem; ${'' /* Equivalent to 60px */}
  color: ${selected ? tokens.color_blue_700 : tokens.color_gray_700};

  &:after {
    display: block;
    position: absolute;
    content: '';
    bottom: -1px;
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

export const wrapperStyles = () => `
  display: flex;
  border-bottom: ${tokens.borderWidth_100} solid ${tokens.color_gray_400};
`;
