import React from 'react';
import Option, { SelectOptionProps } from './Option';

export type SelectOptionsProps = {
  options: SelectOptionProps[];
  placeholderValue?: string;
  placeholder: string;
};

function Options({ options, placeholder, placeholderValue }: SelectOptionsProps) {
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
