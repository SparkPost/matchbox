import React from 'react';

import { describe, add } from '@sparkpost/libby-react';
import { ListBox, Inline } from '@sparkpost/matchbox';

describe('ListBox', () => {
  add('basic usage', () => (
    <ListBox
      id="listbox-1"
      defaultValue="option-1"
      label="Select an option"
      onChange={e => console.log(e)}
      onFocus={() => console.log('focus')}
      onBlur={() => console.log('blur')}
    >
      <ListBox.Option value="option-1">Option 1</ListBox.Option>
      <ListBox.Option value="option-2">Option 2</ListBox.Option>
      <ListBox.Option value="option-3">Option 3</ListBox.Option>
      <ListBox.Option value="option-4">Option 4</ListBox.Option>
    </ListBox>
  ));

  add('printable characters', () => (
    <>
      <ListBox
        id="listbox-1"
        data-id="test-data-id"
        defaultValue="bravo"
        label="Select an option"
        name="listbox-test"
      >
        <ListBox.Option value="alpha">Alpha</ListBox.Option>
        <ListBox.Option value="bravo">Bravo</ListBox.Option>
        <ListBox.Option value="charlie">Charlie</ListBox.Option>
        <ListBox.Option value="delta">Delta</ListBox.Option>
      </ListBox>
      {/* This is here for cypress tests */}
      <button>end focus test</button>
    </>
  ));

  add('placeholder', () => (
    <ListBox id="listbox-2" label="Select an option" placeholder="Select One">
      <ListBox.Option value="option-1">Option 1</ListBox.Option>
      <ListBox.Option value="option-2">Option 2</ListBox.Option>
      <ListBox.Option value="option-3">Option 3</ListBox.Option>
      <ListBox.Option value="option-4">Option 4</ListBox.Option>
    </ListBox>
  ));

  add('error', () => (
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

  add('help text and error', () => (
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

  add('required and error in label', () => (
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

  add('optional', () => (
    <ListBox id="listbox-4" label="Select an option" placeholder="Select One" optional>
      <ListBox.Option value="option-1">Option 1</ListBox.Option>
      <ListBox.Option value="option-2">Option 2</ListBox.Option>
      <ListBox.Option value="option-3">Option 3</ListBox.Option>
      <ListBox.Option value="option-4">Option 4</ListBox.Option>
    </ListBox>
  ));

  add('disabled', () => (
    <ListBox id="listbox-4" label="Select an option" placeholder="Select One" disabled>
      <ListBox.Option value="option-1">Option 1</ListBox.Option>
      <ListBox.Option value="option-2">Option 2</ListBox.Option>
      <ListBox.Option value="option-3">Option 3</ListBox.Option>
      <ListBox.Option value="option-4">Option 4</ListBox.Option>
    </ListBox>
  ));

  add('with a custom ref', () => {
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
  });

  add('as an inline element', () => (
    <Inline>
      <ListBox id="listbox-4" label="Select an option" placeholder="Select One">
        <ListBox.Option value="option-1">Option 1</ListBox.Option>
        <ListBox.Option value="option-2">Option 2</ListBox.Option>
        <ListBox.Option value="option-3">Option 3</ListBox.Option>
        <ListBox.Option value="option-4">Option 4</ListBox.Option>
      </ListBox>
    </Inline>
  ));

  add('in parent form', () => (
    <form id="listbox-parent-form" onSubmit={() => console.log('submitted')}>
      <ListBox
        id="listbox-5"
        label="Select an option"
        placeholder="Select One"
        onChange={e => console.log(e)}
        name="listbox-form-test"
      >
        <ListBox.Option value="option-1">Option 1</ListBox.Option>
        <ListBox.Option value="option-2">Option 2</ListBox.Option>
        <ListBox.Option value="option-3">Option 3</ListBox.Option>
        <ListBox.Option value="option-4">Option 4</ListBox.Option>
      </ListBox>
    </form>
  ));
});
