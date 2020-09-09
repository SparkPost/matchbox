import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { KeyboardArrowDown } from '@sparkpost/matchbox-icons';
import { chevron } from './styles';
import { focusOutline } from '../../styles/helpers';
import { getChild } from '../../helpers/children';
import { Label } from '../Label';
import { Error } from '../Error';
import { OptionalLabel } from '../OptionalLabel';
import useInputDescribedBy from '../../hooks/useInputDescribedBy';
import { HelpText } from '../HelpText';

import { Button } from '../Button';
import { Box } from '../Box';
import { Popover } from '../Popover';

import Option from './Option';

const StyledChevron = styled(KeyboardArrowDown)`
  ${chevron}
`;

const StyledButton = styled(Button)`
  text-align: left;
  background: ${props => (props.disabled ? props.theme.colors.gray['200'] : '')};
  &:hover {
    background: ${props => (props.disabled ? props.theme.colors.gray['200'] : 'transparent')};
  }
  ${focusOutline()}
`;

const StyledList = styled(Box)`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

function ListBox(props) {
  const {
    children,
    placeholder,
    disabled,
    id,
    label,
    error,
    errorInLabel,
    required,
    optional,
    helpText,
    defaultValue,
    onChange,
    ...rest
  } = props;

  const [open, setOpen] = useState(false);
  const [value, setValue] = React.useState(
    value || defaultValue != null ? defaultValue : placeholder,
  );

  const { describedBy, errorId, helpTextId } = useInputDescribedBy({
    id,
    hasHelpText: !!helpText,
    hasError: !!error,
  });

  const requiredIndicator = required ? (
    <Box as="span" pr="200" aria-hidden="true">
      *
    </Box>
  ) : null;

  function togglePopover() {
    setOpen(!open);
  }

  function handleClose() {
    setOpen(false);
  }

  function onSelect(value) {
    onChange && onChange(value);
    setOpen(false);
    setValue(value);
  }

  function getContentFromValue(value) {
    console.log(value);
    let options = getChild('ListBox.Option', children);
    let activeOption = options.find(option => {
      return option.props.value == value;
    });

    return activeOption ? activeOption.props.children : value;
  }

  let options = React.useMemo(() => {
    return getChild('ListBox.Option', children);
  }, [children]);

  const labelMarkup = (
    <Label
      id={id}
      label={label}
      // labelHidden={labelHidden} TODO Add this back in after hibana cutover
    >
      {requiredIndicator}
      {error && errorInLabel && (
        <Box as={Error} id={errorId} wrapper="span" error={error} fontWeight="400" />
      )}
      {optional && <OptionalLabel float />}
    </Label>
  );

  const helpMarkup = helpText ? <HelpText id={helpTextId}>{helpText}</HelpText> : null;

  return (
    <Box tabIndex="-1">
      {labelMarkup}
      <Popover
        id="listbox-popover"
        p="0"
        onClose={handleClose}
        open={open}
        as="div"
        width="100%"
        trigger={
          <Box position="relative">
            <StyledButton
              textAlign="left"
              fullWidth
              variant="mutedOutline"
              aria-haspopup="listbox"
              aria-describedby="listbox-popover"
              aria-pressed={open}
              aria-expanded={open}
              aria-labelledby={id}
              onClick={togglePopover}
              disabled={disabled}
              {...rest}
              {...describedBy}
            >
              {getContentFromValue(value)}
            </StyledButton>
            <StyledChevron size={24} disabled={disabled} />
          </Box>
        }
      >
        <StyledList
          as="ul"
          aria-activedescendant={value}
          width="100%"
          role="listbox"
          aria-labelledby={id}
        >
          {placeholder && (
            <Option value="" disabled>
              {placeholder}
            </Option>
          )}
          {getChild('ListBox.Option', children, {
            selected: value,
            setSize: options.length,
            onSelect,
          })}
        </StyledList>
      </Popover>
      {error && !errorInLabel && <Error id={errorId} error={error} />}
      {helpMarkup}
    </Box>
  );
}

ListBox.displayName = 'ListBox';
ListBox.propTypes = {
  placeholder: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  labelHidden: PropTypes.bool,
  helpText: PropTypes.node,
  error: PropTypes.string,
  errorInLabel: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  optional: PropTypes.bool,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ListBox.Option = Option;

export default ListBox;
