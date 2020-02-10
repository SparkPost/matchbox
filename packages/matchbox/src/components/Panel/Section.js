import React from 'react';
import PropTypes from 'prop-types';
import { buttonsFrom } from '../Button';
import styled from 'styled-components';
import { body, sectionContent, actions } from './styles';

const SectionOuter = styled('div')`
  ${body}
`;

const SectionContent = styled('div')`
  ${sectionContent}
`;

const Actions = styled('div')`
  ${actions}
`;

const actionOverrides = { flat: true, size: 'small' };

function Section(props) {
  const { actions, children, className, ...rest } = props;

  const actionMarkup =
    actions && actions.length ? <Actions>{buttonsFrom(actions, actionOverrides)}</Actions> : null;

  return (
    <SectionOuter {...rest}>
      <SectionContent>{children}</SectionContent>
      {actionMarkup}
    </SectionOuter>
  );
}

Section.displayName = 'Panel.Section';
Section.propTypes = {
  /**
   * Actions that build buttons. Most button props will work in here.
   * e.g. { content: 'button label', onClick: callback() }
   */
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.node.isRequired,
    }),
  ),
  /**
   * Panel Content
   */
  children: PropTypes.node,
};

export default Section;
