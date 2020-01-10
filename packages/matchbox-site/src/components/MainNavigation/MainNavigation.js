import React from 'react';
import classnames from 'classnames';
import { Link } from 'gatsby';
import styles from './MainNavigation.module.scss';

function MainNavigation(props) {
  const navItems = React.useMemo(() => {
    const list = props.navItems.filter(({ disabled }) => !disabled);

    return list.map((item) => (
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
  }, [props.navItems]);


  return (
    <nav className={styles.Navigation}>
      <ul className={styles.List}>{navItems}</ul>
    </nav>
  );
}

export default MainNavigation;
