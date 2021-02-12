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

const Label = ({ children, orientation, appearance }) => (
  <Box
    fontSize="200"
    fontWeight="semibold"
    mb={orientation === 'vertical' ? '100' : ''}
    color={appearance == 'inverted' ? 'white' : ''}
  >
    {children}
  </Box>
);

Label.displayName = 'LabelValue.Label';

const Value = ({ children, appearance }) => (
  <Box color={appearance == 'inverted' ? 'white' : ''}>{children}</Box>
);

Value.displayName = 'LabelValue.Value';

const LabelValue = React.forwardRef(function LabelValue(props, userRef) {
  const { label, children, className, orientation, appearance, ...rest } = props;

  const systemProps = pick(rest, margin.propNames);

  return (
    <StyledWrapper className={className} {...systemProps} ref={userRef} tabIndex="-1">
      <Box
        display={orientation === 'horizontal' ? 'grid' : 'block'}
        gridGap={orientation === 'horizontal' ? '300' : ''}
        gridTemplateColumns={orientation === 'horizontal' ? `${tokens.spacing_900} 1fr` : ''}
      >
        {getChild('LabelValue.Label', children, { orientation, appearance })}
        {getChild('LabelValue.Value', children, { appearance })}
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
  appearance: PropTypes.oneOf(['inverted']),
  ...createPropTypes(margin.propNames),
};

LabelValue.defaultProps = {
  orientation: 'vertical',
};

LabelValue.Label = Label;
LabelValue.Value = Value;

export default LabelValue;
