import React from 'react';
import PropTypes from 'prop-types';

import { StyledLink } from './styles';

import { Box } from '../Box';

const Option = React.forwardRef(function Option(props, ref) {
  const { value, index, disabled, setSize, selected, children, onSelect } = props;

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
        tabIndex={0}
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
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  index: PropTypes.number,
  setSize: PropTypes.number,
  onSelect: PropTypes.func,
};

export default Option;
