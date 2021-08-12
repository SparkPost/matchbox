import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from '../Box';
import { group } from './styles';

type GroupProps = {
  className?: string;
  children?: React.ReactNode;
};

const StyledGroup = styled(Box)`
  ${group}
`;

const Group: React.FC<GroupProps> = ({ children, className = '' }) => (
  <StyledGroup display="inline-flex" alignItems="center" className={className}>
    {children}
  </StyledGroup>
);

Group.propTypes = {
  children: PropTypes.node.isRequired,
};

Group.displayName = 'Button.Group';

export default Group;
