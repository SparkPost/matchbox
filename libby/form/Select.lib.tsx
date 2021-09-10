import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { Select } from '@sparkpost/matchbox';

const options = [
  'Foo',
  2,
  {
    value: '3',
    label: 'Very Very Very Very Very Very Very Very Very long text',
    pass: 'through',
  },
];

describe('Select', () => {
  add('basic usage', () => <Select id="id" label="Select an option" options={options} />);

  add('placeholder', () => (
    <Select
      id="id"
      label="Select an option"
      options={options}
      placeholder="Placeholder"
      placeholderValue="placeholder"
      value="placeholder"
    />
  ));

  add('error', () => (
    <Select id="id" label="Select an option" options={options} error="You forgot to select" />
  ));

  add('help text and error', () => (
    <Select
      id="id"
      label="Select an option"
      options={options}
      helpText="Remember to select something"
      error="You forgot to select"
    />
  ));

  add('required and error in label', () => (
    <Select
      id="id"
      label="Select an option"
      errorInLabel
      options={options}
      required
      error="You forgot to select"
    />
  ));

  add('hidden label', () => (
    <Select id="id" label="Select an option" labelHidden options={options} />
  ));

  add('optional', () => <Select id="id" label="Select an option" options={options} optional />);

  add('disabled', () => <Select id="id" label="Select an option" disabled options={options} />);

  // TODO Add this back in after hibana cutover
  // add('LabelHidden',() => (
  //   <Select id="id" labelHidden label="Select an option" disabled options={options} />
  // ));

  add('works with system props', () => (
    <>
      <Select
        id="id"
        label="Select an option"
        options={options}
        my={['200', '400', '600', '800']}
        maxWidth="800px"
      />
      <Select
        id="id"
        label="Select an option"
        options={options}
        mx={['200', '400', '600', '800']}
      />
    </>
  ));
});
