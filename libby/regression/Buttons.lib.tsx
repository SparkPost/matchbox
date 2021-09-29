import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { Button, Inline, Stack, Box } from '@sparkpost/matchbox';
import { Search } from '@sparkpost/matchbox-icons';

describe('Buttons - Visual Regression', () => {
  add('renders properly', () => {
    return (
      <Stack>
        <div>
          <Button color="blue">
            With an Icon
            <Button.Icon as={Search} ml="100" />
          </Button>
        </div>
        {/* Blue */}
        <Inline>
          <Button size="small" variant="filled" color="blue">
            Click Me
          </Button>
          <Button size="default" variant="filled" color="blue">
            Click Me
          </Button>
          <Button size="large" variant="filled" color="blue">
            Click Me
          </Button>
          <Button size="default" variant="filled" color="blue" disabled>
            Click Me
          </Button>
        </Inline>
        <Inline>
          <Button size="small" variant="outline" color="blue">
            Click Me
          </Button>
          <Button size="default" variant="outline" color="blue">
            Click Me
          </Button>
          <Button size="large" variant="outline" color="blue">
            Click Me
          </Button>
          <Button size="default" variant="outline" color="blue" disabled>
            Click Me
          </Button>
        </Inline>
        <Inline>
          <Button size="small" variant="mutedOutline" color="blue">
            Click Me
          </Button>
          <Button size="default" variant="mutedOutline" color="blue">
            Click Me
          </Button>
          <Button size="large" variant="mutedOutline" color="blue">
            Click Me
          </Button>
          <Button size="default" variant="mutedOutline" color="blue" disabled>
            Click Me
          </Button>
        </Inline>
        <Inline>
          <Button size="small" variant="text" color="blue">
            Click Me
          </Button>
          <Button size="default" variant="text" color="blue">
            Click Me
          </Button>
          <Button size="large" variant="text" color="blue">
            Click Me
          </Button>
          <Button size="default" variant="text" color="blue" disabled>
            Click Me
          </Button>
        </Inline>

        {/* Red */}
        <Inline>
          <Button size="small" variant="filled" color="red">
            Click Me
          </Button>
          <Button size="default" variant="filled" color="red">
            Click Me
          </Button>
          <Button size="large" variant="filled" color="red">
            Click Me
          </Button>
          <Button size="default" variant="filled" color="red" disabled>
            Click Me
          </Button>
        </Inline>
        <Inline>
          <Button size="small" variant="outline" color="red">
            Click Me
          </Button>
          <Button size="default" variant="outline" color="red">
            Click Me
          </Button>
          <Button size="large" variant="outline" color="red">
            Click Me
          </Button>
          <Button size="default" variant="outline" color="red" disabled>
            Click Me
          </Button>
        </Inline>
        <Inline>
          <Button size="small" variant="mutedOutline" color="red">
            Click Me
          </Button>
          <Button size="default" variant="mutedOutline" color="red">
            Click Me
          </Button>
          <Button size="large" variant="mutedOutline" color="red">
            Click Me
          </Button>
          <Button size="default" variant="mutedOutline" color="red" disabled>
            Click Me
          </Button>
        </Inline>
        <Inline>
          <Button size="small" variant="text" color="red">
            Click Me
          </Button>
          <Button size="default" variant="text" color="red">
            Click Me
          </Button>
          <Button size="large" variant="text" color="red">
            Click Me
          </Button>
          <Button size="default" variant="text" color="red" disabled>
            Click Me
          </Button>
        </Inline>

        {/* Gray */}
        <Inline>
          <Button size="small" variant="filled" color="gray">
            Click Me
          </Button>
          <Button size="default" variant="filled" color="gray">
            Click Me
          </Button>
          <Button size="large" variant="filled" color="gray">
            Click Me
          </Button>
          <Button size="default" variant="filled" color="gray" disabled>
            Click Me
          </Button>
        </Inline>
        <Inline>
          <Button size="small" variant="outline" color="gray">
            Click Me
          </Button>
          <Button size="default" variant="outline" color="gray">
            Click Me
          </Button>
          <Button size="large" variant="outline" color="gray">
            Click Me
          </Button>
          <Button size="default" variant="outline" color="gray" disabled>
            Click Me
          </Button>
        </Inline>
        <Inline>
          <Button size="small" variant="mutedOutline" color="gray">
            Click Me
          </Button>
          <Button size="default" variant="mutedOutline" color="gray">
            Click Me
          </Button>
          <Button size="large" variant="mutedOutline" color="gray">
            Click Me
          </Button>
          <Button size="default" variant="mutedOutline" color="gray" disabled>
            Click Me
          </Button>
        </Inline>
        <Inline>
          <Button size="small" variant="text" color="gray">
            Click Me
          </Button>
          <Button size="default" variant="text" color="gray">
            Click Me
          </Button>
          <Button size="large" variant="text" color="gray">
            Click Me
          </Button>
          <Button size="default" variant="text" color="gray" disabled>
            Click Me
          </Button>
        </Inline>

        {/* White */}
        <Box bg="gray.1000">
          <Stack>
            <Inline>
              <Button size="small" variant="filled" color="white">
                Click Me
              </Button>
              <Button size="default" variant="filled" color="white">
                Click Me
              </Button>
              <Button size="large" variant="filled" color="white">
                Click Me
              </Button>
              <Button size="default" variant="filled" color="white" disabled>
                Click Me
              </Button>
            </Inline>
            <Inline>
              <Button size="small" variant="outline" color="white">
                Click Me
              </Button>
              <Button size="default" variant="outline" color="white">
                Click Me
              </Button>
              <Button size="large" variant="outline" color="white">
                Click Me
              </Button>
              <Button size="default" variant="outline" color="white" disabled>
                Click Me
              </Button>
            </Inline>
            <Inline>
              <Button size="small" variant="mutedOutline" color="white">
                Click Me
              </Button>
              <Button size="default" variant="mutedOutline" color="white">
                Click Me
              </Button>
              <Button size="large" variant="mutedOutline" color="white">
                Click Me
              </Button>
              <Button size="default" variant="mutedOutline" color="white" disabled>
                Click Me
              </Button>
            </Inline>
            <Inline>
              <Button size="small" variant="text" color="white">
                Click Me
              </Button>
              <Button size="default" variant="text" color="white">
                Click Me
              </Button>
              <Button size="large" variant="text" color="white">
                Click Me
              </Button>
              <Button size="default" variant="text" color="white" disabled>
                Click Me
              </Button>
            </Inline>
          </Stack>
        </Box>
      </Stack>
    );
  });
});
