import React from 'react';
import styled from 'styled-components';
import { gridStyle } from './styles';
import type { BreakpointsWithoutDefault } from '../../helpers/types';
import Column from './Column';

const StyledGrid = styled('div')<{
  $start?: BreakpointsWithoutDefault;
  $center?: BreakpointsWithoutDefault;
  $end?: BreakpointsWithoutDefault;
  $top?: BreakpointsWithoutDefault;
  $middle?: BreakpointsWithoutDefault;
  $bottom?: BreakpointsWithoutDefault;
  $around?: BreakpointsWithoutDefault;
  $between?: BreakpointsWithoutDefault;
}>`
  ${gridStyle}
`;

type GridProps = {
  start?: BreakpointsWithoutDefault;
  center?: BreakpointsWithoutDefault;
  end?: BreakpointsWithoutDefault;
  top?: BreakpointsWithoutDefault;
  middle?: BreakpointsWithoutDefault;
  bottom?: BreakpointsWithoutDefault;
  around?: BreakpointsWithoutDefault;
  between?: BreakpointsWithoutDefault;
  children: React.ReactNode;
};

function Grid(props: GridProps): JSX.Element {
  const { children, start, center, end, top, middle, bottom, around, between } = props;
  return (
    <StyledGrid
      $start={start}
      $center={center}
      $end={end}
      $top={top}
      $middle={middle}
      $bottom={bottom}
      $around={around}
      $between={between}
    >
      {children}
    </StyledGrid>
  );
}

Grid.displayName = 'Grid';
Grid.Column = Column;
export default Grid;
