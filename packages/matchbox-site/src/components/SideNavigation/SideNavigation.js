import React from 'react';
import classnames from 'classnames';
import { Link } from "gatsby"
import styles from './SideNavigation.module.scss';

function SideNavigation(props) {
  const { navItems = [] } = props;

  const items = navItems.map((item) => {
    return (
      <li
        key={item.path}
        className={classnames(styles.ListItem, item.selected && styles.Selected)}
        >
        <Link to={item.path} className={styles.Link} disabled={item.disabled}>
          {item.label}
        </Link>
      </li>
    )
  });

  return (
    <nav className={styles.SideNavigation}>
      <ul className={styles.List}>
        {items}
      </ul>
    </nav>
  )
}

export default SideNavigation;
