import React from 'react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { ThemeProvider } from '@sparkpost/matchbox';
import { Checkbox, UnstyledLink } from '@sparkpost/matchbox';

addDecorator(storyFn => <ThemeProvider>{storyFn()}</ThemeProvider>);

export default {
  title: 'Form|Checkbox',
};

export const BasicCheckout = withInfo()(() => <Checkbox id="id" label="Check Me" />);

export const WithoutLabel = withInfo()(() => <Checkbox id="id" label="Check Me" labelHidden />);

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

export const Disabled = withInfo()(() => (
  <>
    <Checkbox id="id5" label="Disabled" disabled />
    <Checkbox id="id6" label="Disabled Checked" disabled checked />
  </>
));

export const WithHelpText = withInfo()(() => (
  <Checkbox id="id" label="Check Me" helpText="Check this box" />
));

export const WithErrorAndRequired = withInfo()(() => (
  <Checkbox id="id" label="Check Me" error="I'm an error" required />
));

export const GroupWithLabel = withInfo()(() => (
  <div>
    <Checkbox.Group label="Example">
      <Checkbox id="id2" label="Check Me" />
      <Checkbox id="id3" label="Check Me" />
      <Checkbox id="id4" label="Check Me" />
    </Checkbox.Group>
  </div>
));

export const GroupWithHiddenLabel = withInfo()(() => (
  <div>
    <Checkbox.Group label="I'm a group" labelHidden>
      <Checkbox id="id2" label="Check Me" />
      <Checkbox id="id3" label="Check Me" />
      <Checkbox id="id4" label="Check Me" />
    </Checkbox.Group>
  </div>
));
