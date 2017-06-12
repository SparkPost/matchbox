import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Panel.module.scss';
import { buttonsFrom } from '../Button';

const actionOverrides = { plain: true, size: 'small' };

const Header = ({ title, actions }) => {
  const actionMarkup = actions && actions.length
        ? <div className={styles.Actions}>{ buttonsFrom(actions, actionOverrides) }</div>
        : null;

  return (
    <div className={styles.Header}>
      { actionMarkup }
      <h2 className={styles.HeaderText}>{ title }</h2>
    </div>
  );
};

const Section = ({ children }) => (
  <div className={styles.Body}>{ children }</div>
);

class Panel extends Component {
  static Section = Section;

  render() {
    const {
      children,
      title,
      accent,
      sectioned,
      actions
    } = this.props;

    const headerMarkup = title
      ? <Header title={title} actions={actions} />
      : null;

    const contentMarkup = sectioned
      ? <Section>{children}</Section>
      : children;

    const panelStyles = classnames(styles.Panel, accent && styles.accent);

    return (
      <div className={panelStyles}>
        { headerMarkup }
        { contentMarkup }
      </div>
    );
  }
};

Panel.propTypes = {
  title: PropTypes.string,
  accent: PropTypes.bool,
  sectioned: PropTypes.bool,
  actions: PropTypes.arrayOf(PropTypes.shape({
    content: PropTypes.string.isRequired
  })),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
};

export default Panel;
