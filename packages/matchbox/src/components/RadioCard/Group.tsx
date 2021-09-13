import React from 'react';
import styled from 'styled-components';
import { margin, MarginProps } from 'styled-system';
import { Box } from '../Box';
import { Columns } from '../Columns';
import { Column } from '../Column';
import { Label } from '../Label';
import { OptionalLabel } from '../OptionalLabel';
import { Stack } from '../Stack';
import { Breakpoints } from '../../helpers/types';

import { pick } from '../../helpers/props';

const Fieldset = styled.fieldset`
  border: none;
  padding: 0;
  ${margin}
`;

const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl'];

export type RadioCardGroupProps = {
  children?: React.ReactNode;
  collapseBelow?: Breakpoints;
  'data-id'?: string;
  label: string;
  labelHidden?: boolean;
  optional?: boolean;
  id?: string;
  orientation?: 'horizontal' | 'vertical' | 'grid';
} & MarginProps;

const Group = React.forwardRef<HTMLFieldSetElement, RadioCardGroupProps>(function Group(
  props,
  userRef,
) {
  const {
    children,
    collapseBelow,
    id,
    label,
    labelHidden,
    orientation = 'vertical',
    optional,
    ...rest
  } = props;

  const items = React.Children.toArray(children);
  const systemProps = pick(rest, margin.propNames);

  return (
    <Fieldset data-id={rest['data-id']} id={id} ref={userRef} {...systemProps}>
      <Label as="legend" labelHidden={labelHidden}>
        <Box as="span" pr="200">
          {label}
        </Box>
        {optional && <OptionalLabel />}
      </Label>

      {orientation === 'horizontal' && (
        <Columns space="300" collapseBelow={collapseBelow}>
          {items.map((item, i) => (
            <Column key={i}>{item}</Column>
          ))}
        </Columns>
      )}

      {orientation === 'vertical' && (
        <Stack space="300">
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </Stack>
      )}

      {orientation === 'grid' && (
        <Box display="grid" gridTemplateColumns={['1fr', null, '1fr 1fr']} gridGap="300">
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </Box>
      )}
    </Fieldset>
  );
});

Group.displayName = 'RadioCard.Group';

export default Group;
