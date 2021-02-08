import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { Stack, Button, Inline, Box } from '@sparkpost/matchbox';
import { Assessment, AddCircleOutline, ArrowDropDown } from '@sparkpost/matchbox-icons';

describe('Button', () => {
  add('all sizes', () => (
    <Inline>
      <Button size="small">Small Button</Button>
      <Button>Default Button</Button>
      <Button size="large">Large Button</Button>
    </Inline>
  ));

  add('all variants', () => (
    <>
      <Inline>
        <Button variant="filled">Filled</Button>
        <Button disabled>Filled</Button>
        <Button variant="text">Text</Button>
        <Button variant="text" disabled>
          Text Disabled
        </Button>
        <Button variant="outline">Outline</Button>
        <Button variant="mutedOutline">Muted Outline</Button>
      </Inline>
      <br />
      <Inline>
        <Button variant="filled" color="red">
          Filled
        </Button>
        <Button variant="filled" color="red" disabled>
          Filled
        </Button>
        <Button color="red" variant="text">
          Text
        </Button>
        <Button color="red" variant="text" disabled>
          Text Disabled
        </Button>
        <Button color="red" variant="outline">
          Outline
        </Button>
        <Button color="red" variant="mutedOutline">
          Muted Outline
        </Button>
      </Inline>
      <br />
      <Inline>
        <Button variant="filled" color="blue">
          Filled
        </Button>
        <Button variant="filled" color="blue" disabled>
          Filled
        </Button>
        <Button color="blue" variant="text">
          Text
        </Button>
        <Button color="blue" variant="text" disabled>
          Text Disabled
        </Button>
        <Button color="blue" variant="outline">
          Outline
        </Button>
        <Button color="blue" variant="mutedOutline">
          Muted Outline
        </Button>
      </Inline>
      <br />
      <Box bg="gray.900" p="300" width="640px">
        <Inline>
          <Button variant="filled" color="white">
            Filled
          </Button>
          <Button variant="filled" color="white" disabled>
            Filled
          </Button>
          <Button color="white" variant="text">
            Text
          </Button>
          <Button color="white" variant="text" disabled>
            Text Disabled
          </Button>
          <Button color="white" variant="outline">
            Outline
          </Button>
          <Button color="white" variant="mutedOutline">
            Muted Outline
          </Button>
        </Inline>
      </Box>
    </>
  ));

  add('loading', () => (
    <Box display="flex" justifyContent="space-between">
      <Stack>
        <Button loading>Button</Button>
        <Button loading flat>
          Flat
        </Button>
        <Button loading outlineBorder>
          Outline Border
        </Button>
        <Button loading outline>
          Outline
        </Button>
      </Stack>

      <Stack>
        <Button loading color="red">
          Button
        </Button>
        <Button loading color="red" flat>
          Flat
        </Button>
        <Button loading color="red" outlineBorder>
          Outline Border
        </Button>
        <Button loading color="red" outline>
          Outline
        </Button>
      </Stack>

      <Stack>
        <Button loading color="blue">
          Button
        </Button>
        <Button loading color="blue" flat>
          Flat
        </Button>
        <Button loading color="blue" outlineBorder>
          Outline Border
        </Button>
        <Button loading color="blue" outline>
          Outline
        </Button>
      </Stack>

      <Box bg="gray.900" p="200">
        <Stack>
          <Button loading color="white">
            Button
          </Button>
          <Button loading color="white" flat>
            Flat
          </Button>
          <Button loading color="white" outlineBorder>
            Outline Border
          </Button>
          <Button loading color="white" outline>
            Outline
          </Button>
        </Stack>
      </Box>
    </Box>
  ));

  add('loading toggle', () => {
    const [on, setOn] = React.useState(false);

    return (
      <Button
        color="blue"
        loading={on}
        onClick={() => {
          setOn(!on);
          window.setTimeout(() => setOn(false), 3000);
        }}
      >
        Click on me to load
      </Button>
    );
  });

  add('as external link', () => (
    <Button to="http://google.com" external>
      Google
    </Button>
  ));

  add('button group', () => (
    <Button.Group>
      <Button>Linear</Button>
      <Button outlineBorder>Log</Button>
      <Button outlineBorder disabled>
        Sq Rt
      </Button>
    </Button.Group>
  ));

  add('as', () => (
    <Inline>
      <Button color="blue" as="a" to="http://google.com">
        As &lt;a&gt;
      </Button>
      <Button as="h2">As &lt;h2&gt;</Button>
    </Inline>
  ));

  add('icon', () => (
    <Inline>
      <Button outlineBorder>
        <Button.Icon as={Assessment} mr="100"></Button.Icon>
        Button
      </Button>
      <Button outline>
        Button<Button.Icon as={AddCircleOutline} size={20} ml="100"></Button.Icon>
      </Button>
      <Button color="blue">
        Button<Button.Icon as={ArrowDropDown} ml="200"></Button.Icon>
      </Button>
      <Box bg="gray.900" p="200">
        <Inline>
          <Button outline color="white">
            Button<Button.Icon as={AddCircleOutline} size={20} ml="100"></Button.Icon>
          </Button>
          <Button color="white">
            Button<Button.Icon as={ArrowDropDown} ml="200"></Button.Icon>
          </Button>
        </Inline>
      </Box>
    </Inline>
  ));

  add('system props', () => (
    <>
      <Button paddingLeft={800} mb="200" mr="200" width={[1, 1 / 2, 1 / 4]} color="blue">
        Submit
      </Button>
      <Button mb="200" mr="200" width={['100%', 1 / 5, 1 / 6]} outlineBorder>
        Cancel
      </Button>
      <Button mb="200" width={['100%', 1 / 6, 'auto']} flat>
        Reset
      </Button>
    </>
  ));

  describe('Deprecated', () => {
    add('variants', () => (
      <>
        <Inline>
          <Button>Button</Button>
          <Button disabled>Disabled</Button>
          <Button flat>Flat</Button>
          <Button flat disabled>
            Flat Disabled
          </Button>
          <Button outlineBorder>Outline Border</Button>
          <Button outline>Outline</Button>
        </Inline>
        <br />
        <Inline>
          <Button color="red">Button</Button>
          <Button color="red" disabled>
            Disabled
          </Button>
          <Button color="red" flat>
            Flat
          </Button>
          <Button color="red" flat disabled>
            Flat Disabled
          </Button>
          <Button color="red" outlineBorder>
            Outline Border
          </Button>
          <Button color="red" outline>
            Outline
          </Button>
        </Inline>
        <br />
        <Inline>
          <Button color="blue">Button</Button>
          <Button color="blue" disabled>
            Disabled
          </Button>
          <Button color="blue" flat>
            Flat
          </Button>
          <Button color="blue" flat disabled>
            Flat Disabled
          </Button>
          <Button color="blue" outlineBorder>
            Outline Border
          </Button>
          <Button color="blue" outline>
            Outline
          </Button>
        </Inline>
      </>
    ));

    add('destructive', () => (
      <Inline>
        <Button destructive size="small">
          Delete domain
        </Button>
        <Button destructive>Delete domain</Button>
        <Button destructive size="large">
          Delete domain
        </Button>
        <Button destructive disabled>
          Delete domain
        </Button>
      </Inline>
    ));
  });
});
