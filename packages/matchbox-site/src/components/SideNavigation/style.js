import { tokens } from '@sparkpost/design-tokens';
import styled from 'styled-components';

import { Link } from 'gatsby';

const listItem = props => {
  const baseStyles = `
    display: block;
    margin: 0 0 spacing(300) 0;
    position: relative;
    list-style-type: none;
  `;

  const selectedStyles = `
    & ${StyledLink} {
      color: ${tokens.color_blue_700};

      &:hover {
        color: ${tokens.color_blue_700};
      }

      &:after {
        content: '';
        display: block;
        position: absolute;
        bottom: 4px;
        left: 0;
        right: 0;
        height: 2px;
        background: ${tokens.color_blue_700};
      }
    }
  `;

  return props.selected ? baseStyles + selectedStyles : baseStyles;
};

const link = `
  position: relative;
  display: inline-block;
  padding: ${tokens.spacing_100} 0;

  text-decoration: none;
  color: ${tokens.color_gray_900};
  font-size: ${tokens.fontSize_400};
  line-height: ${tokens.lineHeight_400};
  font-weight: ${tokens.fontWeight_medium};
`;

export const StyledListItem = styled('li')`
  ${listItem}
`;

export const StyledLink = styled(Link)`
  ${link}
`;
