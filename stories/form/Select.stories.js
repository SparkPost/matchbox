import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { Select } from '@sparkpost/matchbox';

const options = [
  'Foo',
  2,
  {
    value: '3',
    label: 'Three',
    pass: 'through',
  },
];

export default {
  title: 'Form|Select',
};

export const BasicSelect = withInfo()(() => (
  <Select id="id" label="Select an option" options={options} />
));

export const Placeholder = withInfo()(() => (
  <Select
    id="id"
    label="Select an option"
    options={options}
    placeholder="Placeholder"
    placeholderValue="placeholder"
    value="placeholder"
  />
));

export const WithError = withInfo()(() => (
  <Select id="id" label="Select an option" options={options} error="You forgot to select" />
));

export const WithHelpTextAndError = withInfo()(() => (
  <Select
    id="id"
    label="Select an option"
    options={options}
    helpText="Remember to select something"
    error="You forgot to select"
  />
));

export const WithRequiredAndErrorInLabel = withInfo()(() => (
  <Select
    id="id"
    label="Select an option"
    errorInLabel
    options={options}
    required
    error="You forgot to select"
  />
));

export const Disabled = withInfo()(() => (
  <Select id="id" label="Select an option" disabled options={options} />
));

// TODO Add this back in after hibana cutover
// export const LabelHidden = withInfo()(() => (
//   <Select id="id" labelHidden label="Select an option" disabled options={options} />
// ));

export const SystemProps = withInfo()(() => (
  <>
    <Select id="id" label="Select an option" options={options} my={['200', '400', '600', '800']} />
    <Select id="id" label="Select an option" options={options} mx={['200', '400', '600', '800']} />
  </>
));
