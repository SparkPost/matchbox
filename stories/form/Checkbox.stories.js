import React from 'react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { ThemeProvider } from '@sparkpost/matchbox';
import { Checkbox, UnstyledLink } from '@sparkpost/matchbox';

addDecorator(storyFn => <ThemeProvider bg="white">{storyFn()}</ThemeProvider>);

export default {
  title: 'Form|Checkbox',
};

export const BasicCheckout = withInfo()(() => <Checkbox id="id" label="Check Me" />);

export const WithoutLabel = withInfo()(() => (
  <Checkbox id="id" label="Check Me" labelHidden checked="indeterminate" />
));

export const WithJSXInLabel = withInfo()(() => (
  <Checkbox
    id="id"
    label={
      <span>
        I agree to SparkPost's <UnstyledLink>Terms of Use</UnstyledLink>
      </span>
    }
  />
));

export const Disabled = withInfo()(() => <Checkbox id="id" label="Check Me" disabled />);

export const WithHelpText = withInfo()(() => (
  <Checkbox id="id" label="Check Me" helpText="Check this box" />
));

export const Group = withInfo('This component only styles its children with correct spacing.')(
  () => (
    <div>
      <Checkbox id="id" label="Parent" />
      <Checkbox.Group>
        <Checkbox id="id2" label="Check Me" />
        <Checkbox id="id3" label="Check Me" />
        <Checkbox id="id4" label="Check Me" />
      </Checkbox.Group>
    </div>
  ),
);

export const GroupWithLabel = withInfo()(() => (
  <div>
    <Checkbox.Group label="Example">
      <Checkbox id="id2" label="Check Me" />
      <Checkbox id="id3" label="Check Me" />
      <Checkbox id="id4" label="Check Me" />
    </Checkbox.Group>
  </div>
));
