import { buttonReset, focusOutline } from '../../styles/helpers';
import { tokens } from '@sparkpost/design-tokens';

export const tabStyles = ({
  $selected,
  $fitted,
}: {
  $selected?: boolean;
  $fitted?: boolean;
}): string => `
  ${buttonReset}
  
  ${focusOutline({ offset: '0px', modifier: '&' })}
  &:focus:not(:focus-visible):after {
    box-shadow: none;
  }
  ${focusOutline({ offset: '0px', modifier: '&:focus-visible' })}

  display: inline-block;
  cursor: pointer;
  position: relative;
  flex: ${$fitted ? '1' : '0'};
  text-decoration: none;
  outline: none;
  text-align: center;

  padding: 0 ${tokens.spacing_400};
  margin-left: ${$fitted ? '0' : tokens.sizing_200};

  &:first-child {
    margin-left: 0;
  }

  font-size: ${tokens.fontSize_300};
  font-weight: ${tokens.fontWeight_medium};
  line-height: ${tokens.sizing_650};
  white-space: nowrap;

  background: ${$selected ? tokens.color_blue_200 : 'transparent'};
  transition: ${tokens.motionDuration_fast} ${tokens.motionEase_in_out};

  &, &:visited {
    color: ${$selected ? tokens.color_blue_700 : tokens.color_gray_700};
  }

  &:before {
    display: block;
    position: absolute;
    content: '';
    bottom: 0px;
    left: 0;
    right: 0;
  }

  &:before {
    height: 1px;
    background: ${$selected ? tokens.color_blue_700 : 'transparent'};
    transition: ${tokens.motionDuration_fast} ${tokens.motionEase_in_out};
  }
  
  &:hover {
    ${
      !$selected
        ? `
      color: ${tokens.color_gray_900};
      background: ${tokens.color_gray_200};
    `
        : ''
    };
    &:before {
      ${!$selected ? `background: ${tokens.color_gray_700};` : ''}
    }
  }
  
  &:after {
    top: 2px;
  }
`;

export const overflowTabs = ({ isOverflowing }: { isOverflowing?: boolean }): string => `
  position: absolute;
  left: 0;
  top: 0;
  right:0;
  display: flex;
  visibility: ${isOverflowing ? 'hidden' : 'visible'};
  pointer-events: ${isOverflowing ? 'none' : 'auto'};
  overflow: ${isOverflowing ? 'hidden' : 'unset'};
`;

export const containerStyles = (): string => `
  position: relative;
  height: ${tokens.sizing_650};
`;
