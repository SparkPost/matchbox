import React from 'react';
import styled from 'styled-components';
import { margin, MarginProps } from 'styled-system';
import { Box } from '../Box';
import { Columns } from '../Columns';
import { Column } from '../Column';
import { Label } from '../Label';
import { OptionalLabel } from '../OptionalLabel';
import { HelpText } from '../HelpText';
import { Stack } from '../Stack';
import { Breakpoints } from '../../helpers/types';

import { pick } from '../../helpers/props';

const Fieldset = styled.fieldset`
  border: none;
  padding: 0;
  ${margin}
`;

const CardWrapper = styled.div<{ $space: 'compact' | 'default' }>`
  ${(props) => {
    if (props.$space === 'compact') {
      return `
        & > div:not(:first-child) label {
          margin-top: -1px;
          border-top-right-radius: 0;
          border-top-left-radius: 0;
        }

        & > div:not(:last-child) label {
          border-bottom-right-radius: 0;
          border-bottom-left-radius: 0;
        }
      `;
    }

    return ``;
  }}
`;

export type RadioCardGroupProps = {
  children?: React.ReactNode;
  collapseBelow?: Breakpoints;
  'data-id'?: string;
  helpText?: React.ReactNode;
  label: string;
  labelHidden?: boolean;
  optional?: boolean;
  id?: string;
  orientation?: 'horizontal' | 'vertical' | 'grid';
  space?: 'compact' | 'default';
} & MarginProps;

const Group = React.forwardRef<HTMLFieldSetElement, RadioCardGroupProps>(function Group(
  props,
  userRef,
) {
  const {
    children,
    collapseBelow,
    helpText,
    id,
    label,
    labelHidden,
    orientation = 'vertical',
    optional,
    space,
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
      {helpText && (
        <Box mb="200">
          <HelpText mt="0">{helpText}</HelpText>
        </Box>
      )}

      {orientation === 'horizontal' && (
        <Columns space="300" collapseBelow={collapseBelow}>
          {items.map((item, i) => (
            <Column key={i}>{item}</Column>
          ))}
        </Columns>
      )}

      {orientation === 'vertical' && (
        <CardWrapper $space={space}>
          {space !== 'compact' ? (
            <Stack space="300">
              {items.map((item, i) => (
                <div key={i}>{item}</div>
              ))}
            </Stack>
          ) : (
            <>
              {items.map((item, i) => (
                <div key={i}>{item}</div>
              ))}
            </>
          )}
        </CardWrapper>
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
