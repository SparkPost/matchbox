import React from 'react';
import classnames from 'classnames';
import { Link } from 'gatsby';
import styles from './SideNavigation.module.scss';
import _ from 'lodash';

function SideNavigation(props) {
  const { navItems = []} = props;
  const onlyActive = navItems.filter(({ disabled }) => !disabled);
  const rootItems = onlyActive.filter(({ section }) => !section);
  const sectionedItems = onlyActive.filter(({ section }) => !!section);
  const sections = _.uniq(sectionedItems.map(({ section }) => section || 'rootList'));

  function renderList(list) {
    return (
      <ul className={styles.List}>
        {
          list.map((item) => (
            <li
              key={item.path}
              className={classnames(
                styles.ListItem,
                item.selected && styles.Selected
              )}
            >
              <Link to={item.path} className={styles.Link} disabled={item.disabled}>
                {item.label}
              </Link>
            </li>
          ))
        }
      </ul>
    );
  }

  function renderSection(key) {
    const section = navItems.filter(({ section }) => section === key);
    return (
      <div key={key}>
        <div className={styles.SectionLabel}>{key}</div>
        {renderList(section)}
      </div>
    );
  }

  return (
    <nav className={styles.SideNavigation}>
      {renderList(rootItems)}
      {sections.map(renderSection)}
    </nav>
  );
}

export default SideNavigation;
