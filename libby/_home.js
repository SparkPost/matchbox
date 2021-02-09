import React from 'react';
import { Text, Box } from '@sparkpost/matchbox';

export default function() {
  return (
    <>
      <Text as="h1" looksLike="h3" mb="500">
        Welcome to Matchbox!
      </Text>
      <Text as="p" mb="300">
        This is acomponent development and testing environment.
      </Text>
      <Text as="p" mb="300">
        For more information, visit the following:
      </Text>
      <Box as="ul">
        <Box as="li">
          <a href="http://design.sparkpost.com/">Design System documentation</a>
        </Box>
        <Box as="li">
          <a href="https://github.com/sparkpost/matchbox/">Matchbox on Github</a>
        </Box>
        <Box as="li">
          <a href="https://matchbox-playroom.netlify.app/">Matchbox with Playroom</a>
        </Box>
      </Box>
    </>
  );
}
