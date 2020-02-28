import React from 'react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import StoryContainer from '../storyHelpers/StoryContainer';
import { ThemeProvider, Select } from '@sparkpost/matchbox';
// import { Select } from '@sparkpost/matchbox';

const options = [
  'Foo',
  2,
  {
    value: '3',
    label: 'Three',
    pass: 'through',
  },
];

addDecorator(storyFn => <ThemeProvider>{storyFn()}</ThemeProvider>);

export default {
  title: 'Form|Select',
};

export const BasicSelect = withInfo()(() => (
  <Select id="id" label="Select an option" options={options} />
));

// storiesOf('Form|Select', module)
//   .addDecorator(getStory => <StoryContainer bg="white">{getStory()}</StoryContainer>)
//   .add(
//     'Basic Select',
//     withInfo()(() => <Select id="id" label="Select an option" options={options} />),
//   )

//   .add(
//     'With an error',
//     withInfo()(() => (
//       <Select id="id" label="Select an option" options={options} error="Your forgot to select" />
//     )),
//   )

//   .add(
//     'Disabled',
//     withInfo()(() => <Select id="id" label="Select an option" options={options} disabled />),
//   )

//   .add(
//     'With help text',
//     withInfo()(() => (
//       <Select
//         id="id"
//         label="Select an option"
//         options={options}
//         helpText="Remember to select something"
//       />
//     )),
//   );
