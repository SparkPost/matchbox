import { useMemo } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import _ from 'lodash';

function useNavItems(props) {
  const data = useStaticQuery(graphql`
    query SiteQuery {
      site {
        siteMetadata {
          title
        }
      }
      allRoutesJson {
        nodes {
          label
          path
          indexRoute
          hiddenFromNav
          childRoutes {
            label
            path
            section
          }
        }
      }
    }
  `);

  const pathname = _.get(props, 'location.pathname', '');
  const allRoutes = data.allRoutesJson.nodes;

  function selected(locationPath, path, strict) {
    return strict ? locationPath === path : locationPath.includes(path);
  }

  const navItems = useMemo(() => {
    function mapRoute({ path, indexRoute, childRoutes, ...rest }) {
      const nested = childRoutes
        ? childRoutes.map(({ path: childPath, ...child }) => ({
            ...child,
            path: childPath,
            selected: selected(pathname, childPath, true)
          }))
        : null;

      return {
        ...rest,
        path: indexRoute || path,
        selected: selected(pathname, path, false),
        childRoutes: nested
      };
    }

    return allRoutes
      .filter(({ hiddenFromNav }) => !hiddenFromNav)
      .map(mapRoute);
  }, [allRoutes, pathname]);

  const pageTitle = useMemo(() => {
    const selectedRoute = _.findLast(allRoutes, ({ path }) =>
      selected(pathname, path, false)
    );
    return _.get(selectedRoute, 'label', '');
  }, [allRoutes, pathname]);

  return { pageTitle, navItems, data };
}

export default useNavItems;
