import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';
import { Label } from '../Label';
import { Stack } from '../Stack';
import { OptionalLabel } from '../OptionalLabel';
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
  const { children, label, labelHidden, required, optional, ...rest } = props;
  const systemProps = pick(rest);

  return (
    <StyledGroup {...systemProps}>
      {label && (
        <Box width="100%">
          <Label as="legend" label={label} labelHidden={labelHidden}>
            {required && (
              <Box as="span" pr="200" aria-hidden="true">
                *
              </Box>
            )}
            {optional && <OptionalLabel />}
          </Label>
        </Box>
      )}
      <Stack space="100">{children}</Stack>
    </StyledGroup>
  );
}

Group.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.node,
  required: PropTypes.bool,
  labelHidden: PropTypes.bool,
  optional: PropTypes.bool,
  ...createPropTypes(margin.propNames),
};

Group.displayName = 'Checkbox.Group';
export default Group;
