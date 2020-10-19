import React from 'react';

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

export default {
  title: 'Form|Select',
};

export const BasicSelect = () => <Select id="id" label="Select an option" options={options} />;

export const Placeholder = () => (
  <Select
    id="id"
    label="Select an option"
    options={options}
    placeholder="Placeholder"
    placeholderValue="placeholder"
    value="placeholder"
  />
);

export const WithError = () => (
  <Select id="id" label="Select an option" options={options} error="You forgot to select" />
);

export const WithHelpTextAndError = () => (
  <Select
    id="id"
    label="Select an option"
    options={options}
    helpText="Remember to select something"
    error="You forgot to select"
  />
);

export const WithRequiredAndErrorInLabel = () => (
  <Select
    id="id"
    label="Select an option"
    errorInLabel
    options={options}
    required
    error="You forgot to select"
  />
);

export const Optional = () => (
  <Select id="id" label="Select an option" options={options} optional />
);

export const Disabled = () => (
  <Select id="id" label="Select an option" disabled options={options} />
);

// TODO Add this back in after hibana cutover
// export const LabelHidden = (() => (
//   <Select id="id" labelHidden label="Select an option" disabled options={options} />
// ));

export const SystemProps = () => (
  <>
    <Select
      id="id"
      label="Select an option"
      options={options}
      my={['200', '400', '600', '800']}
      maxWidth="800px"
    />
    <Select id="id" label="Select an option" options={options} mx={['200', '400', '600', '800']} />
  </>
);
