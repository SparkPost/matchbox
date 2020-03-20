import styled from 'styled-components';
import { tokens } from '@sparkpost/design-tokens';
import { UnstyledLink } from '../UnstyledLink';
import { Box } from '../Box';

export const StyledSection = styled(Box)`
  border-top: ${tokens.borderWidth_100} solid ${tokens.color_gray_400};
  padding-bottom: ${tokens.spacing_200};
  padding-top: ${tokens.spacing_200};

  &:first-child {
    border: none;
    padding-top: ${tokens.spacing_0};
  }

  &:last-child {
    padding-bottom: ${tokens.spacing_0};
  }
`;

export const StyledLink = styled(UnstyledLink)`
  display: block;
  padding: ${tokens.spacing_200} ${tokens.spacing_300};
  transition: ${tokens.motionDuration_fast} ${tokens.motionEase_in_out};
  transition-property: color, background;

  &,
  &:visited {
    text-decoration: none;
    color: ${props => (props.highlighted ? tokens.color_blue_700 : tokens.color_gray_900)};
    background: ${props => (props.highlighted ? tokens.color_blue_100 : 'none')};
  }

  &:hover {
    color: ${tokens.color_blue_700};
    background: ${tokens.color_blue_100};
  }
`;
