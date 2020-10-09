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

export const StyledList = styled(Box)`
  list-style: none;
  padding-left: 0;
  & > li {
    position: relative;
    padding-left: 24px;
    padding-bottom: ${props => props.theme.space['500']};
    color: ${props => props.theme.colors.gray['900']};

    &:last-of-type {
      padding-bottom: 0;
      &:before {
        content: none;
      }
    }

    &:after {
      content: '';
      position: absolute;
      left: 0;
      top: ${props => props.theme.space['300']};
      transform: translateY(-50%);
      width: ${props => props.theme.space['200']};
      height: ${props => props.theme.space['200']};
      background: ${props => props.theme.colors.blue['700']};
      border-radius: 50%;
    }
  }
`;
