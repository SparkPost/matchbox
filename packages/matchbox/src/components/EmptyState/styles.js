import styled from 'styled-components';
import css from '@styled-system/css';
import { Box } from '../Box';

export const StyledContent = styled(Box)`
  p {
    color: ${props => props.theme.colors.gray['700']};
    ${css({
      fontSize: '400',
      lineHeight: '400',
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
