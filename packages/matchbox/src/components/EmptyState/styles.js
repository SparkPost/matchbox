import styled from 'styled-components';
import css from '@styled-system/css';
import { Box } from '../Box';

export const StyledContent = styled(Box)`
  p {
    color: ${props => props.theme.colors.gray['900']};
    ${css({
      fontSize: '300',
      lineHeight: '300',
    })};
  }
`;

export const StyledImage = styled(Box)`
  & > img {
    width: 100%;
  }
  & > svg {
    height: 100%;
    width: 100%;
  }
`;

export const StyledImageLegacy = styled(Box)`
  transform: translate(0, -50%);
  & > svg {
    height: 100%;
    width: 100%;
  }
`;
