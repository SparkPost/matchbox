import React from 'react';
import { Radio, UnstyledLink } from '@sparkpost/matchbox';

export default {
  title: 'Form/Radio',
};

export const BasicRadio = () => <Radio id="id" label="Check Me" />;
export const WithoutLabel = () => <Radio id="id" label="Check Me" labelHidden />;

export const WithJSXInLabel = () => (
  <Radio
    id="id"
    label={
      <span>
        One radio <UnstyledLink>please</UnstyledLink>
      </span>
    }
  />
);

export const Disabled = () => (
  <Radio.Group>
    <Radio id="id" label="Check Me" disabled />
    <Radio id="id" label="Check Me" checked disabled />
  </Radio.Group>
);

export const WithHelpText = () => <Radio id="id" label="Check Me" helpText="Check this box" />;

export const WithError = () => <Radio id="id" label="Check Me" error="I'm an error" />;

export const GroupWithLabel = () => (
  <Radio.Group label="This is a radio group">
    <Radio id="id" label="Option 1" name="group" />
    <Radio id="id2" label="Option 2" name="group" />
    <Radio id="id3" label="Option 3" name="group" />
  </Radio.Group>
);

export const RequiredGroupWithLabel = () => (
  <Radio.Group label="This is a required radio group" required>
    <Radio id="id" label="Option 1" name="group" />
    <Radio id="id2" label="Option 2" name="group" />
    <Radio id="id3" label="Option 3" name="group" />
  </Radio.Group>
);

export const OptionalGroupWithLabel = () => (
  <Radio.Group label="This is an optional radio group" optional>
    <Radio id="id" label="Option 1" name="group" />
    <Radio id="id2" label="Option 2" name="group" />
    <Radio id="id3" label="Option 3" name="group" />
  </Radio.Group>
);

export const GroupWithHiddenLabel = () => (
  <Radio.Group labelHidden label="This is a radio group">
    <Radio id="id" label="Option 1" name="group" />
    <Radio id="id2" label="Option 2" name="group" />
    <Radio id="id3" label="Option 3" name="group" />
  </Radio.Group>
);
