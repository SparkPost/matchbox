import React from 'react';
import PropTypes from 'prop-types';
import { createPropTypes } from '@styled-system/prop-types';
import styled from 'styled-components';
import { tokens } from '@sparkpost/design-tokens';
import { margin } from 'styled-system';
import { pick } from '../../helpers/systemProps';
import { Box } from '../Box';

const StyledWrapper = styled.div`
  ${margin}
`;

const LabelValue = React.forwardRef(function LabelValue(props, userRef) {
  const { label, children, className, orientation, ...rest } = props;

  const systemProps = pick(rest, margin.propNames);

  return (
    <StyledWrapper className={className} {...systemProps} ref={userRef} tabIndex="-1">
      <Box
        display={orientation === 'horizontal' ? 'grid' : 'block'}
        gridGap={orientation === 'horizontal' ? '300' : ''}
        gridTemplateColumns={orientation === 'horizontal' ? `${tokens.spacing_900} 1fr` : ''}
      >
        <Box fontSize="200" fontWeight="semibold" mb={orientation === 'vertical' ? '100' : ''}>
          {label}
        </Box>
        <Box>{children}</Box>
      </Box>
    </StyledWrapper>
  );
});

LabelValue.displayName = 'LabelValue';
LabelValue.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  ...createPropTypes(margin.propNames),
};

LabelValue.defaultProps = {
  orientation: 'vertical',
};

export default LabelValue;
