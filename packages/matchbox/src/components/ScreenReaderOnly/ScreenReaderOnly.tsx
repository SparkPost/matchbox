import React from 'react';
import styled from 'styled-components';
import { visuallyHidden } from '../../styles/helpers';

const StyledScreenReaderOnly = styled('span')`
  ${visuallyHidden}
`;

export type ScreenReaderOnlyProps = {
  as?: 'span' | 'div';
  id?: string;
  children: React.ReactNode;
};

const ScreenReaderOnly = ({ children, as = 'span', id }: ScreenReaderOnlyProps): JSX.Element => (
  <StyledScreenReaderOnly id={id} as={as}>
    {children}
  </StyledScreenReaderOnly>
);

ScreenReaderOnly.displayName = 'ScreenReaderOnly';
export default ScreenReaderOnly;
