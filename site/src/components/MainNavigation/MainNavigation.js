import React from 'react';
import { Box, useWindowEvent } from '@sparkpost/matchbox';
import Search from './Search';
import SearchResults from './SearchResults';
import { InstantSearch } from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch/lite';

import NavItems from './NavItems';

function MainNavigation(props) {
  const { navItems } = props;
  const indices = [{ name: `matchbox`, title: `Pages` }];
  const container = React.useRef();
  const [query, setQuery] = React.useState();
  const [hasFocus, setHasFocus] = React.useState();

  useWindowEvent('click', function(e) {
    const isOutside =
      !container.current || !container.current.contains(e.target);

    if (hasFocus && isOutside) {
      setHasFocus(false);
    }
  });

  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY
  );

  return (
    <Box display="flex">
      <nav>
        <Box
          as="ul"
          display="flex"
          justifyContent="flex-end"
          padding="0"
          margin="0"
        >
          <NavItems items={navItems} />
        </Box>
      </nav>
      <Box ml="600">
        <Box position="relative" ref={container}>
          <InstantSearch
            searchClient={searchClient}
            indexName={indices[0].name}
            onSearchStateChange={({ query }) => setQuery(query)}
          >
            <Search onFocus={() => setHasFocus(true)} hasFocus={hasFocus} />
            <SearchResults
              show={query && query.length > 0 && hasFocus}
              indices={indices}
            />
          </InstantSearch>
        </Box>
      </Box>
    </Box>
  );
}

export default MainNavigation;
