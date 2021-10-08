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

describe('Visual Regression', () => {
  add('Select', () => (
    <>
      <Select id="id1" label="Select an option" options={options} />
      {/* Placeholder */}
      <Select
        id="id2"
        label="Select an option"
        options={options}
        placeholder="Placeholder"
        placeholderValue="placeholder"
        value="placeholder"
      />
      {/* Error */}
      <Select id="id3" label="Select an option" options={options} error="You forgot to select" />
      {/* Help Text and Error */}
      <Select
        id="id4"
        label="Select an option"
        options={options}
        helpText="Remember to select something"
        error="You forgot to select"
      />
      {/* Required and error in label */}
      <Select
        id="id5"
        label="Select an option"
        errorInLabel
        options={options}
        required
        error="You forgot to select"
      />
      {/* Hidden label */}
      <Select id="id6" label="Select an option" labelHidden options={options} />
      {/* Optional */}
      <Select id="id7" label="Select an option" options={options} optional />
      {/* Disabled */}
      <Select id="id8" label="Select an option" disabled options={options} />
      {/* System props */}
      <Select
        id="id9"
        label="Select an option"
        options={options}
        my={['200', '400', '600', '800']}
        maxWidth="800px"
      />
      <Select
        id="id10"
        label="Select an option"
        options={options}
        mx={['200', '400', '600', '800']}
      />
    </>
  ));
});
