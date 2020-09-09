import React from 'react';
import PropTypes from 'prop-types';

import { StyledLink } from './styles';

import { Box } from '../Box';

const Option = React.forwardRef(function Option(props, ref) {
  const { value, index, disabled, setSize, selected, children, onSelect, tabIndex } = props;

  const isActive = React.useMemo(() => {
    return selected === value;
  }, [selected, value]);

  return (
    <Box
      as="li"
      role="option"
      id={value}
      aria-setsize={setSize}
      aria-posinset={index}
      aria-selected={isActive}
      disabled={disabled}
    >
      <StyledLink
        active={isActive}
        as="button"
        disabled={disabled}
        onClick={() => onSelect(value)}
        tabIndex={tabIndex}
        ref={ref}
      >
        {children}
      </StyledLink>
    </Box>
  );
});

Option.displayName = 'ListBox.Option';
Option.propTypes = {
  selected: PropTypes.string,
  value: PropTypes.oneOf([PropTypes.string, PropTypes.numbrer]),
  disabled: PropTypes.bool,
  index: PropTypes.number,
  setSize: PropTypes.number,
  onSelect: PropTypes.func,
};

export default Option;
