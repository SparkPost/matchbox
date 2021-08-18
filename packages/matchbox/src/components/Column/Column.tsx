import React from 'react';
import { display, DisplayProps } from 'styled-system';
import { ColumnsContext } from '../Columns/context';
import styled from 'styled-components';
import { ResponsiveValue } from 'styled-system';
import { SpaceKeys } from '../ThemeProvider/theme';
import { Box } from '../Box';
import { gutter } from './styles';

const StyledColumn = styled(Box)`
  ${display}
  ${gutter}

  &:first-child {
    padding-top: 0;
  }
`;

type ColumnProps = {
  children?: React.ReactNode;
  width?: 'content' | ResponsiveValue<SpaceKeys | number>;
  'data-id'?: string;
  className?: string;
  reverse?: ResponsiveValue<boolean>;
} & DisplayProps;

const Column = React.forwardRef(function Column(props: ColumnProps, ref) {
  const { width, children, className, display } = props;
  const { space, collapsed } = React.useContext(ColumnsContext);

  let widthOverride = null;

  if (collapsed) {
    widthOverride = '100%';
  }

  if (width === 'content') {
    widthOverride = 'auto';
  }

  return (
    <StyledColumn
      display={display}
      data-id={props['data-id']}
      className={className}
      width={widthOverride || width}
      flex={!width && !collapsed ? '1' : ''}
      pt={collapsed ? space : null}
      gutter={space}
      ref={ref}
      tabIndex="-1"
    >
      {children}
    </StyledColumn>
  );
}) as React.ForwardRefExoticComponent<ColumnProps>;

Column.displayName = 'Column';

export default Column;
