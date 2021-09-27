import React from 'react';
import styled from 'styled-components';
import { Box } from '../Box';
import { group } from './styles';

export type ButtonGroupProps = {
  className?: string;
  children?: React.ReactNode;
};

const StyledGroup = styled(Box)`
  ${group}
`;

const Group = ({ children, className = '' }: ButtonGroupProps): JSX.Element => (
  <StyledGroup display="inline-flex" alignItems="center" className={className}>
    {children}
  </StyledGroup>
);

Group.displayName = 'Button.Group';

export default Group;
