import React, { Component } from 'react';
import { buttonsFrom } from '../Button';
import styles from './Panel.module.scss';

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

export default Header;
