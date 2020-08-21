import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import {
  connectStateResults,
  Highlight,
  Hits,
  Index,
  Snippet,
  PoweredBy
} from 'react-instantsearch-dom';
import { Box } from '@sparkpost/matchbox';
import { tokens } from '@sparkpost/design-tokens';

const HitCount = connectStateResults(({ searchResults }) => {
  const hitCount = searchResults && searchResults.nbHits;

  return hitCount > 0 ? (
    <Box
      fontSize="200"
      color="gray.700"
      px="400"
      pb="200"
      pt="200"
      borderBottom={`1px solid ${tokens.color_gray_200}`}
    >
      {hitCount} result{hitCount !== 1 ? `s` : ``}
    </Box>
  ) : (
    <Box fontSize="200" color="gray.700" p="400">
      No Results
    </Box>
  );
});

const StyledLink = styled(Link)`
  display: block;
  margin-bottom: 0;
  text-decoration: none;
  padding: ${({ theme }) => theme.space[300]} ${({ theme }) => theme.space[400]};

  &:hover,
  &:focus {
    outline: none;
    background: ${({ theme }) => theme.colors.blue[100]};
  }
`;

function PageHit({ hit }) {
  return (
    <Box borderBottom={`1px solid ${tokens.color_gray_200}`}>
      <StyledLink to={hit.slug}>
        <Box display="flex">
          <Box
            as="h6"
            flex="1"
            fontSize="300"
            lineHeight="300"
            fontWeight="500"
          >
            <Highlight attribute="title" hit={hit} tagName="mark" />
          </Box>
          <Box
            flex="0"
            style={{
              whiteSpace: 'nowrap'
            }}
          >
            <Box
              bg="gray.200"
              px="100"
              py="2px"
              borderRadius="3px"
              color="gray.700"
              fontSize="100"
              lineHeight="100"
            >
              {hit.category}
            </Box>
          </Box>
        </Box>
        <Box fontSize="200" lineHeight="200" color="gray.700">
          <Snippet attribute="excerpt" hit={hit} tagName="mark" />
        </Box>
      </StyledLink>
    </Box>
  );
}

const StyledHitsWrapper = styled.div`
  .ais-Hits-item {
    margin: 0;
  }

  .ais-Highlight-highlighted,
  .ais-Snippet-highlighted {
    font-weight: 600;
    background: ${({ theme }) => theme.colors.yellow[100]};
    color: inherit;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
`;

function HitsInIndex({ index }) {
  return (
    <Index indexName={index.name}>
      <HitCount />
      <StyledHitsWrapper>
        <Hits className="Hits" hitComponent={PageHit} />
      </StyledHitsWrapper>
    </Index>
  );
}

const StyledLogoWrapper = styled(Box)`
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 1) 50%
  );

  .ais-PoweredBy {
    display: flex;
    justify-content: flex-end;
    font-size: 80%;
    svg {
      height: 20px;
    }
  }
`;

function SearchResult({ indices, show }) {
  if (!show) {
    return null;
  }
  return (
    <Box
      position="absolute"
      top="calc(100% + 4px)"
      right="0"
      width="600px"
      maxHeight="1100"
      overflow="hidden"
      zIndex="overlay"
      boxShadow="400"
      bg="white"
      borderRadius="3px"
      border={`1px solid ${tokens.color_gray_300}`}
      pb="20px"
    >
      <Box overflow="scroll" maxHeight="1100" pb="20px">
        {indices.map(index => (
          <HitsInIndex index={index} key={index.name} />
        ))}
      </Box>
      <StyledLogoWrapper
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        pt="300"
        pr="100"
      >
        <PoweredBy />
      </StyledLogoWrapper>
    </Box>
  );
}

export default SearchResult;
