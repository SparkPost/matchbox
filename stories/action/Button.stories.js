import React from 'react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import StoryContainer from '../storyHelpers/StoryContainer';
import { ThemeProvider } from '@sparkpost/matchbox/components/ThemeProvider';
import { Button, Box } from '@sparkpost/matchbox';

addDecorator(storyFn => (
  <ThemeProvider>
    <StoryContainer bg="white">{storyFn()}</StoryContainer>
  </ThemeProvider>
));

export default {
  title: 'Action|Button',
};

export const Sizing = withInfo()(() => (
  <div>
    <Button size="small">Small Button</Button> &nbsp;
    <Button>Default Button</Button> &nbsp;
    <Button size="large">Large Button</Button>
  </div>
));

export const Colors = withInfo({ propTables: [Button] })(() => (
  <div>
    <Box mb="400">
      <Button>Button</Button> &nbsp;
      <Button disabled>Disabled</Button> &nbsp;
      <Button flat>Flat</Button> &nbsp;
      <Button flat disabled>
        Flat Disabled
      </Button>{' '}
      &nbsp;
      <Button outline>Outline</Button> &nbsp;
    </Box>
    <Box mb="400">
      <Button color="red">Button</Button> &nbsp;
      <Button color="red" disabled>
        Disabled
      </Button>{' '}
      &nbsp;
      <Button color="red" flat>
        Flat
      </Button>{' '}
      &nbsp;
      <Button color="red" flat disabled>
        Flat Disabled
      </Button>{' '}
      &nbsp;
      <Button color="red" outline>
        Outline
      </Button>{' '}
      &nbsp;
    </Box>
    <Box mb="400">
      <Button color="blue">Button</Button> &nbsp;
      <Button color="blue" disabled>
        Disabled
      </Button>{' '}
      &nbsp;
      <Button color="blue" flat>
        Flat
      </Button>{' '}
      &nbsp;
      <Button color="blue" flat disabled>
        Flat Disabled
      </Button>{' '}
      &nbsp;
      <Button color="blue" outline>
        Outline
      </Button>{' '}
      &nbsp;
    </Box>
  </div>
));

export const Destructive = withInfo()(() => (
  <div>
    <Button destructive size="small">
      Delete domain
    </Button>{' '}
    &nbsp;
    <Button destructive>Delete domain</Button> &nbsp;
    <Button destructive size="large">
      Delete domain
    </Button>{' '}
    &nbsp;
    <Button destructive disabled>
      Delete domain
    </Button>{' '}
    &nbsp;
  </div>
));

export const External = withInfo()(() => <Button to="http://google.com">Google</Button>);

export const Group = withInfo()(() => (
  <Button.Group>
    <Button>Linear</Button>
    <Button outline>Log</Button>
    <Button outline disabled>
      Sq Rt
    </Button>
  </Button.Group>
));
