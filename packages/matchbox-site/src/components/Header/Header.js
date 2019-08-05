import React from 'react';
import MainNavigation from '../MainNavigation/MainNavigation';
import { Link } from 'gatsby';
import styles from './Header.module.scss';

function Header(props) {
  return (
    <header className={styles.Header}>
      <Link to="/" className={styles.Title}>
        <h1>Matchbox</h1>
      </Link>
      <div className={styles.NavWrapper}>
        <MainNavigation navItems={props.navItems} location={props.location} />
      </div>
    </header>
  );
}

export default Header;
