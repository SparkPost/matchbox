import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { Radio, UnstyledLink } from '@sparkpost/matchbox';

describe('Visual Regression', () => {
  add('Radio', () => (
    <>
      <Radio id="id1" label="Check Me" />
      <Radio id="id2" label="Check Me" labelHidden />
      {/* JSX In Label */}
      <Radio
        id="id3"
        label={
          <span>
            One radio <UnstyledLink>please</UnstyledLink>
          </span>
        }
      />
      {/* Disabled */}
      <Radio.Group label="Disabled radio group">
        <Radio id="id4" label="Check Me" disabled />
        <Radio id="id4" label="Check Me" checked disabled />
      </Radio.Group>
      {/* Help Text */}
      <Radio id="id5" label="Check Me" helpText="Check this box" />
      {/* Error */}
      <Radio id="id6" label="Check Me" error="I'm an error" />
      {/* Help Text & Error */}
      <Radio id="id7" label="Check Me" helpText="Check this box" error="Required" />
      {/* Group with Label */}
      <Radio.Group label="This is a radio group">
        <Radio id="id8" label="Option 1" name="group" />
        <Radio id="id9" label="Option 2" name="group" />
        <Radio id="id10" label="Option 3" name="group" />
      </Radio.Group>
      {/* Required group with label */}
      <Radio.Group label="This is a required radio group" required>
        <Radio id="id11" label="Option 1" name="group" />
        <Radio id="id12" label="Option 2" name="group" />
        <Radio id="id13" label="Option 3" name="group" />
      </Radio.Group>
      {/* Optional group with label */}
      <Radio.Group label="This is an optional radio group" optional>
        <Radio id="id14" label="Option 1" name="group" />
        <Radio id="id15" label="Option 2" name="group" />
        <Radio id="id16" label="Option 3" name="group" />
      </Radio.Group>
      {/* Group with hidden label */}
      <Radio.Group labelHidden label="This is a radio group">
        <Radio id="id17" label="Option 1" name="group" />
        <Radio id="id18" label="Option 2" name="group" />
        <Radio id="id19" label="Option 3" name="group" />
      </Radio.Group>
    </>
  ));
});
