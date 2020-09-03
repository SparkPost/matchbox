import React from 'react';
import _ from 'lodash';
import { Box } from '@sparkpost/matchbox';
import SideNavigation from '../SideNavigation/SideNavigation';
import SecondaryNavigation from '../SecondaryNavigation/SecondaryNavigation';
import useNavItems from './useNavItems';
import { MDXProvider } from '../';
import Wrapper from './Wrapper';

function Layout(props) {
  const { navItems } = useNavItems(props);

  const sideItems = React.useMemo(() => {
    const selectedNavItem = _.find(navItems, ['selected', true]);
    return _.get(selectedNavItem, 'childRoutes', []);
  }, [navItems]);

  return (
    <Wrapper location={props.location}>
      <Box display={['flex', null, 'none']} pb="700">
        <SecondaryNavigation navItems={navItems} />
      </Box>
      <Box display="flex" maxWidth="1400" m="0 auto" px="500">
        <Box display={['none', null, 'flex']} as="aside" minWidth="300px">
          <SideNavigation navItems={sideItems} />
        </Box>

        <Box
          as="main"
          flex="1 0 0"
          pb={['400', null, '800']}
          pt="400"
          maxWidth={['100%', null, 'calc(100% - 300px)']}
        >
          <Box>
            <MDXProvider>{props.children}</MDXProvider>
          </Box>
        </Box>
      </Box>
    </Wrapper>
  );
}

export default Layout;
