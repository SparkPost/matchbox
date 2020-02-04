import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Section from './Section';
import Footer from './Footer';
import Header from './Header';
import styles from './Panel.module.scss';

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

  const accentMarkup = accentColor ? (
    <div className={classnames(styles.Accent, styles[`accent-${accentColor}`])} />
  ) : null;

  const panelStyles = classnames(styles.Panel, className);

  return (
    <div className={panelStyles} {...rest}>
      {accentMarkup}
      <div className={styles.PanelInner}>
        {headerMarkup}
        {contentMarkup}
      </div>
    </div>
  );
}

Panel.displayName = 'Panel';
Panel.Section = Section;
Panel.Footer = Footer;

Panel.propTypes = {
  title: PropTypes.node,
  accent: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['orange', 'blue', 'navy', 'purple', 'red', 'yellow', 'green', 'gray']),
  ]),
  sectioned: PropTypes.bool,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.node.isRequired,
    }),
  ),
  children: PropTypes.node,
};

export default Panel;
