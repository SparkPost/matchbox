import styled from 'styled-components';
import { buttonReset } from '../../styles/helpers';
import { tokens } from '@sparkpost/design-tokens';

import { UnstyledLink } from '../UnstyledLink';

export const chevron = props => `
  position: absolute;
  z-index: ${props.theme.zIndex_default};
  top: 3%;
  right: ${props.theme.space['300']};
  height: 100%;
  fill: ${props.theme.colors.blue['700']};
  user-select: none;
  pointer-events: none;
  ${props.disabled ? 'display: none' : ''};
`;

export const StyledLink = styled(UnstyledLink)`
  ${buttonReset}
  text-decoration: none;
  display: block;
  width: 100%;
  padding: ${tokens.spacing_200} ${tokens.spacing_300};
  transition: ${tokens.motionDuration_fast} ${tokens.motionEase_in_out};
  transition-property: color, background;
  font-size: ${tokens.fontSize_300};
  line-height: ${tokens.lineHeight_300};
  text-align: left;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  background: ${props => (props.active ? tokens.color_blue_200 : '')};
  color: ${props =>
    props.disabled ? tokens.color_gray_600 : props.active ? tokens.color_blue_700 : ''};

  &:focus {
    border: none;
    outline: none;
    box-shadow: 0;
    background: ${props =>
      props.disabled ? '' : props.active ? tokens.color_blue_200 : tokens.color_blue_100};
  }

  &:hover {
    background: ${props =>
      props.disabled ? '' : props.active ? tokens.color_blue_200 : tokens.color_blue_100};
  }
`;
