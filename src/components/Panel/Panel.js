import React, { Component } from 'react';
import classnames from 'classnames/bind';

import styles from './Panel.module.scss';
const cx = classnames.bind(styles);

const Header = ({ title }) => <div className={styles.Header}><h4 className={styles.HeaderText}>{ title }</h4></div>;

class Panel extends Component {
  render() {
    const { children, title, highlighted, depth } = this.props;

    const headerMarkup = title ? <Header title={title}/> : null;

    const panelStyles = cx({
      Panel, accent: highlighted
    });

    // highlighted
    //   ? `${styles.Panel} ${styles.accent}`
    //   : styles.Panel;

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
