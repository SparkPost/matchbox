import React from 'react';
import { buttonsFrom } from '../Button';
import styles from './Panel.module.scss';

const actionOverrides = { flat: true, size: 'small' };

const Header = ({ title, actions }) => {
  const actionMarkup = actions && actions.length
    ? <div className={styles.Actions}>{buttonsFrom(actions, actionOverrides)}</div>
    : null;

  return (
    <div className={styles.Header}>
      <div className={styles.HeaderText}>
        {title}
      </div>
      {actionMarkup}
    </div>
  );
};

export default Header;
