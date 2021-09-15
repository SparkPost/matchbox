import React from 'react';
import styled from 'styled-components';
import { gridColumnStyle } from './styles';

const StyledGridColumn = styled('div')`
  ${gridColumnStyle}
`;

type GridColumnProps = {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xsOffset?: number;
  smOffset?: number;
  mdOffset?: number;
  lgOffset?: number;
  children?: React.ReactNode;
};

function Column({ children, ...props }: GridColumnProps): JSX.Element {
  return <StyledGridColumn {...props}>{children}</StyledGridColumn>;
}

Column.displayName = 'Grid.Column';
export default Column;
