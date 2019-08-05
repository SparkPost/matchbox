import React from 'react';
import classnames from 'classnames';
import { Link } from 'gatsby';
import styles from './MainNavigation.module.scss';

function MainNavigation(props) {
  const { navItems = []} = props;

  const items = navItems.map((item) => (
    <li
      key={item.path}
      className={classnames(styles.ListItem, item.selected && styles.Selected)}
    >
      <Link
        to={item.path}
        className={classnames(styles.Link, item.disabled && styles.Disabled)}
      >
        {item.label}
      </Link>
    </li>
  ));

  return (
    <nav className={styles.Navigation}>
      <ul className={styles.List}>{items}</ul>
    </nav>
  );
}

export default MainNavigation;
