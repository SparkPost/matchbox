import React from 'react';
import { ThemeProvider, Box, Text, Stack, UnstyledLink, InlineCode } from '@sparkpost/matchbox';

function App(): JSX.Element {
  return (
    <ThemeProvider>
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Stack align="center">
          <Text>
            Edit <InlineCode>src/App.tsx</InlineCode> and save to reload.
          </Text>
          <UnstyledLink to="https://reactjs.org" external>
            Learn React
          </UnstyledLink>
          <UnstyledLink to="https://design.sparkpost.com" external>
            Learn Matchbox
          </UnstyledLink>
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
