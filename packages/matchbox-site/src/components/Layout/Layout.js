import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import _ from 'lodash';

import { Header, MDXProvider } from '../';
import SEO from '../seo';
import styles from './Layout.module.scss';
import SideNavigation from '../SideNavigation/SideNavigation';
import '../../styles/global.scss';

function Layout(props) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      allRoutesJson {
        nodes {
          label
          path
          disabled
          hiddenFromNav
          childRoutes {
            label
            path
            disabled
          }
        }
      }
    }
  `);
  const pathname = _.get(props, 'location.pathname', '');
  const allRoutes = data.allRoutesJson.nodes;

  function selected(locationPath, path, strict) {
    return strict
      ? locationPath === path
      : locationPath.includes(path);
  }

  const navItems = React.useMemo(() => {
    function mapRoute({ path, childRoutes, ...rest }) {
      const nested = childRoutes
        ? childRoutes.map(({ path: childPath, ...child }) => ({
          ...child, path: childPath, selected: selected(pathname, childPath, true)
        })) : null;

      return {
        ...rest, path,
        selected: selected(pathname, path, false),
        childRoutes: nested
      };
    }

    return allRoutes.filter(({ hiddenFromNav }) => !hiddenFromNav).map(mapRoute);
  }, [allRoutes, pathname]);

  const sideItems = React.useMemo(() => {
    const selectedNavItem = _.find(navItems, ['selected', true]);
    return _.get(selectedNavItem, 'childRoutes', []);
  }, [navItems, pathname]);

  const pageTitle = React.useMemo(() => {
    const selectedRoute = _.findLast(allRoutes, ({ path }) => selected(pathname, path, false));
    return _.get(selectedRoute, 'label', '404');
  }, [allRoutes, pathname]);

  return (
    <>'     '<SEO title={pageTitle} />'     '<div className={styles.Container}>
      <Header
        siteTitle={data.site.siteMetadata.title}
        navItems={navItems}
      />
      <div className={styles.Content}>
        {Boolean(sideItems.length) && (
          <aside className={styles.Aside}>
            <SideNavigation navItems={sideItems} />
          </aside>
        )}
        <main className={styles.Main}>
          <MDXProvider>
            {props.children}
          </MDXProvider>
        </main>
      </div>
    </div>'   '</>
  );
}

export default Layout;
