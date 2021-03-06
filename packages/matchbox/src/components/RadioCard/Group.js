import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { margin } from 'styled-system';
import { createPropTypes } from '@styled-system/prop-types';
import { Box } from '../Box';
import { Columns } from '../Columns';
import { Column } from '../Column';
import { Label } from '../Label';
import { OptionalLabel } from '../OptionalLabel';
import { Stack } from '../Stack';

import { pick } from '../../helpers/props';

const Fieldset = styled.fieldset`
  border: none;
  padding: 0;
  ${margin}
`;

const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl'];

const Group = React.forwardRef(function Group(props, userRef) {
  const { children, collapseBelow, id, label, labelHidden, orientation, optional, ...rest } = props;

  const items = React.Children.toArray(children);
  const systemProps = pick(rest, margin.propNames);

  return (
    <Fieldset data-id={rest['data-id']} id={id} ref={userRef} {...systemProps}>
      <Label as="legend" label={label} labelHidden={labelHidden}>
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
        <Stack space="300" collapseBelow={collapseBelow}>
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

Group.propTypes = {
  collapseBelow: PropTypes.oneOf(breakpoints),
  'data-id': PropTypes.string,
  label: PropTypes.string.isRequired,
  labelHidden: PropTypes.bool,
  optional: PropTypes.bool,
  orientation: PropTypes.oneOf(['horizontal', 'vertical', 'grid']),
  ...createPropTypes(margin.propNames),
};

Group.defaultProps = {
  orientation: 'vertical',
};

export default Group;
