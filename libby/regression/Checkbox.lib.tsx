import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { Box, Checkbox, UnstyledLink } from '@sparkpost/matchbox';

describe('Visual Regression', () => {
  add('Checkbox', () => {
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
      <>
        <Checkbox id="id1" label="Check Me" />
        <Checkbox id="id2" label="Check Me" labelHidden />
        {/* JSX in label */}
        <Checkbox
          id="id3"
          label={
            <span>
              I agree to SparkPost&apos;s <UnstyledLink>Terms of Use</UnstyledLink>
            </span>
          }
        />
        {/* Disabled */}
        <Checkbox id="id4" label="Disabled" disabled />
        <Checkbox id="id5" label="Disabled Checked" disabled checked />
        {/* Help Text */}
        <Checkbox id="id6" label="Check Me" helpText="Check this box" />
        {/* Error and Help Text */}
        <Checkbox id="id7" label="Check Me" helpText="Check this box" error="I'm an error" />
        {/* Error and required */}
        <Checkbox id="id8" label="Check Me" error="I'm an error" required />
        {/* Group with label */}
        <Checkbox.Group label="Example">
          <Checkbox id="id9" label="Check Me" />
          <Checkbox id="id10" label="Check Me" />
          <Checkbox id="id11" label="Check Me" />
        </Checkbox.Group>
        {/* Group with hidden label */}
        <Checkbox.Group label="I'm a group" labelHidden>
          <Checkbox id="id12" label="Check Me" />
          <Checkbox id="id13" label="Check Me" />
          <Checkbox id="id14" label="Check Me" />
        </Checkbox.Group>
        {/* Optional group with label */}
        <Checkbox.Group label="Example" optional>
          <Checkbox id="id15" label="Check Me" />
          <Checkbox id="id16" label="Check Me" />
          <Checkbox id="id17" label="Check Me" />
        </Checkbox.Group>
        {/* Indeterminate group */}
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
      </>
    );
  });
});
