import React from 'react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import StoryContainer from '../storyHelpers/StoryContainer';
import { ThemeProvider } from '@sparkpost/matchbox/components/ThemeProvider';
import { Button, Inline } from '@sparkpost/matchbox';

addDecorator(storyFn => (
  <ThemeProvider>
    <StoryContainer bg="white">{storyFn()}</StoryContainer>
  </ThemeProvider>
));

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
