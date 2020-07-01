import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { createGlobalStyle } from 'styled-components';
import _ from 'lodash';
import { Header, MDXProvider } from '../';
import SEO from '../seo';
import SideNavigation from '../SideNavigation/SideNavigation';
import { Box, ThemeProvider } from '@sparkpost/matchbox';
import global from './global';

const GlobalStyle = createGlobalStyle`
  ${global}
`;

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
          indexRoute
          disabled
          hiddenFromNav
          childRoutes {
            label
            path
            disabled
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

  const navItems = React.useMemo(() => {
    function mapRoute({ path, indexRoute, childRoutes, ...rest }) {
      const nested = childRoutes
        ? childRoutes.map(({ path: childPath, ...child }) => ({
            ...child,
            path: childPath,
            selected: selected(pathname, childPath, false)
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

  const sideItems = React.useMemo(() => {
    const selectedNavItem = _.find(navItems, ['selected', true]);
    return _.get(selectedNavItem, 'childRoutes', []);
  }, [navItems, pathname]);

  const pageTitle = React.useMemo(() => {
    const selectedRoute = _.findLast(allRoutes, ({ path }) =>
      selected(pathname, path, false)
    );
    return _.get(selectedRoute, 'label', '');
  }, [allRoutes, pathname]);

  return (
    <ThemeProvider>
      <GlobalStyle />
      <Box maxWidth="1240px" margin="0 auto" pl="600" pr="600">
        <SEO title={pageTitle} />
        <Header siteTitle={data.site.siteMetadata.title} navItems={navItems} />
        <Box display="flex" maxWidth={props.maxWidth || '1240px'} m="0 auto">
          {Boolean(sideItems && sideItems.length) && (
            <Box as="aside" flex="0 0 0" minWidth="300px">
              <SideNavigation navItems={sideItems} />
            </Box>
          )}
          <Box as="main" flex="1 0 0" pb="800" pt="400">
            <MDXProvider>{props.children}</MDXProvider>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Layout;
