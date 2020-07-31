import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { margin } from 'styled-system';
import { createPropTypes } from '@styled-system/prop-types';
import { getChild } from '../../helpers/children';
import { Box } from '../Box';
import { Columns } from '../Columns';
import { Column } from '../Column';
import { Label } from '../Label';
import { OptionalLabel } from '../OptionalLabel';
import { Stack } from '../Stack';

import { pick } from '../../helpers/systemProps';

const Fieldset = styled.fieldset`
  border: none;
  padding: 0;
  ${margin}
`;

const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl'];

const Group = React.forwardRef(function Group(props, userRef) {
  const {
    children,
    collapseBelow,
    disabled,
    id,
    label,
    labelHidden,
    orientation,
    optional,
    weight,
    ...rest
  } = props;

  const items = getChild('RadioCard', children, { disabled, weight });
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
    </Fieldset>
  );
});

Group.displayName = 'RadioCard.Group';

Group.propTypes = {
  collapseBelow: PropTypes.oneOf(breakpoints),
  'data-id': PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  labelHidden: PropTypes.bool,
  optional: PropTypes.bool,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  weight: PropTypes.oneOf(['light', 'heavy']),
  ...createPropTypes(margin.propNames),
};

Group.defaultProps = {
  orientation: 'vertical',
  weight: 'light',
};

export default Group;
