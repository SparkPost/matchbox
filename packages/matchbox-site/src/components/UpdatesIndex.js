import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import useUpdates from '../hooks/useUpdates';
import { Box, Text, Button } from '@sparkpost/matchbox';

const StyledLi = styled(Box)`
  list-style: none;
`;

const StyledButton = styled(Button)`
  width: 100%;
  justify-content: flex-start;
  text-align: left;
`;

function categoryToFriendly(s) {
  return s
    .split(' ')
    .map(p => p.charAt(0).toUpperCase() + p.slice(1))
    .join(' ');
}

function Category({ selected, children, onClick }) {
  return (
    <StyledLi as="li" p="0" mt="0" mb="100">
      <StyledButton
        color={selected ? 'blue' : null}
        flat={!selected}
        onClick={onClick}
        size="small"
      >
        {children}
      </StyledButton>
    </StyledLi>
  );
}

function UpdatesIndex() {
  const posts = useUpdates();
  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const categories = Array.from(
    new Set(posts.map(({ frontmatter }) => frontmatter.category).sort())
  );

  const filteredByCategory = posts.filter(
    post =>
      selectedCategory === 'all' ||
      post.frontmatter.category === selectedCategory
  );

  return (
    <Box display="flex" maxWidth="1300" m="0 auto">
      <Box flex="0" minWidth="900" pr="400">
        <Box as="ul" p="0">
          <Category
            onClick={() => setSelectedCategory('all')}
            selected={selectedCategory === 'all'}
          >
            All Updates
          </Category>
          {categories.map(category => (
            <Category
              key={category}
              onClick={() => setSelectedCategory(category)}
              selected={selectedCategory === category}
            >
              {categoryToFriendly(category)}
            </Category>
          ))}
        </Box>
      </Box>
      <Box flex="1" pl="800">
        {!filteredByCategory.length && (
          <Box color="gray.800" fontSize="200">
            There's nothing here yet 😢
          </Box>
        )}
        {filteredByCategory.map(post => {
          return (
            <Box key={post.id}>
              <Box
                as={Link}
                to={post.fields.slug}
                fontSize="500"
                lineHeight="500"
                fontWeight="medium"
                mb="0"
              >
                {post.frontmatter.title}
              </Box>
              <Text
                as="p"
                mb="200"
                fontSize="200"
                lineHeight="200"
                color="gray.700"
              >
                {post.frontmatter.date}
              </Text>
              <Text fontSize="300" lineHeight="300" mt="200" mb="200">
                {post.excerpt}
              </Text>
              <hr />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default UpdatesIndex;
