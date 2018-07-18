import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Section from './Section';
import Footer from './Footer';
import Header from './Header';
import styles from './Panel.module.scss';

class Panel extends Component {
  static Section = Section;
  static Footer = Footer;

  static displayName = 'Panel';

  static propTypes = {
    /**
     * The panel heading title
     */
    title: PropTypes.node,
    /**
      * Shows an accent bar, defaults to orange if boolean
      */
    accent: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(['orange', 'blue', 'navy', 'purple', 'red', 'yellow', 'green', 'gray'])
    ]),
    /**
      * Adds a padded section automatically
      */
    sectioned: PropTypes.bool,
    /**
      * Actions that build buttons. Most button props will work in here.
      * e.g. { content: 'button label', onClick: callback() }
      */
    actions: PropTypes.arrayOf(PropTypes.shape({
      content: PropTypes.node.isRequired
    })),
    /**
      * Panel Content
      */
    children: PropTypes.node
  };

  render() {
    const {
      children,
      title,
      accent,
      sectioned,
      actions,
      className,
      ...rest
    } = this.props;

    const accentColor = accent === true ? 'orange' : accent;

    const headerMarkup = title
      ? <Header title={title} actions={actions} />
      : null;

    const contentMarkup = sectioned
      ? <Section>{children}</Section>
      : children;

    const accentMarkup = accentColor
      ? <div className={classnames(styles.Accent, styles[`accent-${accentColor}`])} />
      : null;

    const panelStyles = classnames(styles.Panel, className);

    return (
      <div className={panelStyles} {...rest}>
        {accentMarkup}
        {headerMarkup}
        {contentMarkup}
      </div>
    );
  }
}

export default Panel;
