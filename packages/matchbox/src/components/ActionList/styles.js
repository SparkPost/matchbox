import styled from 'styled-components';
import { tokens } from '@sparkpost/design-tokens';
import { UnstyledLink } from '../UnstyledLink';
import { Box } from '../Box';
import { buttonReset } from '../../styles/helpers';

export const StyledSection = styled(Box)`
  border-top: ${props => props.theme.borders['300']};
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
  ${props => (props.isType ? buttonReset : '')}
  display: block;
  width: 100%;
  padding: ${tokens.spacing_300} ${tokens.spacing_400};
  transition: ${tokens.motionDuration_fast} ${tokens.motionEase_in_out};
  transition-property: color, background;
  cursor: pointer;
  font-size: ${tokens.fontSize_300};
  line-height: ${tokens.lineHeight_300};
  text-align: left;

  &,
  &:visited {
    text-decoration: none;
    color: ${props => (props.highlighted ? tokens.color_blue_700 : tokens.color_gray_900)};
    background: ${props => (props.highlighted ? tokens.color_blue_200 : 'none')};
  }

  &:hover,
  &:focus {
    outline: none;
    color: ${tokens.color_gray_900};
    background: ${tokens.color_blue_100};
  }

  ${'' /* This only applies to buttons, not links */}
  &:disabled {
    opacity: 0.6;
    pointer-events: none;
  }
`;
