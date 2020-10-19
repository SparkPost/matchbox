import React from 'react';

import { Box, Checkbox, UnstyledLink } from '@sparkpost/matchbox';

export default {
  title: 'Form|Checkbox',
};

export const BasicCheckbox = () => <Checkbox id="id" label="Check Me" />;

export const WithoutLabel = () => <Checkbox id="id" label="Check Me" labelHidden />;

export const WithJSXInLabel = () => (
  <Checkbox
    id="id"
    label={
      <span>
        I agree to SparkPost's <UnstyledLink>Terms of Use</UnstyledLink>
      </span>
    }
  />
);

export const Disabled = () => (
  <>
    <Checkbox id="id5" label="Disabled" disabled />
    <Checkbox id="id6" label="Disabled Checked" disabled checked />
  </>
);

export const WithHelpText = () => <Checkbox id="id" label="Check Me" helpText="Check this box" />;

export const WithErrorAndRequired = () => (
  <Checkbox id="id" label="Check Me" error="I'm an error" required />
);

export const GroupWithLabel = () => (
  <div>
    <Checkbox.Group label="Example">
      <Checkbox id="id2" label="Check Me" />
      <Checkbox id="id3" label="Check Me" />
      <Checkbox id="id4" label="Check Me" />
    </Checkbox.Group>
  </div>
);

export const OptionalGroupWithLabel = () => (
  <div>
    <Checkbox.Group label="Example" optional>
      <Checkbox id="id2" label="Check Me" />
      <Checkbox id="id3" label="Check Me" />
      <Checkbox id="id4" label="Check Me" />
    </Checkbox.Group>
  </div>
);

export const GroupWithHiddenLabel = () => (
  <div>
    <Checkbox.Group label="I'm a group" labelHidden>
      <Checkbox id="id2" label="Check Me" />
      <Checkbox id="id3" label="Check Me" />
      <Checkbox id="id4" label="Check Me" />
    </Checkbox.Group>
  </div>
);

export const IndeterminateGroup = () => {
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [indeterminate, setIndeterminate] = React.useState(false);

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
        <Checkbox id="id" label="Check Me" checked={indeterminate} onChange={handleIndeterminate} />
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
};
