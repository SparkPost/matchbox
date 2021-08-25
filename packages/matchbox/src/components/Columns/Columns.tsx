import React from 'react';
import styled from 'styled-components';
import { pick } from '../../helpers/props';
import { margin, MarginProps } from 'styled-system';
import { ColumnsContext } from './context';
import { verticalAlignment, horizontalAlignment, reverseColumns, negativeMargin } from './styles';
import useBreakpoint from '../../hooks/useBreakpoint';
import { Box } from '../Box';
import { ResponsiveValue } from 'styled-system';
import { SpaceKeys } from '../ThemeProvider/theme';
import { AlignX, AlignY, Breakpoints } from '../../helpers/types';

const breakpoints = ['default', 'xs', 'sm', 'md', 'lg', 'xl'];

type AlignProps = {
  $align?: ResponsiveValue<AlignX>;
  $alignY?: ResponsiveValue<AlignY>;
};

type ReverseProp = {
  $reverse?: ResponsiveValue<boolean>;
};

type GutterProp = {
  $gutter?: ResponsiveValue<SpaceKeys | string>;
};

const StyledColumns = styled(Box)<AlignProps & ReverseProp & GutterProp>`
  ${verticalAlignment}
  ${horizontalAlignment}
  ${reverseColumns}
  ${negativeMargin}
`;

interface ColumnsProps extends React.ComponentPropsWithRef<'div'>, MarginProps {
  children?: React.ReactNode;
  reverse?: ResponsiveValue<boolean>;
  space?: ResponsiveValue<SpaceKeys | string>;
  alignY?: ResponsiveValue<AlignY>;
  align?: ResponsiveValue<AlignX>;
  collapseBelow?: Breakpoints;
  'data-id'?: string;
}

const Columns = React.forwardRef(function Columns(props: ColumnsProps, userRef) {
  const { children, reverse, space = '500', alignY, align, collapseBelow, ...rest } = props;
  const systemProps = pick(rest, margin.propNames);
  const breakpoint = useBreakpoint();

  const collapsed = React.useMemo(() => {
    const arr = breakpoints.slice(breakpoints.findIndex((bp) => bp === breakpoint));
    return arr.includes(collapseBelow);
  }, [breakpoint, collapseBelow]);

  return (
    <Box {...systemProps} data-id={props['data-id']}>
      <StyledColumns
        display="flex"
        $alignY={alignY}
        $align={align}
        ref={userRef}
        $reverse={reverse}
        $gutter={space}
        flexWrap={collapsed ? 'wrap' : 'nowrap'}
        tabIndex={-1}
      >
        <ColumnsContext.Provider value={{ space, collapsed }}>{children}</ColumnsContext.Provider>
      </StyledColumns>
    </Box>
  );
}) as React.ForwardRefExoticComponent<ColumnsProps>;

Columns.displayName = 'Columns';

export default Columns;
