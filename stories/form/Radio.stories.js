import React from 'react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { ThemeProvider } from '@sparkpost/matchbox';
import { Radio, UnstyledLink } from '@sparkpost/matchbox';

addDecorator(storyFn => <ThemeProvider>{storyFn()}</ThemeProvider>);

export default {
  title: 'Form|Radio',
};

export const BasicRadio = withInfo()(() => <Radio id="id" label="Check Me" />);
export const WithoutLabel = withInfo()(() => <Radio id="id" label="Check Me" labelHidden />);

export const WithJSXInLabel = withInfo()(() => (
  <Radio
    id="id"
    label={
      <span>
        One radio <UnstyledLink>please</UnstyledLink>
      </span>
    }
  />
));

export const Disabled = withInfo()(() => (
  <Radio.Group>
    <Radio id="id" label="Check Me" disabled />
    <Radio id="id" label="Check Me" checked disabled />
  </Radio.Group>
));

export const WithHelpText = withInfo()(() => (
  <Radio id="id" label="Check Me" helpText="Check this box" />
));

export const WithError = withInfo()(() => <Radio id="id" label="Check Me" error="I'm an error" />);

export const GroupWithLabel = withInfo()(() => (
  <Radio.Group label="This is a radio group">
    <Radio id="id" label="Option 1" name="group" />
    <Radio id="id2" label="Option 2" name="group" />
    <Radio id="id3" label="Option 3" name="group" />
  </Radio.Group>
));

export const GroupWithHiddenLabel = withInfo()(() => (
  <Radio.Group labelHidden label="This is a radio group">
    <Radio id="id" label="Option 1" name="group" />
    <Radio id="id2" label="Option 2" name="group" />
    <Radio id="id3" label="Option 3" name="group" />
  </Radio.Group>
));
