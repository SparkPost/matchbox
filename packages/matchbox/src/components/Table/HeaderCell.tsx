import React from 'react';
import styled from 'styled-components';
import { headerCell, horizontalAlignment } from './styles';
import { padding, width, WidthProps, compose, ResponsiveValue } from 'styled-system';
import { AlignX } from '../../helpers/types';
import { Box, BoxProps } from '../Box';

type AlignXProp = ResponsiveValue<AlignX>;

const headerSystem = compose(padding, width);

const StyledHeaderCell = styled(Box)<
  BoxProps & {
    $align?: AlignXProp;
  }
>`
  ${headerCell}
  ${headerSystem}
  ${horizontalAlignment}
`;

type TableHeaderCellProps = {
  'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other';
  align?: AlignXProp;
  value?: string;
  children?: React.ReactNode;
  className?: string;
  colSpan?: number;
  rowSpan?: number;
  role?: string;
  style?: React.CSSProperties;
  scope?: string;
} & WidthProps;

const HeaderCell = React.forwardRef<HTMLTableHeaderCellElement, TableHeaderCellProps>(
  function HeaderCell(
    {
      align,
      'aria-sort': ariaSort,
      value,
      children,
      className,
      colSpan,
      role,
      rowSpan,
      scope,
      style,
      width,
    },
    userRef,
  ) {
    return (
      <StyledHeaderCell
        as="th"
        p="450"
        $align={align}
        aria-sort={ariaSort}
        width={width}
        className={className}
        colSpan={colSpan}
        ref={userRef}
        role={role}
        rowSpan={rowSpan}
        scope={scope}
        style={style}
      >
        {value || children}
      </StyledHeaderCell>
    );
  },
);

HeaderCell.displayName = 'Table.HeaderCell';
export default HeaderCell;
