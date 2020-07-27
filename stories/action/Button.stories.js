import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { Button, Inline, Box, Stack } from '@sparkpost/matchbox';

export default {
  title: 'Action|Button',
};

export const Sizing = withInfo()(() => (
  <Inline>
    <Button size="small">Small Button</Button>
    <Button>Default Button</Button>
    <Button size="large">Large Button</Button>
  </Inline>
));

export const Colors = withInfo({ propTables: [Button] })(() => (
  <Box bg="gray.100">
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
  </Box>
));

export const Destructive = withInfo()(() => (
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

export const Loading = withInfo({ propTables: [Button] })(() => (
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
  </Box>
));

export const TogglingLoading = () => {
  const [on, setOn] = React.useState(false);

  return (
    <Button
      color="blue"
      loading={on}
      onClick={() => {
        setOn(!on);
        window.setTimeout(() => setOn(false), 5000);
      }}
    >
      Click on me to load
    </Button>
  );
};
export const External = withInfo()(() => <Button to="http://google.com">Google</Button>);

export const Group = withInfo()(() => (
  <Button.Group>
    <Button>Linear</Button>
    <Button outlineBorder>Log</Button>
    <Button outlineBorder disabled>
      Sq Rt
    </Button>
  </Button.Group>
));

export const SystemProps = withInfo()(() => (
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
