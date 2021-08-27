import React from 'react';
import styled from 'styled-components';
import { cell, horizontalAlignment } from './styles';
import { TablePaddingContext } from './context';
import {
  padding,
  PaddingProps,
  fontSize,
  width,
  WidthProps,
  compose,
  ResponsiveValue,
} from 'styled-system';
import { pick } from '../../helpers/props';
import { AlignX } from '../../helpers/types';
import { Box, BoxProps } from '../Box';

type AlignXProp = ResponsiveValue<AlignX>;

type TableCellProps = {
  value?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  colSpan?: number;
  role?: string;
  rowSpan?: number;
  style?: React.CSSProperties;
  align?: AlignXProp;
  width?: string | number;
} & WidthProps &
  PaddingProps;

const cellSystem = compose(padding, fontSize, width);
const StyledCell = styled(Box)<
  BoxProps & {
    $align?: AlignXProp;
  }
>`
  ${cell}
  ${cellSystem}
  ${horizontalAlignment}
`;

const Cell = React.forwardRef<HTMLTableCellElement, TableCellProps>(function Cell(
  { align, value, children, className, colSpan, role, rowSpan, style, width, ...rest },
  userRef,
) {
  const paddingContext = React.useContext(TablePaddingContext);
  const paddingProps = pick(rest, padding.propNames);
  return (
    <StyledCell
      as="td"
      {...paddingContext}
      {...paddingProps}
      $align={align}
      width={width}
      fontSize={['200', null, '300']}
      className={className}
      colSpan={colSpan}
      ref={userRef}
      role={role}
      rowSpan={rowSpan}
      style={style}
    >
      {value || children}
    </StyledCell>
  );
});

Cell.displayName = 'Table.Cell';
export default Cell;
