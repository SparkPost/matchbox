import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { Autorenew, Search } from '@sparkpost/matchbox-icons';
import { TextField, Button, Tooltip, Stack, Select } from '@sparkpost/matchbox';

export default {
  title: 'Form|TextField',
};

export const BasicTextfield = withInfo()(() => (
  <TextField id="id" label="Name" placeholder="Leslie Knope" />
));

export const WithAnError = withInfo()(() => (
  <TextField id="id" error="You forgot an ID!" label="Template ID" />
));

export const RequiredAndErrorInLabel = withInfo()(() => (
  <TextField id="id" error="You forgot an ID!" label="Template ID" errorInLabel required />
));

export const HelpTextAndError = withInfo()(() => (
  <TextField
    id="id"
    error="You forgot an ID!"
    label="Template ID"
    helpText={
      <>
        A unique ID for your <a>template</a>.
      </>
    }
  />
));

export const HiddenLabel = withInfo()(() => <TextField id="id" labelHidden label="Template ID" />);

export const Disabled = withInfo()(() => (
  <TextField id="id" label="Template ID" value="template-12" disabled />
));

export const WithTextAlignment = withInfo()(() => (
  <Stack>
    <TextField id="id" label="Right" value={500} align="right" suffix="emails" />
    <TextField id="id" label="Centered" value="What a weird input" align="center" />
  </Stack>
));

export const ConnectedWithButtons = withInfo()(() => (
  <TextField
    id="id"
    label="Button"
    value="Button Value"
    connectLeft={
      <Button color="blue" outline>
        + Add
      </Button>
    }
    connectRight={
      <Button color="red" outline>
        Delete
      </Button>
    }
  />
));

export const ConnectedComponents = withInfo()(() => (
  <TextField
    id="id"
    label="Date Range"
    value="July 21, 2017 - July 28, 2017"
    connectLeft={
      <Tooltip content="Hey">
        <Button outline>Injection Time</Button>
      </Tooltip>
    }
    connectRight={<Select options={['Last Week', 'Last 24 Hours']} />}
  />
));

export const PrefixAndSuffix = withInfo()(() => (
  <TextField id="id" prefix="$" suffix={<Autorenew />} suffixClassname="test" />
));

export const ConnectedComponentsWithSuffix = withInfo()(() => (
  <TextField
    id="id"
    label="Date Range"
    value="July 21, 2017 - July 28, 2017"
    connectLeft={<Select options={['Last Week', 'Last 24 Hours']} />}
    suffix={<Search />}
  />
));

export const Multiline = withInfo()(() => <TextField id="id" label="Message" rows="5" multiline />);

export const SystemProps = withInfo()(() => (
  <>
    <TextField
      id="id"
      label="Name"
      placeholder="Leslie Knope"
      my={['200', '400', null, '700']}
      maxWidth="800px"
    />
    <TextField
      id="id"
      label="Email"
      placeholder="leslie.knope@pawnee.in.gov"
      mx={['200', '400', null, '700']}
    />
  </>
));
