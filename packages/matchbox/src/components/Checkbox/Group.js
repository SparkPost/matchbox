import React from 'react';
import PropTypes from 'prop-types';
import { Label } from '../Label';
import styled from 'styled-components';
import { group } from './styles';

const StyledGroup = styled('div')`
  ${group}
`;

const Group = ({ children, label, required }) => (
  <StyledGroup>
    {label && (
      <Label>
        {label}
        {required && ' *'}
      </Label>
    )}
    {children}
  </StyledGroup>
);

Group.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.node,
  required: PropTypes.bool,
  labelHidden: PropTypes.bool,
};

Group.displayName = 'Checkbox.Group';
export default Group;
