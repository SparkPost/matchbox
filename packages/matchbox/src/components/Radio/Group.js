import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';
import { ScreenReaderOnly } from '../ScreenReaderOnly';
import { createPropTypes } from '@styled-system/prop-types';
import styled from 'styled-components';
import { margin } from 'styled-system';
import { pick } from '@styled-system/props';

const StyledGroup = styled('fieldset')`
  border: none;
  padding: 0;
  ${margin}
`;

function Group(props) {
  const { children, label, labelHidden, required, ...rest } = props;
  const systemProps = pick(rest);

  return (
    <StyledGroup {...systemProps}>
      {labelHidden ? (
        <ScreenReaderOnly>
          <legend>{label}</legend>
        </ScreenReaderOnly>
      ) : (
        <Box as="legend" lineHeight="200" fontSize="200" mb="100">
          {label}
          {required && (
            <Box as="span" pr="200" aria-hidden="true">
              *
            </Box>
          )}
        </Box>
      )}
      {children}
    </StyledGroup>
  );
}

Group.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.node.isRequired,
  labelHidden: PropTypes.bool,
  required: PropTypes.bool,
  ...createPropTypes(margin.propNames),
};

Group.displayName = 'Radio.Group';
export default Group;
