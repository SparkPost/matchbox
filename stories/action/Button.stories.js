import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import StoryContainer from '../storyHelpers/StoryContainer';
import { ThemeProvider } from '@sparkpost/matchbox/components/ThemeProvider';
import { Button, Box } from '@sparkpost/matchbox';

storiesOf('Action|Button', module)
  .addDecorator(getStory => (
    <ThemeProvider>
      <StoryContainer bg="white">{getStory()}</StoryContainer>
    </ThemeProvider>
  ))

  .add(
    'Sizing',
    withInfo()(() => (
      <div>
        <Button size="small">Small Button</Button> &nbsp;
        <Button>Default Button</Button> &nbsp;
        <Button size="large">Large Button</Button>
      </div>
    )),
  )

  .add(
    'Colors',
    withInfo()(() => (
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
    )),
  )

  .add(
    'Destructive',
    withInfo()(() => (
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
    )),
  )

  .add(
    'Outline',
    withInfo()(() => (
      <div>
        <Button outline size="small">
          Manage IPs
        </Button>{' '}
        &nbsp;
        <Button outline>Manage IPs</Button> &nbsp;
        <Button outline size="large">
          Manage IPs
        </Button>{' '}
        &nbsp;
        <Button outline disabled>
          Manage IPs
        </Button>{' '}
        &nbsp;
      </div>
    )),
  )

  .add(
    'External',
    withInfo()(() => <Button to="http://google.com">Google</Button>),
  )

  .add(
    'Group',
    withInfo()(() => (
      <Button.Group>
        <Button>Linear</Button>
        <Button>Log</Button>
        <Button disabled>Sq Rt</Button>
      </Button.Group>
    )),
  );
