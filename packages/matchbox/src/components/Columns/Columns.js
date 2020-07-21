import React from 'react';
import PropTypes from 'prop-types';
import propTypes from '@styled-system/prop-types';
import styled from 'styled-components';
import { pick } from '../../helpers/systemProps';
import { createPropTypes } from '@styled-system/prop-types';
import { margin } from 'styled-system';
import { tokens } from '@sparkpost/design-tokens';
import { ColumnsContext } from './context';
import { verticalAlignment, horizontalAlignment, reverseColumns, negativeMargin } from './styles';
import { useWindowSize } from '../../helpers/geometry';
import { Box } from '../Box';

const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl'];

const StyledColumns = styled(Box)`
  ${verticalAlignment}
  ${horizontalAlignment}
  ${reverseColumns}
  ${negativeMargin}
`;

const Columns = React.forwardRef(function Columns(props, ref) {
  const { children, reverse, space, alignY, align, collapseBelow, ...rest } = props;
  const [collapsed, setCollapsed] = React.useState(false);

  const systemProps = pick(rest, margin.propNames);

  const windowSize = useWindowSize();

  React.useLayoutEffect(() => {
    if (collapseBelow) {
      if (windowSize.width <= parseInt(tokens[`mediaQuery_${collapseBelow}`], 10)) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    }
  }, [windowSize, collapseBelow]);

  return (
    <Box {...systemProps}>
      <StyledColumns
        display="flex"
        alignY={alignY}
        align={align}
        ref={ref}
        reverse={reverse}
        gutter={space}
        flexWrap={collapsed ? 'wrap' : 'nowrap'}
      >
        <ColumnsContext.Provider value={{ space, collapsed }}>{children}</ColumnsContext.Provider>
      </StyledColumns>
    </Box>
  );
});

Columns.displayName = 'Columns';

Columns.propTypes = {
  children: PropTypes.node,
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
