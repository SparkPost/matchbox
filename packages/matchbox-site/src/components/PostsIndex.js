import React from 'react';
import { Link } from 'gatsby';
import usePosts from '../hooks/usePosts';
import { Box, Text } from '@sparkpost/matchbox';

function PostsIndex() {
  const posts = usePosts();
  console.log(posts);
  return (
    <Box>
      {posts.map(post => {
        return (
          <Box key={post.id} pb="600">
            <Box as="h5" mb="0">
              {post.frontmatter.title}
            </Box>
            <Text as="small">{post.frontmatter.date}</Text>
            <Text>{post.excerpt}</Text>
            <Link to={post.fields.slug}>{post.fields.slug}</Link>
          </Box>
        );
      })}
    </Box>
  );
}

export default PostsIndex;
