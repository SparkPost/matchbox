import React from 'react';
import Option, { OptionProps } from './Option';

export type OptionsProps = {
  options: OptionProps[];
  placeholderValue?: string;
  placeholder: string;
};

function Options({ options, placeholder, placeholderValue }) {
  let combined = options;

  if (placeholder) {
    combined = [{ label: placeholder, value: placeholderValue, disabled: true }, ...combined];
  }

  if (!combined && !combined.length) {
    return null;
  }

  return (
    <>
      {combined.map((option, key) => (
        <Option option={option} key={key} />
      ))}
    </>
  );
}

export default Options;
