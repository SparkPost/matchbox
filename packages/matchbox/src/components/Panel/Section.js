import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from '../Box';
import { Button } from '../Button';
import { Column } from '../Column';
import { Columns } from '../Columns';
import { getChild, excludeChild } from '../../helpers/children';

const StyledSection = styled(Box)`
  &:last-child {
    border-bottom: none;
  }
`;

const Section = React.forwardRef(function Section(props, userRef) {
  const { children, className } = props;
  const actions = getChild('Panel.Action', children);
  const content = excludeChild(['Panel.Action'], children);

  return (
    <StyledSection borderBottom="400" className={className} p="500" ref={userRef} tabIndex="-1">
      <Columns collapseBelow="sm" space="300">
        <Column>{content}</Column>
        <Column width="content">
          <Button.Group>{actions}</Button.Group>
        </Column>
      </Columns>
    </StyledSection>
  );
});

Section.displayName = 'Panel.Section';
Section.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Section;
