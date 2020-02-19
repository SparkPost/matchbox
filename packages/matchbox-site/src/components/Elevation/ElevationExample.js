import React from 'react';
import { tokens } from '@sparkpost/design-tokens';
import { Box, Stack } from '@sparkpost/matchbox';

export function ElevationExample() {
  return (
    <Box
      position="relative"
      border="2px solid #EBF0F5"
      bg="white"
      p={['300', '600']}
      pb="800"
      overflow="hidden"
    >
      <Box mb="600" fontSize="200" lineHeight="200">
        <Box flex="1">
          <strong>Application Background</strong>
        </Box>
        <Box>Color White</Box>
      </Box>

      <Stack space="500">
        <Box
          border="400"
          p="500"
          mx={['200', '400', '800']}
          borderRadius="200"
          fontSize="200"
          lineHeight="200"
        >
          <Box>
            <strong>Common Container</strong>
          </Box>
          <Box display="flex">
            <Box flex="1">Box Shadow 0</Box>
            <Box color="gray.700">{tokens.boxShadow_0}</Box>
          </Box>
        </Box>

        <Box
          border="400"
          p="500"
          mx={['200', '400', '800']}
          boxShadow="100"
          borderRadius="200"
        >
          <Box display="flex" fontSize="200" lineHeight="200">
            <Box flex="1">Box Shadow 100</Box>
            <Box color="gray.700">{tokens.boxShadow_100}</Box>
          </Box>
        </Box>

        <Box
          border="400"
          p="500"
          mx={['200', '400', '800']}
          boxShadow="200"
          borderRadius="200"
        >
          <Box display="flex" fontSize="200" lineHeight="200">
            <Box flex="1">Box Shadow 200</Box>
            <Box color="gray.700">{tokens.boxShadow_200}</Box>
          </Box>
        </Box>

        <Box
          border="400"
          p="500"
          mx={['200', '400', '800']}
          boxShadow="300"
          borderRadius="200"
        >
          <Box display="flex" fontSize="200" lineHeight="200">
            <Box flex="1">Box Shadow 300</Box>
            <Box color="gray.700">{tokens.boxShadow_300}</Box>
          </Box>
        </Box>

        <Box
          border="400"
          p="500"
          mx={['200', '400', '800']}
          mb="600"
          boxShadow="400"
          borderRadius="200"
        >
          <Box display="flex" fontSize="200" lineHeight="200">
            <Box flex="1">Box Shadow 400</Box>
            <Box color="gray.700">{tokens.boxShadow_400}</Box>
          </Box>
        </Box>
      </Stack>

      <Box
        p="400"
        borderRadius="200"
        position="absolute"
        top="3rem"
        right="3.25rem"
        bg="gray.800"
        color="gray.100"
        fontSize="200"
        lineHeight="200"
      >
        <Box>
          <strong>High Contrast Elements</strong>
        </Box>
        <Box display="flex" color="gray.300">
          <Box flex="1" pr="800">
            Box Shadow 0
          </Box>
          <Box>{tokens.boxShadow_0}</Box>
        </Box>
      </Box>
    </Box>
  );
}
