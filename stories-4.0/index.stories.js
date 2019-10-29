import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box } from '@sparkpost/matchbox/components/Box';
import { ThemeProvider } from '@sparkpost/matchbox/components/ThemeProvider';

storiesOf('Welcome', module)
  .add('to Matchbox', () => (
    <ThemeProvider>
      <Box
        color="gray.1000"
        bg="blue.100"
        py="200"
        px="200"
        margin="100"
        borderRadius="200"
        // boxShadow={300}
        border={400}
        width={1/2}
        fontSize="100"
        lineHeight="100"
        // fontWeight="medium"
        fontFamily="monospace"
        >
        test lorem ipsums
        <Box
          display="inline-block"
          color="gray.1000"
          fontSize="200"
          lineHeight="200"
          // fontWeight="medium"
          fontFamily="sans"
          >
          test lorem ipsums
        </Box>
      </Box>
      {/* <Box as="p" color="gray.1000" bg="blue.200" p="500" width="700" role="button">test</Box>
      <Box truncate color="gray.1000" bg="blue.200" p="300" width="800">lorem ipsum lorem ipsum lorem ipsum lorem ipsum</Box> */}

      {/* <p>lorem ipsum lorem ipsum <code>lorem ipsum</code> lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum <a href="/">just a small link</a> lorem ipsum lorem ipsum </p>

      <hr/>

      <h1>h1 700</h1>
      <h2>h2 600</h2>
      <h3>h3 500</h3>
      <h4>h4 400</h4>
      <h5>h5 300</h5>
      <h6>h6 200</h6>

      <hr/>

      <ul>
        <li>test</li>
        <li>test</li>
          <ol>
            <li>test</li>
            <li>test</li>
          </ol>
        <li>test</li>
        <li>test</li>
        <li>test</li>
      </ul>

      <code>
        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lore
      </code>

      <pre>
        <code>
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lore
        </code>
      </pre> */}



    </ThemeProvider>
));
