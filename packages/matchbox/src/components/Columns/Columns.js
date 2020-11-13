import React from 'react';
import PropTypes from 'prop-types';
import propTypes from '@styled-system/prop-types';
import styled from 'styled-components';
import { pick } from '../../helpers/props';
import { createPropTypes } from '@styled-system/prop-types';
import { margin } from 'styled-system';
import { ColumnsContext } from './context';
import { verticalAlignment, horizontalAlignment, reverseColumns, negativeMargin } from './styles';
import useBreakpoint from '../../hooks/useBreakpoint';
import { Box } from '../Box';

const breakpoints = ['default', 'xs', 'sm', 'md', 'lg', 'xl'];

const StyledColumns = styled(Box)`
  ${verticalAlignment}
  ${horizontalAlignment}
  ${reverseColumns}
  ${negativeMargin}
`;

const Columns = React.forwardRef(function Columns(props, ref) {
  const { children, reverse, space, alignY, align, collapseBelow, ...rest } = props;
  const systemProps = pick(rest, margin.propNames);
  const breakpoint = useBreakpoint();

  const collapsed = React.useMemo(() => {
    const arr = breakpoints.slice(breakpoints.findIndex(bp => bp === breakpoint));
    return arr.includes(collapseBelow);
  }, [breakpoint, collapseBelow]);

  return (
    <Box {...systemProps} data-id={props['data-id']}>
      <StyledColumns
        display="flex"
        alignY={alignY}
        align={align}
        ref={ref}
        reverse={reverse}
        gutter={space}
        flexWrap={collapsed ? 'wrap' : 'nowrap'}
        tabIndex="-1"
      >
        <ColumnsContext.Provider value={{ space, collapsed }}>{children}</ColumnsContext.Provider>
      </StyledColumns>
    </Box>
  );
});

Columns.displayName = 'Columns';

Columns.propTypes = {
  children: PropTypes.node,
  'data-id': PropTypes.string,
  reverse: PropTypes.bool,
  space: propTypes.space.padding,
  alignY: PropTypes.oneOf(['top', 'center', 'bottom']),
  align: PropTypes.oneOf(['left', 'right', 'center']),
  collapseBelow: PropTypes.oneOf(breakpoints),
  ...createPropTypes(margin.propNames),
};

Columns.defaultProps = {
  space: '500',
};

export default Columns;
