import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';
import { Label } from '../Label';
import { ScreenReaderOnly } from '../ScreenReaderOnly';
import { OptionalLabel } from '../OptionalLabel';
import { Stack } from '../Stack';
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
  const {
    'data-id': dataId,
    children,
    className,
    label,
    labelHidden,
    required,
    optional,
    ...rest
  } = props;
  const systemProps = pick(rest);

  return (
    <StyledGroup {...systemProps} aria-required={required} className={className} data-id={dataId}>
      {label && (
        <Box width="100%">
          <Label as="legend" labelHidden={labelHidden}>
            <Box as="span" pr="200">
              {label}
              {required && <ScreenReaderOnly>Required</ScreenReaderOnly>}
            </Box>
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
  className: PropTypes.string,
  'data-id': PropTypes.string,
  label: PropTypes.node.isRequired,
  labelHidden: PropTypes.bool,
  optional: PropTypes.bool,
  required: PropTypes.bool,
  ...createPropTypes(margin.propNames),
};

Group.displayName = 'Radio.Group';
export default Group;
