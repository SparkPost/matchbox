import React from 'react';

import { StyledLink } from './styles';

import { Box } from '../Box';

export type ListBoxOptionProps = {
  selected?: string;
  value?: string | number;
  disabled?: boolean;
  index?: number;
  setSize?: number;
  onSelect?: (value: string | number) => void;
  children?: React.ReactNode;
};

const Option = React.forwardRef<HTMLButtonElement, ListBoxOptionProps>(function Option(props, ref) {
  const { value, index, disabled, setSize, selected, children, onSelect } = props;

  const isActive = React.useMemo(() => {
    return selected === value;
  }, [selected, value]);

  return (
    <Box
      as="li"
      role="option"
      id={value?.toString()}
      aria-setsize={setSize}
      aria-posinset={index}
      aria-selected={isActive}
      onClick={() => onSelect(value)}
    >
      <StyledLink
        $active={isActive}
        as="button"
        type="button"
        $disabled={disabled}
        tabIndex={-1}
        ref={ref}
      >
        {children}
      </StyledLink>
    </Box>
  );
});

Option.displayName = 'ListBox.Option';

export default Option;
