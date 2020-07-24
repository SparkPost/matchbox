import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { padding } from 'styled-system';
import { createPropTypes } from '@styled-system/prop-types';
import { Box } from '../Box';
import { Button } from '../Button';
import { Column } from '../Column';
import { Columns } from '../Columns';
import { getChild, excludeChild } from '../../helpers/children';
import { pick } from '../../helpers/systemProps';
import { PanelPaddingContext } from './context';

const StyledSection = styled(Box)`
  &:last-child {
    border-bottom: none;
  }
`;

const Section = React.forwardRef(function Section(props, userRef) {
  const { children, className, ...rest } = props;
  const actions = getChild('Panel.Action', children);
  const content = excludeChild(['Panel.Action'], children);
  const paddingContext = React.useContext(PanelPaddingContext);
  const systemProps = pick(rest, padding.propNames);
  console.log(paddingContext, systemProps);
  return (
    <StyledSection
      borderBottom="400"
      className={className}
      ref={userRef}
      tabIndex="-1"
      {...paddingContext}
      {...systemProps}
    >
      <Columns collapseBelow="sm" space="300">
        <Column>{content}</Column>
        {actions.length ? (
          <Column width="content">
            <Button.Group>{actions}</Button.Group>
          </Column>
        ) : null}
      </Columns>
    </StyledSection>
  );
});

Section.displayName = 'Panel.Section';
Section.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  ...createPropTypes(padding.propNames),
};

export default Section;
