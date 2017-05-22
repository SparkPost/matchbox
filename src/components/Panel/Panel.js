import React, { Component } from 'react';
import styles from './Panel.module.scss';

const Header = ({ title }) => <div className={styles.Header}><h4 className={styles.HeaderText}>{ title }</h4></div>;

class Panel extends Component {
  render() {
    const { children, title, highlighted } = this.props;

    const headerMarkup = title ? <Header title={title}/> : null;
    const panelStyles = highlighted
      ? `${styles.Panel} ${styles.accent}`
      : styles.Panel;

    return (
      <div className={panelStyles}>
        { headerMarkup }
        <div className={styles.Body}>
          { children }
        </div>
      </div>
    );
  }
};

export default Panel;
