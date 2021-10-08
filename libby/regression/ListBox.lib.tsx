import React from 'react';

import { describe, add } from '@sparkpost/libby-react';
import { ListBox, Inline } from '@sparkpost/matchbox';

describe('Visual Regression', () => {
  add('ListBox', () => (
    <>
      <ListBox id="listbox-1" defaultValue="option-1" label="Select an option" data-track="true">
        <ListBox.Option value="option-1">Option 1</ListBox.Option>
        <ListBox.Option value="option-2">Option 2</ListBox.Option>
        <ListBox.Option value="option-3">Option 3</ListBox.Option>
        <ListBox.Option value="option-4">Option 4</ListBox.Option>
      </ListBox>
      {/* Placeholder */}
      <ListBox id="listbox-2" label="Select an option" placeholder="Select One">
        <ListBox.Option value="option-1">Option 1</ListBox.Option>
        <ListBox.Option value="option-2">Option 2</ListBox.Option>
        <ListBox.Option value="option-3">Option 3</ListBox.Option>
        <ListBox.Option value="option-4">Option 4</ListBox.Option>
      </ListBox>
      {/* Error */}
      <ListBox
        id="listbox-3"
        label="Select an option"
        error="You must select an option"
        value="option-1"
      >
        <ListBox.Option value="option-1">Option 1</ListBox.Option>
        <ListBox.Option value="option-2">Option 2</ListBox.Option>
        <ListBox.Option value="option-3">Option 3</ListBox.Option>
        <ListBox.Option value="option-4">Option 4</ListBox.Option>
      </ListBox>
      {/* Help text and error */}
      <ListBox
        id="listbox-4"
        label="Select an option"
        placeholder="Select One"
        error="You must select an option"
        helpText="Remember to select an option"
      >
        <ListBox.Option value="option-1">Option 1</ListBox.Option>
        <ListBox.Option value="option-2">Option 2</ListBox.Option>
        <ListBox.Option value="option-3">Option 3</ListBox.Option>
        <ListBox.Option value="option-4">Option 4</ListBox.Option>
      </ListBox>
      {/* Required and error in label */}
      <ListBox
        id="listbox-5"
        label="Select an option"
        placeholder="Select One"
        error="You must select an option"
        required
        errorInLabel
      >
        <ListBox.Option value="option-1">Option 1</ListBox.Option>
        <ListBox.Option value="option-2">Option 2</ListBox.Option>
        <ListBox.Option value="option-3">Option 3</ListBox.Option>
        <ListBox.Option value="option-4">Option 4</ListBox.Option>
      </ListBox>
      {/* Optional */}
      <ListBox id="listbox-6" label="Select an option" placeholder="Select One" optional>
        <ListBox.Option value="option-1">Option 1</ListBox.Option>
        <ListBox.Option value="option-2">Option 2</ListBox.Option>
        <ListBox.Option value="option-3">Option 3</ListBox.Option>
        <ListBox.Option value="option-4">Option 4</ListBox.Option>
      </ListBox>
      {/* Disabled */}
      <ListBox id="listbox-7" label="Select an option" placeholder="Select One" disabled>
        <ListBox.Option value="option-1">Option 1</ListBox.Option>
        <ListBox.Option value="option-2">Option 2</ListBox.Option>
        <ListBox.Option value="option-3">Option 3</ListBox.Option>
        <ListBox.Option value="option-4">Option 4</ListBox.Option>
      </ListBox>
      {/* Inline */}
      <Inline>
        <ListBox id="listbox-8" label="Select an option" placeholder="Select One">
          <ListBox.Option value="option-1">Option 1</ListBox.Option>
          <ListBox.Option value="option-2">Option 2</ListBox.Option>
          <ListBox.Option value="option-3">Option 3</ListBox.Option>
          <ListBox.Option value="option-4">Option 4</ListBox.Option>
        </ListBox>
      </Inline>
      {/* Open */}
      <ListBox id="listbox-9" defaultValue="option-1" label="Select an option" data-track="true">
        <ListBox.Option value="option-1">Option 1</ListBox.Option>
        <ListBox.Option value="option-2">Option 2</ListBox.Option>
        <ListBox.Option value="option-3">Option 3</ListBox.Option>
        <ListBox.Option value="option-4">Option 4</ListBox.Option>
      </ListBox>
    </>
  ));
});
