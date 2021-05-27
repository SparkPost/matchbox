import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { ComboBoxTextField, ComboBoxMenu, Box } from '@sparkpost/matchbox';

describe('ComboBox', () => {
  add('textfield', () => (
    <ComboBoxTextField
      id="story-id"
      selectedItems={[{ name: 'foo' }, { name: 'bar' }]}
      itemToString={({ name }) => name}
      defaultValue="input value"
      label="Filters"
    />
  ));

  add('menu', () => (
    <Box maxWidth="20rem">
      <ComboBoxMenu
        isOpen={true}
        items={[{ content: 'foo' }, { content: 'bar' }, { content: 'baz' }]}
        maxHeight="5rem"
      />
    </Box>
  ));

  add('textfield with error', () => (
    <ComboBoxTextField
      id="story-id"
      selectedItems={[{ name: 'foo' }, { name: 'bar' }]}
      itemToString={({ name }) => name}
      defaultValue="input value"
      label="Filters"
      error="Required"
      required
    />
  ));

  add('textfield with error and helptext', () => (
    <ComboBoxTextField
      id="story-id"
      selectedItems={[{ name: 'foo' }, { name: 'bar' }]}
      itemToString={({ name }) => name}
      defaultValue="input value"
      label="Filters"
      error="Required"
      helpText="Remember to filter something"
      required
    />
  ));

  add('textfield while disabled', () => (
    <ComboBoxTextField
      id="story-id"
      selectedItems={[{ name: 'foo' }, { name: 'bar' }]}
      itemToString={({ name }) => name}
      defaultValue="input value"
      label="Filters"
      disabled
    />
  ));
});
