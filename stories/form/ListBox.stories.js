import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { ListBox } from '@sparkpost/matchbox';

export default {
  title: 'Form|ListBox',
};

export const BasicListbox = withInfo()(() => (
  <ListBox
    id="listbox-1"
    defaultValue="option-1"
    label="Select an option"
    onChange={e => console.log(e)}
  >
    <ListBox.Option value="option-1">Option 1</ListBox.Option>
    <ListBox.Option value="option-2">Option 2</ListBox.Option>
    <ListBox.Option value="option-3">Option 3</ListBox.Option>
    <ListBox.Option value="option-4">Option 4</ListBox.Option>
  </ListBox>
));

export const PrintableCharacter = withInfo()(() => (
  <ListBox id="listbox-1" defaultValue="bravo" label="Select an option">
    <ListBox.Option value="alpha">Alpha</ListBox.Option>
    <ListBox.Option value="bravo">Bravo</ListBox.Option>
    <ListBox.Option value="charlie">Charlie</ListBox.Option>
    <ListBox.Option value="delta">Delta</ListBox.Option>
  </ListBox>
));

export const WithPlaceholder = withInfo()(() => (
  <ListBox id="listbox-2" label="Select an option" placeholder="Select One">
    <ListBox.Option value="option-1">Option 1</ListBox.Option>
    <ListBox.Option value="option-2">Option 2</ListBox.Option>
    <ListBox.Option value="option-3">Option 3</ListBox.Option>
    <ListBox.Option value="option-4">Option 4</ListBox.Option>
  </ListBox>
));

export const WithError = withInfo()(() => (
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
));

export const WithHelpTextAndError = withInfo()(() => (
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
));

export const WithRequiredAndErrorInLabel = withInfo()(() => (
  <ListBox
    id="listbox-4"
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
));

export const Optional = withInfo()(() => (
  <ListBox id="listbox-4" label="Select an option" placeholder="Select One" optional>
    <ListBox.Option value="option-1">Option 1</ListBox.Option>
    <ListBox.Option value="option-2">Option 2</ListBox.Option>
    <ListBox.Option value="option-3">Option 3</ListBox.Option>
    <ListBox.Option value="option-4">Option 4</ListBox.Option>
  </ListBox>
));

export const Disabled = withInfo()(() => (
  <ListBox id="listbox-4" label="Select an option" placeholder="Select One" disabled>
    <ListBox.Option value="option-1">Option 1</ListBox.Option>
    <ListBox.Option value="option-2">Option 2</ListBox.Option>
    <ListBox.Option value="option-3">Option 3</ListBox.Option>
    <ListBox.Option value="option-4">Option 4</ListBox.Option>
  </ListBox>
));
