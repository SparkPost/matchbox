import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { TextField, ListBox, Button, Stack, UnstyledLink } from '@sparkpost/matchbox';
import { Search } from '@sparkpost/matchbox-icons';

describe('Visual Regression', () => {
  add('TextField', () => {
    return (
      <Stack>
        <TextField value="Value" id="id" label="Textarea" multiline />
        <TextField
          connectRight={
            <ListBox id="listbox-1" defaultValue="option-1">
              <ListBox.Option value="option-1">Option 1</ListBox.Option>
              <ListBox.Option value="option-2">Option 2</ListBox.Option>
              <ListBox.Option value="option-3">Option 3</ListBox.Option>
              <ListBox.Option value="option-4">Option 4</ListBox.Option>
            </ListBox>
          }
          connectLeft={<Button variant="mutedOutline">Left</Button>}
          prefix="Prefix"
          suffix={<Search />}
          value="Value"
          id="id"
          label="Label"
          required
          optional
        />

        <TextField
          connectRight={
            <ListBox id="listbox-1" defaultValue="option-1">
              <ListBox.Option value="option-1">Option 1</ListBox.Option>
              <ListBox.Option value="option-2">Option 2</ListBox.Option>
              <ListBox.Option value="option-3">Option 3</ListBox.Option>
              <ListBox.Option value="option-4">Option 4</ListBox.Option>
            </ListBox>
          }
          connectLeft={<Button variant="mutedOutline">Left</Button>}
          prefix="Prefix"
          suffix={<Search />}
          value="Value"
          id="id"
          label="Label"
          labelHidden
          required
          optional
          helpText={
            <>
              This is help text with <UnstyledLink to="#">a link</UnstyledLink>
            </>
          }
          error="This is an error"
        />
      </Stack>
    );
  });
});
