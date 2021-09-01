import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { Box, Checkbox, UnstyledLink } from '@sparkpost/matchbox';

describe('Checkbox', () => {
  add('basic usage', () => <Checkbox id="id" label="Check Me" />);
  add('without label', () => <Checkbox id="id" label="Check Me" labelHidden />);
  add('with JSX in label', () => (
    <Checkbox
      id="id"
      label={
        <span>
          I agree to SparkPost&apos;s <UnstyledLink>Terms of Use</UnstyledLink>
        </span>
      }
    />
  ));

  add('disabled', () => (
    <>
      <Checkbox id="id5" label="Disabled" disabled />
      <Checkbox id="id6" label="Disabled Checked" disabled checked />
    </>
  ));

  add('with help text', () => <Checkbox id="id" label="Check Me" helpText="Check this box" />);
  add('with error and help text', () => (
    <Checkbox id="id" label="Check Me" helpText="Check this box" error="I'm an error" />
  ));

  add('with error and required', () => (
    <Checkbox id="id" label="Check Me" error="I'm an error" required />
  ));

  add('group with label', () => (
    <Checkbox.Group label="Example">
      <Checkbox id="id2" label="Check Me" />
      <Checkbox id="id3" label="Check Me" />
      <Checkbox id="id4" label="Check Me" />
    </Checkbox.Group>
  ));

  add('group with hidden label', () => (
    <Checkbox.Group label="I'm a group" labelHidden>
      <Checkbox id="id2" label="Check Me" />
      <Checkbox id="id3" label="Check Me" />
      <Checkbox id="id4" label="Check Me" />
    </Checkbox.Group>
  ));

  add('optional group with label', () => (
    <Checkbox.Group label="Example" optional>
      <Checkbox id="id2" label="Check Me" />
      <Checkbox id="id3" label="Check Me" />
      <Checkbox id="id4" label="Check Me" />
    </Checkbox.Group>
  ));

  add('indeterminate group', () => {
    const [checked1, setChecked1] = React.useState(false);
    const [checked2, setChecked2] = React.useState(false);
    const [indeterminate, setIndeterminate] = React.useState(null);

    React.useLayoutEffect(() => {
      if (checked1 || checked2) {
        setIndeterminate('indeterminate');
      }
      if (checked1 && checked2) {
        setIndeterminate(true);
      }

      if (!checked1 && !checked2) {
        setIndeterminate(false);
      }
    }, [checked1, checked2]);

    function handleIndeterminate() {
      setIndeterminate(!indeterminate);
      setChecked1(!indeterminate);
      setChecked2(!indeterminate);
    }

    function flip(cb, value) {
      return () => {
        cb(!value);
      };
    }

    return (
      <div>
        <Checkbox.Group label="Example">
          <Checkbox
            id="id"
            label="Check Me"
            checked={indeterminate}
            onChange={handleIndeterminate}
          />
          <Box pl="500">
            <Checkbox
              id="child1"
              onChange={flip(setChecked1, checked1)}
              checked={checked1}
              label="Check Me"
            />
            <Checkbox
              id="child2"
              onChange={flip(setChecked2, checked2)}
              checked={checked2}
              label="Check Me"
            />
          </Box>
        </Checkbox.Group>
      </div>
    );
  });
});
