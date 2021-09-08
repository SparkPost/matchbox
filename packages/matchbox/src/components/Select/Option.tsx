import React from 'react';

export type OptionProps =
  | string
  | number
  | {
      value: string | number;
      label: string;
    };

const Option = ({ option }: { option: OptionProps }): JSX.Element => {
  if (typeof option === 'object') {
    const { value, label = value, ...rest } = option;
    return (
      <option value={value} {...rest}>
        {label}
      </option>
    );
  } else if (typeof option === 'string' || typeof option === 'number') {
    return <option value={option}>{option}</option>;
  }
};

export default Option;
