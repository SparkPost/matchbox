import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { Autorenew, Search } from '@sparkpost/matchbox-icons';
import { TextField, Button, Tooltip, Stack, Select } from '@sparkpost/matchbox';

describe('TextField', () => {
  add('basic usage', () => <TextField id="id" label="Name" placeholder="Leslie Knope" />);

  add('error', () => <TextField id="id" error="You forgot an ID!" label="Template ID" />);

  add('required and error in label', () => (
    <TextField id="id" error="You forgot an ID!" label="Template ID" errorInLabel required />
  ));

  add('optional', () => <TextField id="id" label="Template ID" optional />);

  add('help text and error', () => (
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

  add('hidden label', () => <TextField id="id" labelHidden label="Template ID" />);

  add('disabled', () => <TextField id="id" label="Template ID" value="template-12" disabled />);

  add('text alignment', () => (
    <Stack>
      <TextField id="id" label="Right" value={500} align="right" suffix="emails" />
      <TextField id="id" label="Centered" value="What a weird input" align="center" />
    </Stack>
  ));

  add('connected with buttons', () => (
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

  add('connected with components', () => (
    <TextField
      id="id"
      label="Date Range"
      value="July 21, 2017 - July 28, 2017"
      connectLeft={
        <Tooltip content="Hey" id="hey">
          <Button outline>Injection Time</Button>
        </Tooltip>
      }
      connectRight={<Select options={['Last Week', 'Last 24 Hours']} />}
    />
  ));

  add('prefix and suffix', () => (
    <TextField id="id" prefix="$" suffix={<Autorenew />} suffixClassname="test" />
  ));

  add('connected with prefix and suffix', () => (
    <TextField
      id="id"
      label="Date Range"
      value="July 21, 2017 - July 28, 2017"
      connectLeft={<Select options={['Last Week', 'Last 24 Hours']} />}
      suffix={<Search />}
      prefix={<Search />}
    />
  ));

  add('multiline', () => <TextField id="id" label="Message" rows={5} multiline />);

  add('works with system props', () => (
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
});
