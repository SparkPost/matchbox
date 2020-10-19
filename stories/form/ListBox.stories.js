import React from 'react';

import { ListBox } from '@sparkpost/matchbox';

export default {
  title: 'Form|ListBox',
};

export const BasicListbox = () => (
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
);

export const PrintableCharacter = () => (
  <ListBox id="listbox-1" defaultValue="bravo" label="Select an option">
    <ListBox.Option value="alpha">Alpha</ListBox.Option>
    <ListBox.Option value="bravo">Bravo</ListBox.Option>
    <ListBox.Option value="charlie">Charlie</ListBox.Option>
    <ListBox.Option value="delta">Delta</ListBox.Option>
  </ListBox>
);

export const WithPlaceholder = () => (
  <ListBox id="listbox-2" label="Select an option" placeholder="Select One">
    <ListBox.Option value="option-1">Option 1</ListBox.Option>
    <ListBox.Option value="option-2">Option 2</ListBox.Option>
    <ListBox.Option value="option-3">Option 3</ListBox.Option>
    <ListBox.Option value="option-4">Option 4</ListBox.Option>
  </ListBox>
);

export const WithError = () => (
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
);

export const WithHelpTextAndError = () => (
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
);

export const WithRequiredAndErrorInLabel = () => (
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
);

export const Optional = () => (
  <ListBox id="listbox-4" label="Select an option" placeholder="Select One" optional>
    <ListBox.Option value="option-1">Option 1</ListBox.Option>
    <ListBox.Option value="option-2">Option 2</ListBox.Option>
    <ListBox.Option value="option-3">Option 3</ListBox.Option>
    <ListBox.Option value="option-4">Option 4</ListBox.Option>
  </ListBox>
);

export const Disabled = () => (
  <ListBox id="listbox-4" label="Select an option" placeholder="Select One" disabled>
    <ListBox.Option value="option-1">Option 1</ListBox.Option>
    <ListBox.Option value="option-2">Option 2</ListBox.Option>
    <ListBox.Option value="option-3">Option 3</ListBox.Option>
    <ListBox.Option value="option-4">Option 4</ListBox.Option>
  </ListBox>
);

export const WithARef = () => {
  function Example() {
    const ref = React.useRef();

    React.useEffect(() => {
      ref.current.focus();
    }, []);

    return (
      <ListBox
        id="listbox-1"
        defaultValue="option-2"
        label="Select an option"
        onChange={e => console.log(e.currentTarget.value)}
        ref={ref}
      >
        <ListBox.Option value="option-1">Option 1</ListBox.Option>
        <ListBox.Option value="option-2">Option 2</ListBox.Option>
        <ListBox.Option value="option-3">Option 3</ListBox.Option>
        <ListBox.Option value="option-4">Option 4</ListBox.Option>
      </ListBox>
    );
  }
  return <Example />;
};
