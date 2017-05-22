import React, { Component } from 'react';
import classnames from 'classnames/bind';

import styles from './Panel.module.scss';

const Header = ({ title }) => (
    <div className={styles.Header}><h4 className={styles.HeaderText}>{ title }</h4></div>
);

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
      depth,
      sectioned
    } = this.props;

    const headerMarkup = title
      ? <Header title={title}/>
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

export default Panel;
