import React from 'react';
import { Link } from 'gatsby';
import useUpdates from '../hooks/useUpdates';
import { Box, Text } from '@sparkpost/matchbox';

function UpdatesIndex() {
  const posts = useUpdates();

  return (
    <Box maxWidth="1300" m="0 auto">
      <Box>
        {!posts.length && (
          <Box color="gray.800" fontSize="200">
            There's nothing here yet{' '}
            <span role="img" aria-label="Sad emoji">
              😢
            </span>
          </Box>
        )}
        {posts.map(post => {
          return (
            <Box key={post.id} mb="800">
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
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default UpdatesIndex;
