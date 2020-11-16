import React from 'react';
import PropTypes from 'prop-types';
import { createPropTypes } from '@styled-system/prop-types';
import styled from 'styled-components';
import { tokens } from '@sparkpost/design-tokens';
import { margin } from 'styled-system';
import { pick } from '../../helpers/props';
import { getChild } from '../../helpers/children';
import { Box } from '../Box';

const StyledWrapper = styled.div`
  ${margin}
`;

const Label = ({ children, orientation }) => (
  <Box fontSize="200" fontWeight="semibold" mb={orientation === 'vertical' ? '100' : ''}>
    {children}
  </Box>
);

Label.displayName = 'LabelValue.Label';

const Value = ({ children }) => <Box>{children}</Box>;

Value.displayName = 'LabelValue.Value';

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
        {getChild('LabelValue.Label', children, { orientation })}
        {getChild('LabelValue.Value', children)}
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

LabelValue.Label = Label;
LabelValue.Value = Value;

export default LabelValue;
