import React from 'react';
import { Box } from '../Box';
import { Label } from '../Label';
import { Stack } from '../Stack';
import { OptionalLabel } from '../OptionalLabel';
import styled from 'styled-components';
import { margin, MarginProps } from 'styled-system';
import { pick } from '@styled-system/props';

const StyledGroup = styled('fieldset')`
  border: none;
  padding: 0;
  ${margin}
`;

type CheckboxGroupProps = {
  children: React.ReactNode;
  className?: string;
  'data-id'?: string;
  label?: React.ReactNode;
  required?: boolean;
  labelHidden?: boolean;
  optional?: boolean;
} & MarginProps;

function Group(props: CheckboxGroupProps): JSX.Element {
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
    <StyledGroup {...systemProps} className={className} data-id={dataId}>
      {label && (
        <Box width="100%">
          <Label as="legend" labelHidden={labelHidden}>
            <Box as="span" pr="200">
              {label}
            </Box>
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

Group.displayName = 'Checkbox.Group';
export default Group;
