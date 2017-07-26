import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Section from './Section';
import Header from './Header';
import styles from './Panel.module.scss';

class Panel extends Component {
  static Section = Section;

  static propTypes = {
    /**
     * The panel heading title
     */
     title: PropTypes.string,
     /**
      * Shows an orange accent bar
      */
     accent: PropTypes.bool,
     /**
      * Adds a padded section automatically
      */
     sectioned: PropTypes.bool,
     /**
      * Actions that build buttons. Most button props will work in here.
      * e.g. { content: 'button label', onClick: callback() }
      */
     actions: PropTypes.arrayOf(PropTypes.shape({
       content: PropTypes.string.isRequired
     })),
     /**
      * Panel Content
      */
     children: PropTypes.oneOfType([
       PropTypes.arrayOf(PropTypes.node),
       PropTypes.node
     ]),
  };

  render() {
    const {
      children,
      title,
      accent,
      sectioned,
      actions,
      ...rest
    } = this.props;

    const headerMarkup = title
      ? <Header title={title} actions={actions} />
      : null;

    const contentMarkup = sectioned
      ? <Section>{children}</Section>
      : children;

    const panelStyles = classnames(styles.Panel, accent && styles.accent);

    return (
      <div className={panelStyles} {...rest}>
        { headerMarkup }
        { contentMarkup }
      </div>
    );
  }
};

export default Panel;
