import React, { Component } from 'react';
import styles from './Panel.scss';

const Header = ({ title }) => <div className={styles.Header}><h4 className={styles.HeaderText}>{ title }</h4></div>;

class Panel extends Component {
  render() {
    const { children, title, highlighted } = this.props;

    const headerMarkup = title ? <Header title={title}/> : null;
    const panelStyles = highlighted
      ? `${styles.Panel} ${styles['Panel-accent']}`
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
