import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { Radio, UnstyledLink } from '@sparkpost/matchbox';

describe('Radio', () => {
  add('basic usage', () => <Radio id="id" label="Check Me" />);
  add('without label', () => <Radio id="id" label="Check Me" labelHidden />);

  add('with JSX in label', () => (
    <Radio
      id="id"
      label={
        <span>
          One radio <UnstyledLink>please</UnstyledLink>
        </span>
      }
    />
  ));

  add('disabled', () => (
    <Radio.Group label="Disabled radio group">
      <Radio id="id" label="Check Me" disabled />
      <Radio id="id" label="Check Me" checked disabled />
    </Radio.Group>
  ));

  add('with help text', () => <Radio id="id" label="Check Me" helpText="Check this box" />);

  add('with error', () => <Radio id="id" label="Check Me" error="I'm an error" />);

  add('with error and help text', () => (
    <Radio id="id" label="Check Me" helpText="Check this box" error="Required" />
  ));

  add('group with label', () => (
    <Radio.Group label="This is a radio group">
      <Radio id="id" label="Option 1" name="group" />
      <Radio id="id2" label="Option 2" name="group" />
      <Radio id="id3" label="Option 3" name="group" />
    </Radio.Group>
  ));

  add('required group with label', () => (
    <Radio.Group label="This is a required radio group" required>
      <Radio id="id" label="Option 1" name="group" />
      <Radio id="id2" label="Option 2" name="group" />
      <Radio id="id3" label="Option 3" name="group" />
    </Radio.Group>
  ));

  add('optional group with label', () => (
    <Radio.Group label="This is an optional radio group" optional>
      <Radio id="id" label="Option 1" name="group" />
      <Radio id="id2" label="Option 2" name="group" />
      <Radio id="id3" label="Option 3" name="group" />
    </Radio.Group>
  ));

  add('group with hidden label', () => (
    <Radio.Group labelHidden label="This is a radio group">
      <Radio id="id" label="Option 1" name="group" />
      <Radio id="id2" label="Option 2" name="group" />
      <Radio id="id3" label="Option 3" name="group" />
    </Radio.Group>
  ));
});
