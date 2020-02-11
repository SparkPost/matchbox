import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { margin, padding, compose } from 'styled-system';
import { createPropTypes } from '@styled-system/prop-types';
import { panel, panelInner } from './styles';

import Section from './Section';
import Footer from './Footer';
import Header from './Header';
import Accent from './Accent';

const system = compose(margin, padding);

const PanelOuter = styled('div')`
  ${panel}
  ${system}
`;

const PanelInner = styled('div')`
  ${panelInner}
`;

function Panel(props) {
  const {
    // panel heading title
    title,

    // Shows an accent bar, defaults to blue if boolean
    accent,

    // Adds a padded section automatically
    sectioned,

    // Actions that build buttons. Most button props will work in here.
    // e.g. { content: 'button label', onClick: callback() }
    actions,

    // Panel Content
    children,
    className,
    ...rest
  } = props;

  const accentColor = accent === true ? 'blue' : accent;

  const headerMarkup = title ? <Header title={title} actions={actions} /> : null;

  const contentMarkup = sectioned ? <Section>{children}</Section> : children;

  const accentMarkup = accentColor ? <Accent accentColor={accentColor} /> : null;

  return (
    <PanelOuter {...rest}>
      {accentMarkup}
      <PanelInner accent={accent}>
        {headerMarkup}
        {contentMarkup}
      </PanelInner>
    </PanelOuter>
  );
}

Panel.displayName = 'Panel';
Panel.Header = Header;
Panel.Section = Section;
Panel.Footer = Footer;
Panel.Accent = Accent;

Panel.propTypes = {
  title: PropTypes.node,
  accent: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['orange', 'blue', 'red', 'yellow', 'green', 'gray']),
  ]),
  sectioned: PropTypes.bool,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.node.isRequired,
    }),
  ),
  children: PropTypes.node,
  ...createPropTypes(margin.propNames),
  ...createPropTypes(padding.propNames),
};

export default Panel;
