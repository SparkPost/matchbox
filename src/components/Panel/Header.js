import React, { Component } from 'react';
import styles from './Panel.module.scss';

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

export default Header;
